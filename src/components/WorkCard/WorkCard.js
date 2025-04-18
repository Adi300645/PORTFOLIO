import useOrientation from "@/customHooks/deviceInfo/useOrientation/useOrientation";
import React from "react";
import styles from "./WorkCard.module.css";
import Image from "next/image";
import { useTheme } from "next-themes";

function WorkCard({ projectName, lightUrl, darkUrl }) {
    const { isPortrait } = useOrientation();
    const { theme } = useTheme();

    const subtitle = "Your Digital Companion in Psychological Wellness"; // Subtitle text


    if (isPortrait) {
        return (
            <div className="bg-white dark:bg-transparent dark:border-[0.5px] dark:border-[#aaaaaa50] dark:rounded-lg backdrop-blur-lg shadow-lg p-3 my-4 flex flex-col items-center justify-center reveal">
                <div className="relative w-full h-56 bg-gray-200 dark:bg-transparent dark:backdrop-blur-3xl dark:shadow-2xl dark:border-[0.5px] dark:border-[#99999922] dark:rounded-lg overflow-hidden flex items-center justify-center">
                    <Image
                        src={theme === "light" ? lightUrl : darkUrl}
                        width={1200}
                        height={1200}
                        alt="Project Image"
                        className="object-cover w-full h-full"
                    />
                    {/* Subtitle positioned over the image */}
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
                        {subtitle}
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <div className={`text-2xl font-bold text-gray-800 dark:text-white inner_text_shadow`}>
                        {projectName}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-transparent dark:border-[0.5px] dark:border-[#aaaaaa50] dark:rounded-lg backdrop-blur-lg shadow-lg p-3 m-2 flex w-[40rem] reveal">
            <div className="relative w-[34rem] h-[18rem] bg-gray-200 dark:bg-transparent dark:backdrop-blur-3xl dark:shadow-2xl dark:border-[0.5px] dark:border-[#99999922] dark:rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                    src={theme !== "dark" ? lightUrl : darkUrl}
                    width={1500}
                    height={1500}
                    alt="Project Image"
                    className="object-cover w-full h-full"
                />
                {/* Subtitle positioned over the image */}
                <div className="absolute bottom-0 left-0 w-full bg-black  bg-opacity-40 text-white text-center py-2">
                    {subtitle}
                </div>
            </div>
            <div className="p-4 flex flex-col">
                <div className={`text-3xl font-semibold text-gray-800 dark:text-white ${styles.verticleText}`}>
                    {projectName}
                </div>
            </div>
        </div>
    );
}

export default WorkCard;
