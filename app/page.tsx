"use client";

import Button from "@/components/button";
import Image from "next/image";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { logIn } from "./actions";

export default function Home() {
	const [state, dispatch] = useFormState(logIn, null);

  console.log(state);
	return (
		<div className="flex flex-col w-full items-center justify-center pb-20 h-screen gap-10">
			<Image
				src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Heart%20on%20Fire.png"
				alt="Heart on Fire"
				width={60}
				height={60}
			/>

			<form
				action={dispatch}
				className="flex flex-col gap-5"
				noValidate
				autoComplete="off"
			>
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

				{state === undefined && (
					<div className="flex rounded-xl h-10 bg-green-500 px-3 gap-3 items-center">
						<svg
							className="size-6 h-10"
							data-slot="icon"
							fill="none"
							stroke-width="1.5"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							></path>
						</svg>
						<p>Welcome back!</p>
					</div>
				)}
			</form>
		</div>
	);
}
