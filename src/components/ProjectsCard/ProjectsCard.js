"use client";
import React, { useEffect } from "react";
import styles from "./ProjectsCard.module.css";
import useOrientation from "@/customHooks/deviceInfo/useOrientation/useOrientation";

function ProjectsCard({projectName}) {

    const isPortrait = useOrientation()
    if (isPortrait){
        return (<div
            class={`bg-white dark:bg-transparent reveal dark:backdrop-blur-xl flex flex-col dark:border-[0.5px] dark:rounded dark:border-[#aaa6] shadow-lg p-3 mx-0 my-4 ${styles.parallelScroll}`}
        >
            <div class="w-full min-h-48 bg-gray-200 dark:bg-transparent dark:backdrop-blur-3xl dark:border-2 dark:rounded  dark:border-[#99999922] dark:shadow-2xl flex items-center justify-center self-center">
                <div class="text-gray-500 inner_text_shadow font-semibold">
                    {projectName}
                </div>
            </div>
            <div class="p-4">
                <div class="text-xl font-semibold text-gray-800 inner_text_shadow">
                    Project Name
                </div>
                <div class="text-gray-600">Sub text</div>
            </div>
        </div>);
        
    }
    return (
        <div
            class={`bg-white dark:bg-transparent reveal dark:backdrop-blur-xl flex flex-col dark:border-[0.5px] dark:rounded dark:border-[#aaa6] shadow p-3 m-2 ${styles.parallelScroll}`}
        >
            <div class="w-[38rem] h-[36rem] bg-gray-200 dark:bg-transparent dark:backdrop-blur-3xl dark:border-2 dark:rounded  dark:border-[#99999922] dark:shadow-2xl flex items-center justify-center self-center">
                <div class="text-gray-500 inner_text_shadow font-semibold">
                    {projectName}
                </div>
            </div>
            <div class="p-4">
                <div class="text-xl font-semibold text-gray-800 inner_text_shadow">
                    Project Name
                </div>
                <div class="text-gray-600">Sub text</div>
            </div>
        </div>
    );
}

export default ProjectsCard;
