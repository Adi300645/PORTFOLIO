import React from "react";
import styles from "./Achivements.module.css";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import useOrientation from "@/customHooks/deviceInfo/useOrientation/useOrientation";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppinsBold = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["600"],
    adjustFontFallback: false,
});

function Achivements() {
    const isPortrait = useOrientation();
    if (isPortrait)
        return (
            <div className="mt-4 w-screen">
                <div className="mx-6">
                    <div
                        className={`mt-4 capitalize ${poppinsBold.className} text-2xl`}
                    >
                        Achivements
                    </div>
                    <div className="h-56 w-full bg-cover shadow-xl mt-3 flex flex-col dark:rounded dark:border-2 bg-white dark:bg-transparent dark:border-[#777] overflow-hidden">
                        <div
                            className="h-32 bg-cover"
                            style={{
                                backgroundImage:
                                    "url('https://picsum.photos/500')",
                            }}
                        ></div>
                        <div className={`mt-2 font-medium text-xl mx-3`}>
                            Google Devloper heroman
                        </div>
                        <div className={`mt-2 mx-4 text-xs mb-3`}>
                            Ad velit id adipisicing pariatur sunt incididunt
                            labore voluptate exercitation ipsum. labore
                            voluptate exercitation ipsum.
                        </div>
                    </div>
                </div>
            </div>
        );

    return (
        <div className="w-[92rem] flex flex-col relative">
            {/* <div
                className={`w-[54rem] h-2 bg-[#444] rounded relative -left-6 mix-blend-hard-light ${styles.lineMoveX}`}
            ></div>
            <div
                className={`h-[4rem] w-2 bg-[#444] rounded absolute left-5 mix-blend-hard-light  ${styles.lineMoveY}`}
            ></div> */}
            <div className="w-[92rem] flex justify-start mt-12">
                <div className="relative left-20 bottom-6">
                    <div className="text-3xl font-semibold text-[#6C6C6C] inner_text_shadow">
                        Achievements & Certifications
                    </div>
                    <div className="text-[#6C6C6C] font-medium inner_text_shadow">
                        presenting
                    </div>
                </div>
            </div>
            <div className="my-6 relative">
                <div className="w-[90rem]">
                    <div className="flex justify-center items-center">
                        <div className="w-[90%] relative">
                            <Carousel className="mix-blend-hard-light dark:mix-blend-normal z-10">
                                <CarouselContent
                                    className="flex items-center justify-center h-[36rem] z-10
                                        [&>*]:bg-[#D9D9D9] 
                                        hover:[&>*]:shadow 
                                        
                                          [&>*]:border-8 
                                            [&>*]:border-[#fff] 
                                              [&>*]:shadow-2xl
                                                [&>*]:mx-6 
                                                [&>*]:z-10 
                                                bg-transparent"
                                >
                                    <CarouselItem className="basis-1/4 group z-10 hover:border-0 dark:hover:border-[0.1px] transition-all duration-1000 hover:ml-96 dark:bg-transparent dark:border-[#aaa6] dark:backdrop-blur">
                                        <div className="w-80 h-[28rem] flex items-center relative justify-center overflow-hidden group-hover:w-[50rem] transition-all ease-in-out duration-1000 dark:bg-transparent ">
                                            <Image src={"/Showcase/TransOrgAnalyticsBG.jpeg"}  width={1500} height={1500} className="w-full h-full object-cover"/>
                                            <div className="text font-semibold top-24 items-center justify-center flex h-full fixed flex-col text-black">
                                                <div className="font-extrabold text-2xl">TransOrg Analytics</div>
                                                <div className="text-xs w-64 transition-all group-hover:w-80 text-center font-bold mt-4">Achieved First Runner-Up in a Data Science Hackathon by analyzing loan eligibility using Real Data</div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="basis-1/4 group z-10 hover:border-0 dark:hover:border-[0.1px] transition-all duration-1000 dark:bg-transparent dark:border-[#aaa6] dark:backdrop-blur">
                                        <div className="w-80 h-[28rem] flex items-center relative justify-center overflow-hidden group-hover:w-[50rem] transition-all ease-in-out duration-1000 dark:bg-transparent ">
                                            <Image src={"/Showcase/LCBGHD_LV.jpg"}  width={1500} height={1500} className="w-full h-full object-cover"/>
                                            <div className="text font-semibold top-8 items-center justify-center flex h-full fixed flex-col text-white">
                                                <div className="font-extrabold text-2xl">LeetCode</div>
                                                <div className="text-xs font-normal w-60 text-center mt-4">Among Top 24% of coders rating : 1590 and Solved over 450+ Questions</div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="basis-1/4 group z-10 hover:border-0 dark:hover:border-[0.1px] transition-all duration-1000 hover:mr-96 dark:bg-transparent dark:border-[#aaa6] dark:backdrop-blur">
                                        <div className="w-80 h-[28rem] flex items-center relative justify-center overflow-hidden group-hover:w-[50rem] transition-all ease-in-out duration-1000 dark:bg-transparent ">
                                            <Image src={"/Showcase/BuildATHON.jpg"}  width={1500} height={1500} className="w-full h-full object-cover"/>
                                            <div className="text font-semibold bottom-10 items-center justify-center flex h-full fixed flex-col text-white">
                                                <div className="font-extrabold text-2xl">Build-a-Thon</div>
                                                <div className="text-xs font-normal w-60 text-center mt-4">Made An web 3 based Aplication to buy and sell Properties </div>
                                            </div>
                                        </div>
                                        
                                    </CarouselItem>
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-[98rem]">
                        <div
                            className={`flex justify-center items-center absolute -bottom-[60%] left-[2.5%] mix-blend-darken w-[92rem] h-[28rem] -z-10 dark:opacity-0 `}
                            style={{
                                backgroundImage: "url('/WideTable.jpeg')",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                        >
                            {/* <Image className="-z-10" src={"/WideTable.jpeg"} width={1200} height={900}></Image> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default Achivements;
