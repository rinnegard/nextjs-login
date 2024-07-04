import Link from "next/link";
import LoginForm from "./LoginForm";

export default function LoginPage() {
    return (
        <main className="flex-grow flex-shrink-0 basis-auto p-3 max-w-screen-lg mx-auto">
            <h1 className="text-center text-2xl mb-2">Login</h1>
            <LoginForm></LoginForm>
            <Link
                className="text-blue-400 underline hover:text-blue-600 visited:text-purple-600"
                href={"/register"}
            >
                Register here
            </Link>
        </main>
    );
}
