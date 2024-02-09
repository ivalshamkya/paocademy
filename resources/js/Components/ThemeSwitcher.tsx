import { useEffect, useState } from 'react';
import { IoIosMoon, IoIosSunny } from 'react-icons/io';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function ThemeSwitcher({ ...props } : Props) {

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
            <button
                {...props}
                type="button"
                onClick={toggleDarkMode}
                className="font-semibold text-2xl text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
                {theme === "light" ?
                    <IoIosSunny />
                    :
                    <IoIosMoon />
                }
            </button>
        </>
    )
}
