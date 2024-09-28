"use client";
import React, { useEffect } from "react";
import styles from "./ProjectsSection.module.css";
import ProjectsCard from "@/components/ProjectsCard/ProjectsCard";
import WorkCard from "@/components/WorkCard/WorkCard";
import PhotoCard from "@/components/PhotoCard/PhotoCard";
import BigProjectCard from "@/components/BigProjectCard/BigProjectCard";
import useOrientation from "@/customHooks/deviceInfo/useOrientation/useOrientation";
import { Poppins } from "next/font/google";


const poppinsBold = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["700"],
    adjustFontFallback: false
});

function ProjectsSections() {
    const isPortrait = useOrientation();
    if (isPortrait)
        return (
            <div className="mt-4 w-screen">
                <div className="mx-6 mt-2">
                    <div>Explore</div>
                    <div
                        className={`mt-1 capitalize ${poppinsBold.className} text-2xl`}
                    >
                        Aditiya&apos;s Projects
                    </div>
                    <div>
                        <ProjectsCard
                            projectName={"Verico"}
                            lightUrl={"/Showcase/SarthiAiLight.png"}
                        ></ProjectsCard>
                        <ProjectsCard
                            projectName={"Apna Ghar"}
                            lightUrl={"/Showcase/SarthiAiLight.png"}
                        ></ProjectsCard>
                        <PhotoCard projectName={"Uni chat"}></PhotoCard>
                        <ProjectsCard
                            projectName={"Vayu"}
                            lightUrl={"/Showcase/SarthiAiLight.png"}
                        ></ProjectsCard>
                        <WorkCard projectName={"Psyco"}></WorkCard>
                        <ProjectsCard
                            projectName={"RTRA "}
                            lightUrl={"/Showcase/SarthiAiLight.png"}
                        ></ProjectsCard>
                    </div>
                </div>
            </div>
        );

    return (
        <div className="flex flex-col w-screen justify-center items-center relative">
            <div className="xl:w-[92rem] w-[42rem] flex justify-start">
                <div className="ml-16 bottom-6 ">
                    <div className="text-3xl font-semibold text-[#6C6C6C] inner_text_shadow">
                        Development
                    </div>
                    <div className="text-[#6C6C6C] font-medium inner_text_shadow">
                        Projects
                    </div>
                </div>
            </div>
            <div className="w-[60rem] h-48 absolute dark:blur-[50px] bg-gradient-to-r dark:from-[#aaa] dark:to-[#2286aa92] rotateOpSpin opacity-65 rounded-full top-[68rem]"></div>
            <div className="flex flex-col xl:flex-row justify-center my-4 relative">
                <div className="w-[98rem] h-3 absolute blur-[25px] bg-gradient-to-r from-white  top-96"></div>
                <div className="flex flex-col">
                    <ProjectsCard
                        projectName={"Sarthi AI"}
                        isText={true}
                        Email={"adityayadav300645@gmail.com"}
                        tagLine={"Empowering Projects with the Intelligence of AI"}
                        discription={
                            "An all-in-one AI-powered platform designed to streamline project development. Sarthi AI offers an intuitive drag-and-drop desktop app, a coding assistant in VS Code, and a web interface to track your project's entire SDLC—everything you need to build faster and smarter "
                        }
                    ></ProjectsCard>
                    <ProjectsCard
                        projectName={"Harmony"}
                        lightUrl={"/Showcase/harmonyLight.png"}
                        darkUrl={"/Showcase/harmonyDark.png"}
                    ></ProjectsCard>
                    <PhotoCard projectName={"Uni chat"} lightUrl={"/Showcase/UNICHATLIGHT.png"} darkUrl={"/Showcase/UNICHATDark.png"}></PhotoCard>
                </div>
                <div className="flex flex-col">
                    <WorkCard projectName={"Psyco"} lightUrl={"/Showcase/psycoLight.jpeg"} darkUrl={"/Showcase/psycoDark.jpeg"}></WorkCard>
                    <ProjectsCard
                        projectName={"Nirmaan"}
                        lightUrl={"/Showcase/NirmaanLight.png"}
                        darkUrl={"/Showcase/NirmaanDark.png"}
                    ></ProjectsCard>
                    <ProjectsCard
                        projectName={"RTRA "}
                        lightUrl={"/Showcase/RTRALIGHT.png"}
                        darkUrl={"/Showcase/RTRADARK.png"}
                    ></ProjectsCard>
                </div>
            </div>
            <div className="w-[92rem] flex justify-start">
                <div className="relative left-20 top-20">
                    <div className="text-3xl font-semibold  inner_text_shadow">
                        Data Science & ML
                    </div>
                    <div className="text-[#6C6C6C] font-medium inner_text_shadow">
                        Projects
                    </div>
                </div>
            </div>
            <div className="w-[92rem] mt-28 flex flex-col justify-center items-center">
                <div className="">
                    <BigProjectCard></BigProjectCard>
                </div>
                <div className="xl:w-[76rem] flex justify-center my-4 relative flex-col xl:flex-row">
                    <div className="flex flex-col">
                        <ProjectsCard
                        projectName={"Nirmaan AI"}
                            lightUrl={"/Showcase/NirmaanAI.jpg"}
                            darkUrl={"/Showcase/NirmaanAI.jpg"}
                        ></ProjectsCard>
                    </div>
                    <div className="flex flex-col">
                        <ProjectsCard
                        projectName={"House Resale Dashbord"}
                            lightUrl={"/Showcase/HouseResale.jpg"}
                            darkUrl={"/Showcase/HouseResale.jpg"}
                        ></ProjectsCard>
                    </div>
                    <div
                        className={`h-[34rem] w-2 shadow bg-[#777] mx-6 rounded-b-xl mix-blend-hard-light ${styles.BarDown} -z-10 absolute -bottom-36 -left-32`}
                    ></div>
                    <div
                        className={`h-2 w-96 shadow bg-[#777] mx-6 mix-blend-hard-light ${styles.BarDown} -z-10 absolute -bottom-10 -left-64`}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsSections;
