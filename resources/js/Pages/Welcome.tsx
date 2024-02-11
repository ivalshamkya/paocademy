import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { BsCompass } from "react-icons/bs";
import { FcIdea, FcMoneyTransfer, FcReading } from "react-icons/fc";
import BrandMarquee from "@/components/Marquee/BrandMarquee";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
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
                            <Button variant={"default"} size={"lg"}>
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

                <div className="w-full py-7 px-2 bg-gray-50 border-b dark:border-b-white/20 dark:bg-neutral-900">
                    <h1 className="font-semibold text-center text-primary text-base md:text-xl">
                        Trusted by over 15,000 companies and millions of
                        learners around the worlds
                    </h1>
                    <div className="w-full flex justify-center items-center overflow-auto text-neutral-500 dark:text-neutral-400">
                        <BrandMarquee />
                    </div>
                </div>

                <div className="w-full min-h-[90svh] p-10">
                    <div className="flex flex-col justify-center items-center mb-32">
                        <h1 className="text-center text-3xl font-semibold mb-2.5 max-w-xl">Invest in your career with Courseid Plus</h1>
                        <h5 className="text-center text-sm max-w-xl">Get access to videos in over 90% of courses, Specializations, and Professional Certificates taught by top instructors from leading universities and companies.</h5>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="max-w-sm">
                            <div className="flex justify-center">
                                <FcReading className="w-14 h-14"/>
                            </div>
                            <h1 className="text-xl text-center font-semibold my-2">Learn anything</h1>
                            <p className="text-center">Explore any interest or trending topic, take prerequisites, and advance your skills</p>
                        </div>
                        <div className="max-w-sm">
                            <div className="flex justify-center">
                                <FcMoneyTransfer className="w-14 h-14"/>
                            </div>
                            <h1 className="text-xl text-center font-semibold my-2">Save money</h1>
                            <p className="text-center">Spend less money on your learning if you plan to take multiple courses this year</p>
                        </div>
                        <div className="max-w-sm">
                            <div className="flex justify-center">
                                <FcIdea className="w-14 h-14"/>
                            </div>
                            <h1 className="text-xl text-center font-semibold my-2">Flexible learning</h1>
                            <p className="text-center">Learn at your own pace, move between multiple courses, or switch to a different course</p>
                        </div>
                    </div>
                </div>

                <div className="w-full min-h-[90svh] p-10">
                    <div className="flex flex-col justify-center items-center mb-32">
                        <h1 className="text-center text-3xl font-semibold mb-2.5">Join thousands of Coursera Plus learners achieving their goals</h1>
                        <h5 className="text-center text-sm max-w-xl">77% of learners report career benefits, like landing a new job, earning a promotion, gaining applicable skills, and more.</h5>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="max-w-sm">
                            <div className="flex justify-center">
                                <FcReading className="w-14 h-14"/>
                            </div>
                            <h1 className="text-xl text-center font-semibold my-2">Learn anything</h1>
                            <p className="text-center">Explore any interest or trending topic, take prerequisites, and advance your skills</p>
                        </div>
                        <div className="max-w-sm">
                            <div className="flex justify-center">
                                <FcMoneyTransfer className="w-14 h-14"/>
                            </div>
                            <h1 className="text-xl text-center font-semibold my-2">Save money</h1>
                            <p className="text-center">Spend less money on your learning if you plan to take multiple courses this year</p>
                        </div>
                        <div className="max-w-sm">
                            <div className="flex justify-center">
                                <FcIdea className="w-14 h-14"/>
                            </div>
                            <h1 className="text-xl text-center font-semibold my-2">Flexible learning</h1>
                            <p className="text-center">Learn at your own pace, move between multiple courses, or switch to a different course</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
