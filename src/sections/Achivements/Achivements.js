import React from "react";
import styles from "./Achivements.module.css";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import useOrientation from "@/customHooks/deviceInfo/useOrientation/useOrientation";

function Achivements() {

    const isPortrait = useOrientation();
    if (isPortrait) return (<div className="mt-16"> 
    <div>I am Achivements</div>
    </div>);

    return (
        <div className="w-[92rem] flex flex-col relative">
            <div
                className={`w-[54rem] h-2 bg-[#444] rounded relative -left-6 mix-blend-hard-light ${styles.lineMoveX}`}
            ></div>
            <div
                className={`h-[4rem] w-2 bg-[#444] rounded absolute left-5 mix-blend-hard-light  ${styles.lineMoveY}`}
            ></div>
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
                                        <div className="w-80 h-[28rem]  group-hover:w-[50rem] transition-all ease-in-out duration-1000 dark:bg-transparent ">
                                            <div className="text-3xl font-semibold text-[#444] bg-gradient-to-r items-center justify-center flex h-full ">
                                                Text
                                            </div>
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="basis-1/4 group z-10 hover:border-0 dark:hover:border-[0.1px] transition-all duration-1000 dark:bg-transparent dark:border-[#aaa6] dark:backdrop-blur">
                                        <div className="w-80 h-[28rem]  group-hover:w-[50rem] transition-all ease-in-out duration-1000 dark:bg-transparent ">
                                            <div className="text-3xl font-semibold text-[#444] bg-gradient-to-r items-center justify-center flex h-full ">
                                                Text
                                            </div>
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="basis-1/4 group z-10 hover:border-0 dark:hover:border-[0.1px] transition-all duration-1000 hover:mr-96 dark:bg-transparent dark:border-[#aaa6] dark:backdrop-blur">
                                        <div className="w-80 h-[28rem]  group-hover:w-[50rem] transition-all ease-in-out duration-1000 dark:bg-transparent ">
                                            <div className="text-3xl font-semibold text-[#444] bg-gradient-to-r items-center justify-center flex h-full ">
                                                Text
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
