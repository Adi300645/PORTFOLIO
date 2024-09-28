import { Poppins } from "next/font/google";
import React, { useState } from "react";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["600"],
});
import styles from "./CharacterDevelopment.module.css";
import useOrientation from "@/customHooks/deviceInfo/useOrientation/useOrientation";

function CharacterDevelopment() {
    const [isLightOn, toogleLight] = useState(false);

    const isPortrait = useOrientation();
    if (isPortrait)
        return (
            <div className="mt-16">
                <div
                    className={`${styles.clipBack} w-screen h-96 dark:bg-[#2B2A33] bg-[#e5e5e5] relative flex flex-col justify-center items-start`}
                >
                    <div className=" mt-40 mx-8 font-bold text-xl">
                        <div>I am</div>
                        <div>not just a website</div>
                        <div className="mt-1 text-xs font-normal dark:text-[#aaa]">
                            I am an embodiment of skills, design craftsmanship,
                            aesthetics, and unwavering determination to make
                            everything happen.
                        </div>
                        <div className="flex py-4">
                            <button className="px-2 py-1 bg-[#232323] text-white shadow dark:bg-white dark:text-black  rounded text-sm font-semibold">
                                Contact
                            </button>
                            <button className="px-2 py-1 bg-white  dark:bg-[#232323] shadow dark:text-white rounded mx-4 text-sm font-semibold">
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );

    return (
        <div className={`flex items-center justify-center flex-col `}>
            <div
                className={`bg-[#444] ${styles.backMixBlendBlack} w-[100vw] mt-[20.1rem] flex items-center justify-center py-28`}
            >
                <div className="w-[80rem] flex justify-center items-start flex-col relative">
                    {/* <div className="bg-white w-96 h-96 absolute left-[0rem] top-[-3rem] rounded-full mix-blend-overlay "></div> */}
                    <div
                        className={`text-[5rem] font-black ${poppins.className} mx-6  px-2 my-1 text-white`}
                    >
                        I am
                    </div>
                    <div
                        className={`text-[5rem] font-black ${poppins.className} mx-6 text-white px-2 my-1 `}
                    >
                        not Just a website
                    </div>
                    <div className="w-[76rem] self-center h-[15rem] mb-8 flex flex-col  relative transition-all duration-300 mt-5">
                        <div className="w-[32rem] text-[#ccc]">
                            I am an embodiment of skills, design craftsmanship,
                            aesthetics, and unwavering determination to make
                            everything happen.
                        </div>
                        <div className="flex py-4">
                            <button className="px-4 py-2 bg-white text-black rounded">
                                Contact
                            </button>
                            <button className="px-4 py-2 bg-white text-black rounded mx-4">
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`bg-[#444] flex justify-center items-center w-screen ${styles.back}`}
            >
                <div className="w-screen h-[1rem] flex justify-center items-center">
                    <div
                        className={`${styles.GrowingBox} bg-[] mt-16 flex items-center justify-center`}
                    >
                        <div className="h-96 w-[76rem] flex items-center justify-center [&>*]:mx-2 hover:[&>*]:shadow-2xl [&>*]:transition-all [&>*]:duration-500 mt-24 relative top-24">
                            <div class="group w-80 h-[28rem] bg-white shadow-lg flex flex-col justify-between items-center overflow-hidden">
                                <div class="flex-[0.75] w-[100%]"></div>
                                <div class="flex-[0.25] w-[100%] bg-[#333] text-white p-2 group-hover:py-5 transition-all">
                                    <div class="text-lg font-medium">
                                        Design
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`w-80 h-[28rem] bg-white  shadow-lg items-center justify-center flex hover:scale-105 `}
                            >
                                <div
                                    className={`text-3xl font-semibold text-[#6C6C6C] ${styles.aesthetics}`}
                                >
                                    Aesthetics
                                </div>
                            </div>

                            <div className="group w-80 h-[28rem] bg-white shadow-lg flex flex-col justify-between items-center overflow-hidden">
                                <div class="flex-[0.60] w-[100%]"></div>
                                <div
                                    class={`flex-[0.40] w-[110%] bg-[#333] text-white p-2 ${styles.craft} group-hover:py-5 transition-all duration-300`}
                                >
                                    <div class="text-lg font-medium mt-5 -rotate-6 relative left-4 top-1">
                                        Craft
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[15rem] flex justify-center items-center mt-12 text-xl font-semibold ">
                Our main area of focus
            </div>
            <div className="h-[15rem] flex justify-center items-center mt-12 text-xl font-semibold "></div>
        </div>
    );
}

export default CharacterDevelopment;
