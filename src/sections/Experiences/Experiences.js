import useOrientation from "@/customHooks/deviceInfo/useOrientation/useOrientation";
import React from "react";

function Experiences() {

    const isPortrait = useOrientation();
    if (isPortrait) return (<div className="mt-16"> 
    <div>I am Experiences</div>
    </div>);

    return (
        <div className="my-12 ">
            <div className="w-[92rem] flex justify-start">
                <div className="relative mx-20 my-6">
                    <div className="text-3xl font-semibold text-[#6C6C6C] inner_text_shadow">
                        Experiences
                    </div>
                    <div className="text-[#6C6C6C] font-medium inner_text_shadow"></div>
                </div>
            </div>
            <div className="flex items-center h-[38rem] mx-20 bg-white shadow dark:bg-transparent dark:backdrop-blur dark:border-2 dark:border-[#aaa6] dark:rounded">
                <div className="p-4 rounded bg-gray-300 w-full flex-[0.33] m-4 h-[96%] dark:bg-transparent dark:backdrop-blur dark:border-2 dark:border-[#aaa6] dark:rounded dark:shadow-xl"></div>
                <div className="p-4 w-full h-[95%] flex-[0.66] m-2 ">
                    <div class="text-4xl font-semibold text-gray-800 inner_text_shadow">
                        Hansraj Ventures
                    </div>
                    <div class="text-gray-600 text-xs m-1 my-2">full stack developer</div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;
