import useOrientation from "@/customHooks/deviceInfo/useOrientation/useOrientation";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

function PhotoCard({ projectName, lightUrl, darkUrl }) {
    const isPortrait = useOrientation();
    const { theme } = useTheme();

    const imageComponent = (
        theme !== "dark" ? (
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
                alt="Dark Mode Image"
                className="w-full h-full object-cover"
            />
        )
    );

    if (isPortrait) {
        return (
            <div className="bg-white p-3 m-0 flex flex-col dark:bg-transparent dark:backdrop-blur dark:border-[0.5px] reveal dark:border-[#aaa6] shadow-xl">
                <div className="w-full h-48 bg-gray-200 dark:bg-transparent dark:backdrop-blur-3xl dark:shadow-xl dark:border-[0.5px] dark:border-[#aaa3] dark:rounded flex items-center justify-center overflow-hidden">
                    {imageComponent}
                </div>
                <div className="mt-2 text-gray-500 inner_text_shadow font-semibold text-center">
                    {projectName}
                </div>
            </div>
        );
    }

    return (
        <div className="h-max w-max bg-white shadow p-3 m-2 flex dark:bg-transparent dark:backdrop-blur dark:border-[0.5px] reveal dark:border-[#aaa6]">
            <div className="w-[38rem] h-[18rem] overflow-hidden bg-gray-200 dark:bg-transparent dark:backdrop-blur-3xl dark:shadow-xl dark:border-[0.5px] dark:border-[#aaa3] dark:rounded flex items-center justify-center">
                {imageComponent}
            </div>
        </div>
    );
}

export default PhotoCard;