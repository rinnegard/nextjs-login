export default function RegisterPage() {
    return (
        <main className="flex-grow flex-shrink-0 basis-auto p-3 max-w-screen-lg mx-auto">
            <h1 className="text-center text-2xl mb-2">Register</h1>
            <form className="flex flex-col max-w-80">
                <label htmlFor="email" className="pe-2">
                    Email:
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    className="border border-lime-300 rounded-lg shadow-lg ps-2"
                />
                <label htmlFor="password" className="pe-2">
                    Password:
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="border border-lime-300 rounded-lg shadow-lg ps-2"
                />
            </form>
        </main>
    );
}
