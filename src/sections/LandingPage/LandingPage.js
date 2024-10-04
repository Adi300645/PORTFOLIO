import React, { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";
import { Poppins, Inika } from "next/font/google";
import useOrientation from "@/customHooks/deviceInfo/useOrientation/useOrientation";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["600"],
    adjustFontFallback: false
});
const poppinsLight = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["400"],
    adjustFontFallback: false
});

const poppinsBold = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["700"],
    adjustFontFallback: false
});
const inika = Inika({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
    adjustFontFallback: false
});

const dailyQuotes = {
    SUNDAY: "Take time to do what makes your soul happy.",
    MONDAY: "Believe you can and you're halfway there.",
    TUESDAY: "The only way to do great work is to love what you do.",
    WEDNESDAY: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    THURSDAY: "The future belongs to those who believe in the beauty of their dreams.",
    FRIDAY: "Don't watch the clock; do what it does. Keep going.",
    SATURDAY: "Happiness is not by chance, but by choice."
};

const dailyBackgrounds = {
    MONDAY: "https://i.pinimg.com/736x/c0/4a/81/c04a812bbaa5330f8fae9af26608b72a.jpg",
    TUESDAY: "https://i.pinimg.com/736x/8b/cb/6e/8bcb6e19cff2d52a17f16cbd8bfbf827.jpg",
    WEDNESDAY: "https://i.pinimg.com/564x/7a/a8/fc/7aa8fc4280644cee0e166cc036a661dc.jpg",
    THURSDAY: "https://i.pinimg.com/564x/47/24/cb/4724cbd12e14c86e3f52b38e2ceed911.jpg",
    FRIDAY: "https://i.pinimg.com/originals/c6/3c/ae/c63cae1344766f14d9d184e5aafed065.gif",
    SATURDAY: "https://i.pinimg.com/564x/3e/cf/4f/3ecf4f69a02f399516732c6c4d572078.jpg",
    SUNDAY: "https://i.pinimg.com/736x/8a/b6/6a/8ab66aeda815d085bfa20464fcc14746.jpg"
};

function LandingPage() {
    const weekday = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 20000);

        return () => clearInterval(interval);
    }, []);

    let day = weekday[date.getDay()];
    const ct = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const {isPortrait,isReady} = useOrientation();

    if (isPortrait) {
        const backgroundStyle = {
            backgroundImage: `url(${dailyBackgrounds[day]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };

        return (
            <div className="mt-14 w-screen">
                <div className="mx-8">
                    <div className={`mt-4 capitalize ${poppinsBold.className} text-2xl`}>{day}</div>
                    <div className={`${poppinsLight.className}`}>{ct}</div>
                    <div className={`h-[90vw] mt-2 relative rounded`} style={backgroundStyle}>
                        <div className={`absolute bottom-2 left-4 ${poppinsLight.className} text-white drop-shadow-lg`}>
                            <q>{dailyQuotes[day]}</q>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex w-screen justify-center items-center relative">
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