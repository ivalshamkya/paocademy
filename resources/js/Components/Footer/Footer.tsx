export default function Footer() {
    return (
        <>
            <footer className="w-full bg-[#171717] p-10">
                <div className="grid grid-cols-2 mb-7">
                    <div className="flex flex-wrap justify-between text-sm">
                        <div className="flex flex-col gap-2 md:gap-2.5 mb-2 md:mb-0 text-white">
                            <a href="#" className="w-fit whitespace-nowrap underline-offset-2 hover:underline">Courseid Bussiness</a>
                            <a href="#" className="w-fit whitespace-nowrap underline-offset-2 hover:underline">Teach on courseid</a>
                            <a href="#" className="w-fit whitespace-nowrap underline-offset-2 hover:underline">Get the app</a>
                            <a href="#" className="w-fit whitespace-nowrap underline-offset-2 hover:underline">About us</a>
                            <a href="#" className="w-fit whitespace-nowrap underline-offset-2 hover:underline">Contact us</a>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-2.5 mb-2 md:mb-0 text-white">
                            <a href="#" className="w-fit whitespace-nowrap underline-offset-2 hover:underline">Careers</a>
                            <a href="#" className="w-fit whitespace-nowrap underline-offset-2 hover:underline">Blog</a>
                            <a href="#" className="w-fit whitespace-nowrap underline-offset-2 hover:underline">Help and Support</a>
                            <a href="#" className="w-fit whitespace-nowrap underline-offset-2 hover:underline">Affiliate</a>
                            <a href="#" className="w-fit whitespace-nowrap underline-offset-2 hover:underline">Investors</a>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-2.5 mb-2 md:mb-0 text-white">
                            <a href="#" className="w-fit whitespace-nowrap underline-offset-2 hover:underline">Terms</a>
                            <a href="#" className="w-fit whitespace-nowrap underline-offset-2 hover:underline">Privacy policy</a>
                            <a href="#" className="w-fit whitespace-nowrap underline-offset-2 hover:underline">Cookies settings</a>
                            <a href="#" className="w-fit whitespace-nowrap underline-offset-2 hover:underline">Sitemap</a>
                            <a href="#" className="w-fit whitespace-nowrap underline-offset-2 hover:underline">Accessibility statement</a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl text-blue-500 font-bold">
                        Course
                        <span className="text-white text-xl font-semibold">.id</span>
                    </h1>
                    <h1 className="text-white text-sm">&copy; courseid, inc.</h1>
                </div>
            </footer>
        </>
    );
}
