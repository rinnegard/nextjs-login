import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
    return (
        <main className="flex-grow flex-shrink-0 basis-auto p-3 max-w-screen-lg mx-auto">
            <h1 className="text-center text-2xl mb-2">Register</h1>
            <RegisterForm></RegisterForm>
        </main>
    );
}
