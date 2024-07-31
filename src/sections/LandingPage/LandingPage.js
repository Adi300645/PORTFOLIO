import React from "react";
import styles from "./LandingPage.module.css";
import { Poppins, Inika } from "next/font/google";
import useOrientation from "@/customHooks/deviceInfo/useOrientation/useOrientation";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["600"],
});
const poppinsLight = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["400"],
});

const poppinsBold = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["700"],
})
const inika = Inika({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

function LandingPage() {
    const weekday = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
    const d = new Date();
    let day = weekday[d.getDay()];
    const ct = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const isPortrait = useOrientation();
    if (isPortrait)
        return (
            <div className="mt-14 w-screen">
                <div className="mx-8">

                <div className={`mt-4 capitalize ${poppinsBold.className} text-2xl`}>{day}</div>
                <div className={`${poppinsLight.className}`}>{ct}</div>
                <div className={`h-[90vw] mt-2 relative rounded  ${styles.morningBirds}`}>
                    <div className={`absolute bottom-2 left-4 ${poppinsLight.className}`}><q>Hey this is a Quote to chill</q></div>
                </div>
                </div>
            </div>
        );
    return (
        <div className="flex w-screen justify-center items-center relative">
            {/* <div className="blur w-9 h-9 bg-blue-500 absolute"> </div>
            <div className="blur w-9 h-9 bg-red-500 absolute"> </div>
            <div className="blur w-9 h-9 bg-red-500 absolute"> </div> */}
            <div className="w-[80rem] absolute">
                <div
                    className={`absolute blur-[50px] -left-36 -top-20 -z-50 mix-blend-soft-light w-[120rem] h-[40rem] radioal bg-gradient-to-b from-white to-slate-600 ${styles.rotateSlow}`}
                ></div>
                <div className="absolute blur-[50px] -z-50 left-0 -top-32 mix-blend-soft-light w-96 h-96 radioal bg-gradient-to-b border-8 animate-pulse border-white from-white  rotate-45"></div>
            </div>
            <div className="w-[92rem] flex justify-start items-center relative">
                <div
                    className={`w-96 h-2 bg-[#777] absolute -left-10 bottom-20 mix-blend-hard-light rounded-r-md ${styles.BarRight} shadow-inner`}
                ></div>

                <div
                    className={`h-[38rem] w-2 shadow bg-[#777] mx-6 rounded-b-xl mix-blend-hard-light ${styles.BarDown} -z-10`}
                ></div>
                <div className="relative">
                    <div
                        className={`text-[9rem] font-black ${poppins.className} ${styles.AdityaLoading} mx-12 inner_text_shadow text-white mix-blend-multiply dark:mix-blend-normal`}
                    >
                        Aditya
                    </div>
                    <div
                        className={`absolute  bottom-4 left-12 font-bold ${inika.className} text-[#777] dark:text-white drop-shadow-lg text-xl mix-blend-multiply dark:mix-blend-normal hover:cursor-pointer ${styles.LightUp}`}
                    >
                        Data Science and ML Intern
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
