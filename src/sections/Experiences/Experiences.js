import useOrientation from "@/customHooks/deviceInfo/useOrientation/useOrientation";
import { Poppins, Josefin_Sans } from "next/font/google";
import React from "react";

const josefinSans = Josefin_Sans({
    subsets: ["latin"],
    display: "swap",
    weight: ["500"],
});

const poppinsBold = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["700"],
});

function Experiences() {
    const isPortrait = useOrientation();
    if (isPortrait)
        return (
            <div className="mt-4 w-screen">
                <div className="mx-8">
                    <div
                        className={`mt-1 capitalize ${poppinsBold.className} text-2xl`}
                    >
                        Experiences
                    </div>
                    <div className="flex flex-col mt-4 pl-6 py-4 shadow-xl bg-white">
                        <div className="flex justify-start items-center">
                            <div
                                className={`my-4 text-2xl ${josefinSans.className}`}
                            >
                                Hansraj ventures
                            </div>
                            <div className="bg-slate-800 h-[0.25px] w-[2vw] ml-8"></div>
                            <div className="bg-slate-800 h-[0.25px] w-[8vw] mx-1"></div>
                        </div>
                        <div
                            className="w-full h-56 bg-cover"
                            style={{
                                backgroundImage:
                                    "url('https://picsum.photos/500')",
                            }}
                        ></div>
                        <div className="mt-2">
                            Duis nisi laboris officia aliquip nostrud eiusmod
                            enim duis. Minim incididunt ad aute Lorem commodo
                            sunt Lorem. Occaecat laborum ut duis reprehenderit
                            exercitation nisi nisi deserunt culpa esse in do
                            elit. Nisi ad tempor enim sint ut pariatur
                            adipisicing anim non Lorem. Deserunt consequat
                            proident consectetur laborum adipisicing esse do
                            occaecat adipisicing.
                        </div>
                    </div>
                </div>
            </div>
        );

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
                    <div class="text-gray-600 text-xs m-1 my-2">
                        full stack developer
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;
