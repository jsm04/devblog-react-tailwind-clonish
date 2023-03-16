import {} from 'react';
import githubSVG from '../assets/github.svg';
import googleSVG from '../assets/google.svg';
import microsoftSVG from '../assets/microsoft.svg';
import { MainFrame } from '../components/MainFrame';

type Props = {};

export const Login = (props: Props) => {
	return (
		<div className="min-h-screen flex justify-center items-center flex-wrap flex-col">
			<h2 className="text-6xl mb-4 text-accent">Login</h2>
			<div className="outline outline-1 outline-slate-600 h-[30rem] w-[28rem] p-6">
				<form className="form-control justify-around items-center h-full p-4">
					<div className="flex flex-col flex-wrap w-full ">
						<label className="label">
							<span className="label-text">Your Email</span>
						</label>
						<label className="input-group input-group-vertical">
							<input
								type="text"
								placeholder="info@site.com"
								className="input input-bordered"
							/>
						</label>
						<label className="label mt-5">
							<span className="label-text">Password</span>
						</label>
						<label className="input-group input-group-vertical">
							<input
								type="password"
								placeholder="******"
								className="input input-bordered"
							/>
						</label>
						<label className="cursor-pointer label mt-3">
							<span className="label-text">Remember me</span>
							<input
								type="checkbox"
								className="checkbox checkbox-accent"
							/>
						</label>
						<label className="label mt-3">
							<span className="label-text">
								Not registered yet?&nbsp;
								<a
									href="#"
									className="link text-accent"
								>
									Click here!
								</a>
							</span>
						</label>
					</div>

					<button
						type="submit"
						className="btn btn-wide relative bottom-0"
					>
						Sing in
					</button>
					<label
						htmlFor="login-options"
						className="btn btn-wide btn-outline btn-accent mt-5"
					>
						Login options
					</label>
				</form>
			</div>

			<input
				type="checkbox"
				id="login-options"
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="modal-box relative border border-gray-600 rounded-none h-4/6 flex flex-col justify-around">
					<label
						htmlFor="login-options"
						className="btn btn-xs btn-circle absolute right-4 top-2"
					>
						✕
					</label>
					<h3 className="font-medium text-2xl">0Auth</h3>
					<div className="bg-gray-600 p-4">
						<a
							href="#"
							className="flex justify-start items-center"
						>
							<img
								className="h-10"
								title="Github"
								src={githubSVG}
							/>
							<h3 className="font-semibold text-lg ml-5">Sing in with Github</h3>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 ml-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
								/>
							</svg>
						</a>
					</div>
					<div className="bg-gray-600 p-4">
						<a
							href="#"
							className="flex justify-start items-center"
						>
							<img
								className="h-10"
								title="Github"
								src={microsoftSVG}
							/>
							<h3 className="font-semibold text-lg ml-5">Sing in with Microsoft</h3>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 ml-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
								/>
							</svg>
						</a>
					</div>
					<div className="bg-gray-600 p-4">
						<a
							href="#"
							className="flex justify-start items-center"
						>
							<img
								className="h-10"
								title="Github"
								src={googleSVG}
							/>
							<h3 className="font-semibold text-lg ml-5">Sing in with Google</h3>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 ml-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
								/>
							</svg>
						</a>
					</div>
					<div className="bg-gray-600 p-4">
						<a
							href="#"
							className="flex justify-start items-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-8 h-8"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
								/>
							</svg>

							<h3 className="font-semibold text-lg ml-5">Create local account</h3>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 ml-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
