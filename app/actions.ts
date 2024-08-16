"use server";

import { z } from "zod";

const formSchema = z.object({
	email: z
		.string()
		.email()
		.refine((email) => email.endsWith("@zod.com"), {
			message: "'@zod.com' 이메일만 허용됩니다.",
		}),
	username: z.string().min(5),
	password: z
		.string()
		.min(10)
		.refine((password) => /[0-9]/.test(password), {
			message: "비밀번호는 1개 이상의 숫자를 포함해야 합니다.",
		}),
});
export async function logIn(prevState: any, formData: FormData) {
	await new Promise((resolve) => setTimeout(resolve, 500));

	const data = {
		email: formData.get("email"),
		username: formData.get("username"),
		password: formData.get("password"),
	};
	const result = formSchema.safeParse(data);
	if (!result.success) {
		console.log(result.error);
		console.log(result.error.flatten());
		return result.error.flatten();
	} else {
		console.log("Success");
	}
}
