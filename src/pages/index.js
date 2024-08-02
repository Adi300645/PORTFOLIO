import { Inter } from "next/font/google";
import Appbar from "@/components/Appbar/Appbar";
import LandingPage from "@/sections/LandingPage/LandingPage";
import ProjectsSections from "@/sections/Projects/ProjectsSections";
import Experiences from "@/sections/Experiences/Experiences";
import Achivements from "@/sections/Achivements/Achivements";
import CharacterDevelopment from "@/sections/CharacterDevelopment/CharacterDevelopment";
import AboutMe from "@/sections/AboutMe/AboutMe";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import useOrientation from "@/customHooks/deviceInfo/useOrientation/useOrientation";

const inter = Inter({ subsets: ["latin"],display:"swap"
 });

export default function Home() {

    var isPortrait = useOrientation()

    return (
        <main
            className={`flex min-h-screen flex-col items-center ${inter.className}`}
        >
            <div className="fixed -top-10 left-0 -z-30">
                <div className="absolute w-[100vw] h-[110vh] dark:backdrop-blur-0">
                    {/* <div className="absolute top-0 left-0 w-48 h-48 bg-white -z-40 blur-3xl rounded-full"> </div> */}
                </div>
                <div className="mixBlurr dark:w-screen h-[110vh] -z-50 opacity-25"></div>
            </div>
            <Appbar></Appbar>


            <LandingPage></LandingPage>
            <ProjectsSections></ProjectsSections>
            <Experiences></Experiences>
            <Achivements />
            <CharacterDevelopment></CharacterDevelopment>
            <AboutMe></AboutMe>
            <div className="w-full h-16 bg-[#E6E6E6] dark:bg-[#242424] flex items-center justify-center">
                <div className="xl:w-[80rem] w-screen mx-4 flex items-center justify-between">
                    <div>Radhe Krishna</div>
                    <div className="flex [&>*]:mx-2">
                        <BiLogoGmail size={isPortrait == true ? 22 :28 } className=""></BiLogoGmail>
                        <FaLinkedin size={isPortrait == true ? 24 :30 }></FaLinkedin>
                        <FaInstagramSquare size={isPortrait == true ? 24 :30 }></FaInstagramSquare>
                        <FaSquareGithub size={isPortrait == true ? 24 :30 }></FaSquareGithub>
                        <SiLeetcode size={isPortrait == true ? 22 :28 }></SiLeetcode>
                    </div>
                </div>
            </div>
        </main>
    );
}
