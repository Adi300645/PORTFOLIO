import useOrientation from "@/customHooks/deviceInfo/useOrientation/useOrientation";
import { Poppins, Josefin_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";

const josefinSans = Josefin_Sans({
    subsets: ["latin"],
    display: "swap",
    weight: ["500"],
    adjustFontFallback: false
});

const poppinsBold = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["700"],
    adjustFontFallback: false
});

function Experiences() {
    const {isPortrait,isReady} = useOrientation();
    const cardStyle = "flex flex-col mt-4 p-6 shadow-xl bg-white dark:bg-transparent dark:border-2 dark:rounded-md border-[#777]";

    if (isPortrait)
        return (
            <div className="mt-4 w-screen">
                <div className="mx-6">
                    <div
                        className={`mt-1 capitalize ${poppinsBold.className} text-2xl`}
                    >
                        Experiences
                    </div>

                    {/* Outlier AI Card */}
                    <div className={cardStyle}>
                        <div className="flex justify-start items-center">
                            <div
                                className={`my-4 text-2xl ${josefinSans.className}`}
                            >
                                Outlier AI
                            </div>
                            <div className="bg-slate-800 h-[0.25px] w-[2vw] ml-8"></div>
                            <div className="bg-slate-800 h-[0.25px] w-[8vw] mx-1"></div>
                        </div>
                        <Image src={"/Showcase/Ai-Training-Port.jpeg"} className="w-full h-full overflow-hidden object-cover rounded" width={1500} height={1500}></Image>

                        <div className="mt-2 mr-4">
                            I worked remotely at Outlier as a Coders - AI Training specialist where I:
                            <ul className="list-disc ml-5 mt-2">
                                <li>Engaged in AI training projects, performing tasks involving coding, data labeling, model evaluation, and quality assurance.</li>
                                <li>Collaborated with team members through Discourse, ensuring clear and effective communication on remote projects.</li>
                                <li>Completed project-specific training and delivered high-quality tasks, contributing to the continuous improvement of AI models.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Hansraj Ventures Card */}
                    <div className={cardStyle}>
                        <div className="flex justify-start items-center">
                            <div
                                className={`my-4 text-2xl ${josefinSans.className}`}
                            >
                                Hansraj Ventures
                            </div>
                            <div className="bg-slate-800 h-[0.25px] w-[2vw] ml-8"></div>
                            <div className="bg-slate-800 h-[0.25px] w-[8vw] mx-1"></div>
                        </div>
                            <Image src={"/Showcase/App-Dev-Port.avif"} className="w-full h-full overflow-hidden object-cover rounded" width={1500} height={1500}></Image>
                        <div className="mt-2 mr-4">
                            During my internship at Hansraj Ventures, I worked as a <span className="font-bold"> Full Stack Flutter Developer </span> where I:
                            <ul className="list-disc ml-5 mt-2">
                                <li>Developed and maintained responsive web applications using React for the frontend and Node.js for the backend.</li>
                                <li>Collaborated with cross-functional teams to design and integrate new features, improving user experience.</li>
                                <li>Followed agile methodology, actively participating in daily stand-ups and sprint planning.</li>
                                <li>Worked on bug fixes and optimized codebase, increasing the efficiency of the system.</li>
                            </ul>
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

            {/* Outlier AI Card */}
            <div className="flex items-center h-[38rem] mx-20 bg-white shadow dark:bg-transparent dark:backdrop-blur dark:border-2 dark:border-[#aaa6] dark:rounded mt-12">
                <div className="rounded flex justify-center items-center bg-gray-300 w-full flex-[0.33] m-4 h-[96%] dark:bg-transparent dark:backdrop-blur dark:border-2 dark:border-[#aaa6] dark:rounded dark:shadow-xl">
                    <Image src={"/Showcase/Ai-Training.jpg"} className="w-full h-full overflow-hidden object-cover rounded" width={1500} height={1500}></Image>
                </div>
                <div className="p-4 w-full h-[95%] flex-[0.66] m-2 ">
                    <div class="text-4xl font-semibold text-gray-800 inner_text_shadow">
                        Outlier AI
                    </div>
                    <div class="opacity-65 text-xs m-1 my-2">
                        Coders - AI Training Specialist
                    </div>
                    <div class="opacity-65 text-sm mt-2">
                        At Outlier AI, I contributed to several critical projects:
                        <ul className="list-disc ml-5 mt-2 w-10/12">
                            <li>Engaged in AI model training and data labeling tasks, ensuring accurate results and model quality.</li>
                            <br />
                            <li>Collaborated with team members via Discourse to stay updated on tasks and resolve issues effectively in a remote environment.</li>
                            <br />
                            <li>Participated in project-specific training to meet expectations and delivered high-quality output in each phase.</li>
                            <br />
                        </ul>
                    </div>
                </div>
            </div>

            {/* Hansraj Ventures Card */}
            <div className="flex items-center h-[38rem] mx-20 bg-white shadow dark:bg-transparent dark:backdrop-blur dark:border-2 dark:border-[#aaa6] dark:rounded mt-12">
                <div className="rounded flex justify-center items-center bg-gray-300 w-full flex-[0.33] m-4 h-[96%] dark:bg-transparent dark:backdrop-blur dark:border-2 dark:border-[#aaa6] dark:rounded dark:shadow-xl">
                    <Image src={"/Showcase/App-Dev.jpg"} className="w-full h-full overflow-hidden object-cover rounded" width={1500} height={1500}></Image>
                </div>
                <div className="p-4 w-full h-[95%] flex-[0.66] m-2 ">
                    <div class="text-4xl font-semibold text-gray-800 inner_text_shadow">
                        Hansraj Ventures
                    </div>
                    <div class="opacity-65 text-xs m-1 my-2">
                        Full Stack Developer
                    </div>
                    <div class="opacity-65 text-sm mt-2">
                        During my internship at Hansraj Ventures, I contributed to several critical projects:
                        <ul className="list-disc ml-5 mt-2 w-10/12">
                            <li>Developed user-friendly web applications with a focus on performance and scalability using React, Node.js, and MongoDB.</li>
                            <br />
                            <li>Collaborated with the design team to improve the UI/UX of existing platforms, ensuring responsiveness across devices.</li>
                            <br />
                            <li>Created APIs for secure and efficient data flow between client-side and server-side components.</li>
                            <br />
                            <li>Identified and fixed critical bugs, reducing downtime and improving system stability.</li>
                            <br />
                            <li>Increased database performance through query optimization, enhancing the overall user experience.</li>
                            <br />
                            <li>Implemented new features based on client feedback, improving the usability and functionality of the platform.</li>
                            <br />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;
