import { useState, useEffect } from "react";
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
import { useRouter } from "next/router";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: false,
});

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const { isPortrait, isReady } = useOrientation();

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <>
            <LoadingScreen
                isReady={isReady}
                onAnimationComplete={handleLoadingComplete}
            />
            <main
                className={`flex min-h-screen flex-col items-center ${
                    inter.className
                } ${
                    isReady ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
            >
                <div className="fixed -top-10 left-0 -z-30">
                    <div className="absolute w-[100vw] h-[110vh] dark:backdrop-blur-0">
                        {/* Background content */}
                    </div>
                    <div className="mixBlurr dark:w-screen h-[110vh] -z-50 opacity-25"></div>
                </div>
                <Appbar />
                <LandingPage />
                <ProjectsSections />
                <Experiences />
                <Achivements />
                <CharacterDevelopment />
                <AboutMe />
                <div className="w-full h-16 bg-[#E6E6E6] dark:bg-[#242424] flex items-center justify-center">
                    <div className="xl:w-[80rem] w-screen mx-4 flex items-center justify-between">
                        <div>Radhe Krishna</div>
                        <div className="flex [&>*]:mx-2">
                            <a
                            className="hover:cursor-pointer"
                                href="mailto:adityayadav300645@gmail.com"
                            >
                                <BiLogoGmail size={isPortrait ? 22 : 28} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/aditya-nandkishore-yadav-5a372b1b1/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin size={isPortrait ? 24 : 30} />
                            </a>
                            <a
                                href="https://www.instagram.com/aditya.n.yadav/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagramSquare
                                    size={isPortrait ? 24 : 30}
                                />
                            </a>
                            <a
                                href="https://github.com/ADITYA300645"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaSquareGithub size={isPortrait ? 24 : 30} />
                            </a>
                            <a
                                href="https://leetcode.com/u/Aditya300645/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiLeetcode size={isPortrait ? 22 : 28} />
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
