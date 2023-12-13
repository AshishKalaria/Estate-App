import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
export default function SignUp() {
	const [formData, setFormData] = useState({});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const changeHandler = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const res = await fetch("/api/v1/auth/signup", {
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			if (data.success === false) {
				setLoading(false);
				setError(data.message);
				return;
			}
			setLoading(false);
			setError(null);
			navigate("/signin");
		} catch (error) {
			setError(error.message);
			setLoading(false);
		}
	};
	console.log(formData);
	return (
		<div className="p-3 max-w-lg mx-auto">
			<h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<input
					type="text"
					placeholder="Username"
					className="border p-3 rounded-lg"
					id="username"
					onChange={changeHandler}
				/>
				<input
					type="email"
					placeholder="Email"
					className="border p-3 rounded-lg"
					id="email"
					onChange={changeHandler}
				/>

				<input
					type="password"
					placeholder="Password"
					className="border p-3 rounded-lg"
					id="password"
					onChange={changeHandler}
				/>
				<button
					disabled={loading}
					className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80"
				>
					{loading ? "Loading..." : "Sign Up"}
				</button>
				<OAuth />
			</form>
			<div className="flex gap-2 mt-5">
				<p>Have an account?</p>
				<Link to={"/signin"}>
					<span className="text-blue-700 ">Sign in</span>
				</Link>
			</div>
			{error && <p className="text-red-800 mt-5">{error}</p>}
		</div>
	);
}
