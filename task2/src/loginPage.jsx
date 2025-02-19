import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
export default function Login({ setToken }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState(null); // New state for handling error messages
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:8080/api/auth/login",
				{
					username,
					password,
				}
			);
			setToken(response.data.token);
			localStorage.setItem("token", response.data.token);
			// navigate("/dashboard");
		} catch (error) {
			console.error("Authentication failed:", error);
			setToken(null);
			localStorage.removeItem("token");
			if (error.response && error.response.data) {
				setErrorMessage(error.response.data); // Set the error message if present in the error response
			} else {
				setErrorMessage("An unexpected error occurred. Please try again.");
			}
		}
	};
	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						alt="Your Company"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						className="mx-auto h-10 w-auto"
					/>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="username"
									name="email"
									type="email"
									required
									autoComplete="email"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Password
								</label>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									autoComplete="current-password"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Sign in
							</button>
							<div>{errorMessage}</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

Login.propTypes = {
	setToken: PropTypes.func.isRequired,
};
