import React from "react";
import ThemeSwitch from "../theme/themeSwitch";
import useOrientation from "@/customHooks/deviceInfo/useOrientation/useOrientation";

function Appbar() {

    return (
        <div className="w-screen bg-white dark:bg-[#2B2A33] shadow dark:shadow-md h-12 flex justify-center items-center px-4 fixed z-50">
            <div className=" w-screen xl:w-[86rem] lg:w-[86rem] px-4 flex justify-between items-center">
                <div className="font-medium">Aditya Yadav</div>
                <ThemeSwitch />
            </div>
        </div>
    );
}

export default Appbar;
