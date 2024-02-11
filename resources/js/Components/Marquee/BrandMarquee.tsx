import {
    SiAmazon,
    SiApple,
    SiGithub,
    SiIbm,
    SiMeta,
    SiMicrosoft,
    SiSamsung,
    SiX,
} from "react-icons/si";
import Marquee from "react-fast-marquee";
import Brand from "@/components/Marquee/Brand";

export default function BrandMarquee() {
    return (
        <>
            <Marquee key={"m"} speed={100} direction={"right"}>
                <Brand>
                    <SiMeta className="w-14 h-14 transition-colors duration-100 hover:text-blue-500" />
                </Brand>
                <Brand>
                    <SiX className="w-12 h-12 transition-colors duration-100 hover:text-[#121212] dark:hover:text-white" />
                </Brand>
                <Brand>
                    <SiApple className="w-14 h-14 transition-colors duration-100 hover:text-[#121212] dark:hover:text-white" />
                </Brand>
                <Brand>
                    <SiIbm className="w-28 h-28 transition-colors duration-100 hover:text-[#006699]" />
                </Brand>
                <Brand>
                    <SiGithub className="w-14 h-14 transition-colors duration-100 hover:text-[#212121] dark:hover:text-white" />
                </Brand>
                <Brand>
                    <SiAmazon className="w-14 h-14 transition-colors duration-100 hover:text-[#ff9800]" />
                </Brand>
                <Brand>
                    <SiMicrosoft className="w-12 h-12 transition-colors duration-100 hover:text-[#00A1F1]" />
                </Brand>
            </Marquee>
        </>
    );
}
