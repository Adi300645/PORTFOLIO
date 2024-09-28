"use client";
import React from "react";
import styles from "./ProjectsCard.module.css";
import useOrientation from "@/customHooks/deviceInfo/useOrientation/useOrientation";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Montserrat, Pixelify_Sans, Sansita } from "next/font/google";

const pixelify_Sans = Sansita({
    subsets: ["latin"],
    weight:["400","700","800","900"],
    display: "swap",
});
const montserrat = Montserrat({
    subsets: ["latin"],
    weight:["400","700","800","900"],
    display: "swap",
});

function ProjectsCard({
    projectName,
    lightUrl,
    lightHoverImageUrl,
    darkUrl,
    darkHoverUrl,
    isText,
    tagLine,
    discription,
    exploreLink,
    Email,
}) {
    const isPortrait = useOrientation();
    const { theme } = useTheme(); // Fetch the current theme

    // Portrait Mode
    if (isPortrait) {
        if (isText) {
            return (
                <div
                    className={`bg-white dark:bg-transparent reveal dark:backdrop-blur-xl flex flex-col dark:border dark:border-opacity-50 dark:rounded shadow-lg p-3 my-4 ${styles.parallelScroll}`}
                >
                    <div className="w-full min-h-48 bg-gray-200 dark:bg-transparent dark:backdrop-blur-3xl dark:border-2 dark:rounded dark:border-gray-300 dark:border-opacity-20 dark:shadow-2xl flex items-center justify-center">
                        <div className="text-gray-500 font-semibold inner_text_shadow">
                            {projectName}
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="text-xl font-semibold text-gray-800 inner_text_shadow">
                            {projectName}
                        </div>
                        <div className="text-gray-600">{tagLine}</div>
                        <div className="mt-2 text-gray-500 dark:text-gray-300">
                            {discription}
                        </div>
                    </div>
                </div>
            );
        }
        // If it's not text-based in portrait mode
        return (
            <div
                className={`bg-white dark:bg-transparent reveal dark:backdrop-blur-xl flex flex-col dark:border dark:border-opacity-50 dark:rounded shadow-lg p-3 my-4 ${styles.parallelScroll}`}
            >
                <div className="w-full min-h-48 bg-gray-200 dark:bg-transparent dark:backdrop-blur-3xl dark:border-2 dark:rounded dark:border-gray-300 dark:border-opacity-20 dark:shadow-2xl flex items-center justify-center">
                    <div className="text-gray-500 font-semibold inner_text_shadow">
                        {projectName}
                    </div>
                </div>
                <div className="p-4">
                    <div className="text-xl font-semibold text-gray-800 inner_text_shadow">
                        {projectName}
                    </div>
                    <div className="text-gray-600">Sub text</div>
                </div>
            </div>
        );
    }

    // Landscape Mode
    if (isText) {
        return (
            <div
                className={`bg-white dark:bg-transparent reveal dark:backdrop-blur-xl flex flex-col dark:border dark:border-opacity-50 dark:rounded shadow-lg p-3 m-2`}
            >
                <div className="flex justify-center items-center">
                    <div
                        className={`w-[38rem] h-[36rem] bg-cover bg-center bg-gray-300 dark:bg-[#2B2A33] dark:backdrop-blur-xl dark:border-2 dark:rounded dark:border-gray-300 dark:border-opacity-20 dark:shadow-2xl px-12 pt-20`}
                    >
                        <div
                            className={`text-gray-700 dark:text-green-50 font-bold text-[84px] ${pixelify_Sans.className}`}
                        >
                            {projectName}
                        </div>
                        <div className="italic text-xs">{tagLine}</div>
                        <div className={`mt-8 text-gray-900 text-[14px] dark:text-gray-300 ${montserrat.className}`}>
                            {discription}
                        </div>
                        
                        {/* Flex container for the buttons */}
                        <div className="flex items-center w-full mt-16 space-x-4">
                            <div
                                className={`text-[#777] dark:text-white drop-shadow-lg text-xl mix-blend-multiply dark:mix-blend-normal hover:cursor-pointer hover:underline ${styles.LightUp} py-2`}
                            >
                                Explore The Project
                            </div>
                            <div
                                className={`text-[#777] dark:text-white drop-shadow-lg text-xl mix-blend-multiply dark:mix-blend-normal hover:cursor-pointer underline px-4 py-2`}
                            >
                                Email Me
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="text-xl font-semibold text-gray-800 dark:text-gray-200 inner_text_shadow">
                        {projectName}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                        Sub text
                    </div>
                </div>
            </div>
        );
    }
    

    // Image-based rendering if `isText` is false
    return (
        <div
            className={`bg-white dark:bg-transparent reveal dark:backdrop-blur-xl flex flex-col dark:border dark:border-opacity-50 dark:rounded shadow-lg p-3 m-2`}
        >
            <div
                className={`w-[38rem] h-[36rem]  bg-gray-200 dark:bg-transparent dark:backdrop-blur-3xl dark:border-2 dark:rounded dark:border-gray-300 dark:border-opacity-20 dark:shadow-2xl flex items-center justify-center`}
            >
                    {theme === "light" ? (
                        <Image
                            src={lightUrl}
                            width={1500}
                            height={1500}
                            alt="Light Mode Image"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <Image
                            src={darkUrl}
                            width={1500}
                            height={1500}
                            className="w-full h-full object-cover"
                            alt="Dark Mode Image"
                        />
                    )}

            </div>
            <div className="p-4">
                <div className="text-xl font-semibold text-gray-800 dark:text-gray-200 inner_text_shadow">
                    {projectName}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Sub text</div>
            </div>
        </div>
    );
}

export default ProjectsCard;
