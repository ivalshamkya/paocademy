import * as React from "react"
import { Menu } from "lucide-react"
import { Link } from "@inertiajs/react";
import { RxMoon } from "react-icons/rx";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import SearchBar from "@/components/SearchBar";
import { Button } from "../ui/button";

export default function Navbar() {
    const [state, setState] = React.useState(false)

    const menus = [
        { title: "Home", path: "/your-path" },
        { title: "Blog", path: "/your-path" },
        { title: "About Us", path: "/your-path" },
        { title: "Contact Us", path: "/your-path" },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:justify-between md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5">
                    <div className="md:hidden"></div>
                    <Link href="/">
                        <h1 className="text-3xl text-blue-600 font-bold">
                            Course
                            <span className="text-primary text-xl font-semibold">.id</span>
                        </h1>
                    </Link>
                    <div className="hidden md:block">
                        <SearchBar className="w-full" />
                    </div>
                    <div className="md:hidden">
                        <button
                            className="text-primary outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
                <div
                    className={`flex justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"
                        }`}
                >
                    <ul className="justify-center items-center space-y-5 md:flex md:space-x-5 md:space-y-0">
                        {menus.map((item, idx) => (
                            <li key={idx} className="text-primary hover:text-blue-500">
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/login">
                                <Button variant="outline">Login</Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Button variant="blue">Sign up</Button>
                            </Link>
                        </li>
                        <li>
                            <ThemeSwitcher />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
