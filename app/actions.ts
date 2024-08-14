"use server";

import { z } from "zod";

const formSchema = z.object({
	email: z.string().email(),
	username: z.string().min(2),
	password: z
		.string()
		// 12345 일 경우에만 허용
		.refine((password) => password === "12345", {
			message: "잘못된 비밀번호입니다.",
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
		return null;
	}
}
