"use client";

import Button from "@/components/button";
import Image from "next/image";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { logIn } from "./actions";

export default function Home() {
	const [state, dispatch] = useFormState(logIn, null);
	return (
		<div className="flex flex-col w-full items-center justify-center pb-20 h-screen gap-10 w-96">
			<Image
				src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Heart%20on%20Fire.png"
				alt="Heart on Fire"
				width={60}
				height={60}
			/>

			<form action={dispatch} className="flex flex-col gap-5">
				<Input
					name="email"
					type="email"
					required
					placeholder="Email"
					errors={state?.fieldErrors.email}
				/>
				<Input
					name="username"
					type="username"
					required
					placeholder="Username"
					errors={state?.fieldErrors.username}
				/>
				<Input
					name="password"
					type="password"
					required
					placeholder="Password"
					errors={state?.fieldErrors.password}
				/>
				<Button text="Login" />
			</form>
		</div>
	);
}
