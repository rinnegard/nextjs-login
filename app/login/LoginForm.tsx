"use client";
import { useEffect, useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        console.log("Email: ", email);
        console.log("Password: ", password);
    }, [email, password]);

    function handleLogin() {
        console.log("Logging in...");

        console.log("Email: ", email);
        console.log("Password: ", password);
    }
    return (
        <form
            className="flex flex-col max-w-80"
            onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
            }}
        >
            <label htmlFor="email" className="pe-2">
                Email:
            </label>
            <input
                type="text"
                name="email"
                id="email"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                className="border border-lime-300 rounded-lg shadow-lg ps-2"
            />
            <label htmlFor="password" className="pe-2">
                Password:
            </label>
            <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                className="border border-lime-300 rounded-lg shadow-lg ps-2"
            />
            <button
                className="border border-lime-300 rounded-lg bg-lime-300 hover:bg-lime-500  active:bg-lime-200 shadow-lg ps-2 my-4"
                type="submit"
            >
                Log in
            </button>
        </form>
    );
}
