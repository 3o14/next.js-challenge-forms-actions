import { InputHTMLAttributes } from "react";

interface InputProps {
	name: string;
	errors?: string[];
}

const emojis: Record<string, JSX.Element> = {
	email: (
		<svg
			data-slot="icon"
			fill="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"></path>
			<path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"></path>
		</svg>
	),
	username: (
		<svg
			data-slot="icon"
			fill="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				clip-rule="evenodd"
				fill-rule="evenodd"
				d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
			></path>
		</svg>
	),
	password: (
		<svg
			data-slot="icon"
			fill="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				clip-rule="evenodd"
				fill-rule="evenodd"
				d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
			></path>
		</svg>
	),
};

export default function Input({
	name,
	errors = [],
	...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
	return (
		<div className="relative">
			{emojis[name] && (
				<div className="absolute top-[10px] text-neutral-600 left-3 size-5">
					{emojis[name]}
				</div>
			)}
			<input
				name={name}
				className={`bg-transparent pl-10 px-3 rounded-full w-full h-10 focus:outline-2 focus:outline-neutral-200 ring-2 focus:ring-4 transition ring-neutral-200 focus:ring-neutral-300 border-none placeholder:text-neutral-400 ${errors.length > 0 ? "ring-red-500" : ""}`} 
				{...rest}
			/>
			{errors.map((error, index) => (
				<p key={index} className="text-red-500 font-medium">
					{error}
				</p>
			))}
		</div>
	);
}
