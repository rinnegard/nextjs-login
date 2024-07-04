import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-lime-300 p-3 flex flex-row justify-between items-center">
            <h1 className="text-3xl font-bold">Test Title</h1>
            <nav>
                <ul>
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/users"}>Users</Link>
                    </li>
                    <li>
                        <Link href={"/login"}>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
