
import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <nav className="w-full bg-gray-500 py-[1.4rem]">
            <ul className="flex items-center justify-between">
                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/about">
                    <li>About</li>
                </Link>

                <Link to="/sign-up">
                    <li>Sign Up</li>
                </Link>
            </ul>
        </nav>
    )
}