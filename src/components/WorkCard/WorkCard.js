import useOrientation from "@/customHooks/deviceInfo/useOrientation/useOrientation";
import React from "react";
import styles from "./WorkCard.module.css"

function WorkCard({ projectName }) {
    var isPortrait = useOrientation();

    if (isPortrait) {
        return (
            <div class="bg-white dark:bg-transparent dark:border-[0.5px] dark:border-[#aaaaaa50] dark:rounded backdrop-blur shadow p-3 m-0 my-4 flex reveal">
                <div class="w-full h-64 bg-gray-200 dark:bg-transparent dark:backdrop-blur-3xl dark:shadow-2xl dark:border-[0.5px] dark:border-[#99999922] dark:rounded flex items-center justify-center">
                    <div class="text-gray-500 dark:text-white inner_text_shadow font-semibold">
                        {projectName}
                    </div>
                </div>
                    <div class={`text-xl font-extrabold rotate-180 mx-2 text-gray-800 dark:text-white ${styles.verticleText} inner_text_shadow`}>
                        {projectName}
                    </div>
            </div>
        );
    }

    return (
        <div class="bg-white dark:bg-transparent dark:border-[0.5px] dark:border-[#aaaaaa50] dark:rounded backdrop-blur shadow p-3 m-2 flex w-[40rem] reveal">
            <div class="w-[34rem] h-[18rem] bg-gray-200 dark:bg-transparent dark:backdrop-blur-3xl dark:shadow-2xl dark:border-[0.5px] dark:border-[#99999922] dark:rounded flex items-center justify-center">
                <div class="text-gray-500 dark:text-white inner_text_shadow font-semibold">
                    {projectName}
                </div>
            </div>
            <div class="p-4 flex flex-col">
                <div class="text-xl font-semibold text-gray-800 dark:text-white">
                    Project Name
                </div>
                <div class="text-gray-600 dark:text-[#bbb]">Sub text</div>
            </div>
        </div>
    );
}

export default WorkCard;
