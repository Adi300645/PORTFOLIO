import Image from "next/image";
import React from "react";

function BigProjectCard() {
    return (
        <div class="bg-white dark:bg-transparent dark:backdrop-blur dark:border-2 dark:border-[#aaa6] dark:rounded shadow p-3 flex xl:flex-row flex-col xl:w-[80rem] ">
            <div class="xl:w-[60rem] w-[38rem] xl:h-[42rem] h-[20rem] bg-gray-200 flex items-center justify-center dark:bg-transparent dark:backdrop-blur dark:border-2 dark:border-[#aaa6] dark:rounded dark:shadow-xl">
                <Image
                    src={"/Showcase/SalesReport.png"}
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
