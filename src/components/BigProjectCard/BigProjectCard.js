import Image from "next/image";
import React from "react";

import useOrientation from "@/customHooks/deviceInfo/useOrientation/useOrientation";

function BigProjectCard() {
    const isPortrait = useOrientation();

    if (isPortrait) {
        return (
            <div
                className={`bg-white dark:bg-transparent reveal dark:backdrop-blur-xl flex flex-col dark:border dark:border-opacity-50 dark:rounded shadow-lg p-3 my-4`}
            >
                <div className="w-full relative">
                    <Image
                        src={"/Showcase/CarResale.jpeg"}
                        layout="responsive"
                        width={1500}
                        height={1500}
                        objectFit=""
                        alt={"project"}
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    Car Resale Dashbord
                    </h3>
                </div>
            </div>
        );
    }

    return (
        <div class="bg-white dark:bg-transparent dark:backdrop-blur dark:border-2 dark:border-[#aaa6] dark:rounded shadow p-3 flex xl:flex-row flex-col xl:w-[80rem] ">
            <div class="xl:w-[60rem] w-[38rem] xl:h-[42rem] h-[20rem] bg-gray-200 flex items-center justify-center dark:bg-transparent dark:backdrop-blur dark:border-2 dark:border-[#aaa6] dark:rounded dark:shadow-xl">
                <Image
                    src={"/Showcase/CarResale.jpeg"}
                    width={1500}
                    height={1500}
                    className="w-full h-full object-cover"
                />
            </div>
            <div class="p-4 flex flex-col">
                <div class="text-xl font-semibold text-gray-800 dark:text-white">
                    Car Resale Dashbord
                </div>
                <div class="text-gray-600 dark:text-[#aaa] w-60">
                    <ul>
                        <li>
                            Conducted Exploratory Data Analysis (EDA) to
                            identify key factors affecting car resale prices.
                        </li>
                        <li>
                            Analyzed features such as make, model, year,
                            mileage, fuel type, and price using Python (Pandas,
                            Matplotlib).
                        </li>
                        <li>
                            Applied data cleaning, feature engineering, and
                            correlation analysis to refine predictions.
                        </li>
                        <li>
                            Developed interactive Power BI dashboards to
                            visualize trends and provide actionable insights.
                        </li>
                        <li>
                            Improved resale price prediction accuracy by 20%,
                            enhancing decision-making for both buyers and
                            sellers.
                        </li>
                        <li>
                            Streamlined reporting process, reducing time spent
                            on analysis across five departments by 30%.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BigProjectCard;
