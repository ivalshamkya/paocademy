import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { BsCompass } from "react-icons/bs";
import { FcIdea, FcMoneyTransfer, FcReading } from "react-icons/fc";
import BrandMarquee from "@/components/Marquee/BrandMarquee";
import { badgeVariants } from "@/components/ui/badge";
import { IoSearch } from "react-icons/io5";
import Footer from "@/components/Footer/Footer";

export default function Welcome() {

    const popularSearch = [
        {
            category: "Computer Science",
        },
        {
            category: "Business",
        },
        {
            category: "Music",
        },
        {
            category: "Photography",
        },
        {
            category: "Personal Development",
        },
        {
            category: "Marketing",
        }
    ]

    return (
        <>
            <Head title="Welcome" />
            <Navbar />
            <div className="relative sm:flex sm:flex-col sm:justify-center sm:items-center bg-center dark:bg-dots-lighter dark:bg-[#121212] selection:bg-blue-500 selection:text-white">
                <div className="bg-blue-400/30 relative w-full flex flex-col-reverse md:flex-row md:gap-5 p-5">
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-full p-5">
                            <h1 className="text-4xl font-bold mb-1.5">
                                Skills that drive you forward
                            </h1>
                            <p className="mb-5 text-lg">
                                Technology and the world of work change fast —
                                with us, you`re faster. Get the skills to
                                achieve goals and stay competitive.
                            </p>
                            <Button variant={"blue"} size={"lg"}>
                                Start learn now
                            </Button>
                        </div>
                    </div>
                    <div className="p-10 md:p-7">
                        <img
                            src="/hero1.png"
                            alt=""
                            className="rounded brightness-75"
                        />
                    </div>
                </div>

                <div className="w-full py-7 px-2 bg-gray-50 border-b dark:border-b-white/20 dark:bg-stone-900">
                    <h1 className="font-bold text-center text-primary text-lg md:text-2xl">
                        Trusted by over 15,000 companies and millions of
                        learners around the worlds
                    </h1>
                    <div className="w-full flex justify-center items-center overflow-auto text-neutral-500 dark:text-neutral-400">
                        <BrandMarquee />
                    </div>
                </div>

                <section className="w-full min-h-[90svh] p-10 mb-10">
                    <div className="flex flex-col justify-center items-center mb-12 md:mb-32">
                        <h1 className="flex flex-wrap justify-center text-center text-3xl font-semibold mb-2.5 max-w-xl">Invest in your career with
                            <span className="w-fit relative mx-2">
                                Courseid
                                <div className="absolute bottom-0">
                                    <img src="/gradient-underline.png" alt="underline" className="w-full" />
                                </div>
                            </span>
                        </h1>
                        <h5 className="text-center text-sm max-w-xl">Get access to videos in over 90% of courses, Specializations, and Professional Certificates taught by top instructors from leading universities and companies.</h5>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="max-w-sm">
                            <div className="flex justify-center">
                                <FcReading className="w-14 h-14" />
                            </div>
                            <h1 className="text-xl text-center font-semibold my-2">Learn anything</h1>
                            <p className="text-center">Explore any interest or trending topic, take prerequisites, and advance your skills</p>
                        </div>
                        <div className="max-w-sm">
                            <div className="flex justify-center">
                                <FcMoneyTransfer className="w-14 h-14" />
                            </div>
                            <h1 className="text-xl text-center font-semibold my-2">Save money</h1>
                            <p className="text-center">Spend less money on your learning if you plan to take multiple courses this year</p>
                        </div>
                        <div className="max-w-sm">
                            <div className="flex justify-center">
                                <FcIdea className="w-14 h-14" />
                            </div>
                            <h1 className="text-xl text-center font-semibold my-2">Flexible learning</h1>
                            <p className="text-center">Learn at your own pace, move between multiple courses, or switch to a different course</p>
                        </div>
                    </div>
                </section>

                <section className="w-full min-h-[90svh] p-10">
                    <div className="flex flex-col justify-center items-center mb-12 md:mb-32">
                        <h1 className="flex items-center text-center text-2xl md:text-3xl font-semibold mb-2.5">Join thousands of
                            Courseid
                            learners achieving their goals</h1>
                        <h5 className="text-center text-sm max-w-xl">77% of learners report career benefits, like landing a new job, earning a promotion, gaining applicable skills, and more.</h5>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {
                            [...Array(4)].map(() => (
                                <div className="grid gap-3 md:gap-4">
                                    {
                                        [...Array(4)].map(() => (
                                            <div className="max-w-[400px] h-auto bg-white border rounded-2xl p-5 transition ease-linear duration-100 hover:scale-[1.007] hover:shadow-sm dark:border-gray-700/50 dark:bg-neutral-800">
                                                <div className="flex items-center gap-2.5 mb-1 md:mb-4">
                                                    <div className="w-9 md:w-[50px] h-9 md:h-[50px] bg-gray-500 rounded-full overflow-hidden">
                                                        <img src="https://picsum.photos/200" alt="profil image" />
                                                    </div>
                                                    <div>
                                                        <h1 className="text-sm md:text-lg font-semibold">Valentina</h1>
                                                        <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Indonesia</span>
                                                    </div>
                                                </div>
                                                <p className="text-sm md:text-base leading-snug">{randtext()}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </section>

                <section className="w-full grid place-content-center min-h-[50svh] bg-blue-400/30 p-10">
                    <div className="md:max-w-3xl w-full flex flex-col justify-center items-center">
                        <h1 className="flex items-center text-center text-2xl md:text-3xl font-semibold mb-2.5">Search the 7,000+ courses in Courseid</h1>
                        <h5 className="text-center text-sm max-w-xl mb-5">77% of learners report career benefits, like landing a new job, earning a promotion, gaining applicable skills, and more.</h5>
                        <div className="w-full flex items-center mb-4">
                            <input type="search" className="w-full rounded-l-lg border border-black/20 bg-white text-zinc-900 dark:text-white dark:bg-neutral-800 dark:border-gray-700/50" />
                            <Button variant={"default"} className="rounded-r-lg rounded-l-none">
                                <IoSearch className="w-4 h-4"></IoSearch>
                                </Button>
                        </div>
                        <div className="flex flex-row flex-wrap gap-1.5">
                            <h1 className="font-semibold">Popular Search: </h1>
                            {
                                popularSearch.length > 0 && popularSearch.map((item) => <Link href="#" className={badgeVariants({ variant: "default" })}>{item.category}</Link>)
                            }
                        </div>
                    </div>
                </section>

                <Footer />

            </div>
        </>
    );
}


const randtext = () => {
    const num: number = parseInt((Math.random() * (5 - 1) + 1).toString());
    console.log(num)
    return [...Array(num)].map(() => "Lorem ipsum dolor sit amet consectetur adipisicing elit. ")
}
