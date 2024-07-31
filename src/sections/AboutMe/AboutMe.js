import Image from "next/image";
import React from "react";
import styles from "./AboutMe.module.css";

function AboutMe() {
    return (
        <div
            className={`bg-[#5555554c] h-[42rem] shadow-inner w-screen flex justify-center items-center ${styles.colorfullBack}`}
        >
            <div className={`flex w-[80rem] h-[28rem] items-center justify-start ${styles.container}`}>
                <div className={`bg-black dark:bg-white  w-6 rounded mx-6 h-[30rem] hover:w-[75rem] duration-1000 absolute z-10 mix-blend-soft-light dark:mix-blend-soft-light ${styles.hvrElement}`}></div>
                <div className={`h-full w-[60rem] text-gray-800 dark:text-gray-200 flex-col z-0 relative left-28 ${styles.mainText}`}>
                    <div className="font-medium text-lg mb-4">
                        I’ve put a lot of effort into creating this portfolio,
                        and I’m eager to hear your thoughts and suggestions.
                        Your feedback will help me improve and showcase my
                        skills better!
                    </div>

                            <div className="absolute w-28 h-28 right-0 bottom-0 my-auto mx-auto blur-[100px] bg-white bg-gradient-to-bl to-yellow-50 -z-20"> </div>
                            <div className="absolute w-48 h-48 -left-32 -top-0 blur-[100px] rounded-full bg-white bg-gradient-to-bl from-blue-900 to-blue-50 animate-pulse -z-20"> </div>
                            <div className="absolute w-48 h-48 -right-0 -top-0 blur-[100px] rounded-full bg-white bg-gradient-to-bl from-teal-700 to-blue-50 -z-20 opacity-50"> </div>
                    <form>
                        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-transparent dark:backdrop-blur-3xl z-0 dark:border-gray-600 relative shadow-2xl">
                            <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-transparent">
                                <textarea
                                    id="comment"
                                    rows="4"
                                    cols="8"
                                    class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-transparent focus:ring-0 dark:text-white dark:placeholder-gray-200 outline-none min-h-56 max-h-80"
                                    placeholder="Write a anonymus comment..."
                                ></textarea>
                            </div>
                            <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                                <button
                                    type="submit"
                                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-gray-50  rounded-sm bg-[#595959] focus:ring-4 focus:ring-blue-200 dark:focus:ring-[#565656] hover:bg-[#747474]"
                                >
                                    Post comment    
                                </button>
                                <div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                                    <button
                                        type="button"
                                        class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                    >
                                        <svg
                                            class="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 12 20"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                                            />
                                        </svg>
                                        <span class="sr-only">Attach file</span>
                                    </button>
                                    <button
                                        type="button"
                                        class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                    >
                                        <svg
                                            class="w-4 h-4"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 18"
                                        >
                                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                        </svg>
                                        <span class="sr-only">
                                            Upload image
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <p class="ms-auto text-xs text-gray-500 dark:text-gray-400">
                        I am glad to have you scrolling till last{" "}
                        <button
                            class="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                            Expore
                        </button>
                        
                    </p>
                </div>
            </div>
        </div>
            
    );
}

export default AboutMe;
