import { useEffect, useState } from 'react';
import { IoIosMoon, IoIosSunny } from 'react-icons/io';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { RxMoon } from 'react-icons/rx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export default function ThemeSwitcher({ ...props }: Props) {

    const currentTheme = (() => {
        if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
            return localStorage.getItem("theme");
        }
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
        return "light";
    })();

    const [theme, setTheme] = useState<string>(currentTheme || "light");

    const toggleDarkMode = () => {
        setTheme((theme) => theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
        if (theme === 'dark') {
            document.getElementsByTagName("html")[0].classList.add('dark')
        } else {
            document.getElementsByTagName("html")[0].classList.remove('dark')
        }
    }, [theme]);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <RxMoon className="text-primary"></RxMoon>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => { setTheme("light") }}>Light</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => { setTheme("dark") }}>Dark</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
