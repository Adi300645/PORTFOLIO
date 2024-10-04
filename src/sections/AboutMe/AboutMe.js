import Image from "next/image";
import React, { useState } from "react";
import styles from "./AboutMe.module.css";
import useOrientation from "@/customHooks/deviceInfo/useOrientation/useOrientation";

function AboutMe() {
    const { isPortrait, isReady } = useOrientation();
    const [userMessage, setUserMessage] = useState("");
    const [buttonState, setButtonState] = useState("ready");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonState("sending");
        try {
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userMessage }),
            });

            const data = await response.json();
            if (data.success) {
                
                setUserMessage("");
            } else {
                console.error("Error:");
                setButtonState("error");
            }

            setButtonState("sent");
            setTimeout(() => {
                setButtonState("ready");
            },2000);
        } catch (error) {
            console.error("Error:", error);
            setButtonState("error");
        }
    };

    const getButtonText = () => {
        switch (buttonState) {
            case "sending":
                return "Sending...";
            case "sent":
                return "Sent";
            case "error":
                return "Error";
            default:
                return "Post comment";
        }
    };

    const getButtonStyle = () => {
        switch (buttonState) {
            case "sending":
                return "bg-blue-400 hover:bg-blue-500";
            case "sent":
                return "bg-green-500 hover:bg-green-600";
            case "error":
                return "bg-red-500 hover:bg-red-600";
            default:
                return "bg-[#595959] hover:bg-[#747474]";
        }
    };

    if (isPortrait)
        return (
            <div className="w-screen relative bg-[#242424]">
                <div
                    className={`dark:bg-[#5555554c] bg-white shadow-inner w-screen flex justify-center items-center`}
                >
                    <div className={`flex items-center justify-start mt-6`}>
                        <div
                            className={`h-full text-gray-800 dark:text-gray-200 flex-col z-0 relative p-4`}
                        >
                            <div className="text-xs mb-4">
                                I’ve put a lot of effort into creating this
                                portfolio, and I’m eager to hear your thoughts
                                and suggestions. Your feedback will help me
                                improve and showcase my skills better!
                            </div>

                            <div className="absolute w-48 h-48 -left-32 -top-0 blur-[100px] rounded-full bg-white bg-gradient-to-bl from-blue-900 to-blue-50 animate-pulse -z-20"></div>
                            <div className="absolute w-48 h-48 -right-0 -bottom-0 blur-[100px] rounded-full bg-white bg-gradient-to-bl from-teal-700 to-blue-50 -z-20 opacity-50"></div>

                            <form onSubmit={handleSubmit}>
                                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-transparent z-0 dark:border-gray-600 relative shadow-2xl">
                                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-transparent">
                                        <textarea
                                            id="comment"
                                            rows="4"
                                            cols="8"
                                            value={userMessage}
                                            onChange={(e) =>
                                                setUserMessage(e.target.value)
                                            } // Update state on change
                                            className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-transparent focus:ring-0 dark:text-white dark:placeholder-gray-200 outline-none min-h-56 max-h-80"
                                            placeholder="Write an anonymous comment..."
                                        ></textarea>
                                    </div>
                                    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                                        <button
                                            type="submit"
                                            className={`inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-gray-50 rounded-sm focus:ring-4 focus:ring-blue-200 dark:focus:ring-[#565656] ${getButtonStyle()}`}
                                            disabled={buttonState === "sending"}
                                        >
                                            {getButtonText()}
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <p className="ms-auto text-xs text-gray-500 dark:text-gray-400">
                                I am glad to have you scrolling till last{" "}
                                <button className="text-blue-600 dark:text-blue-500 hover:underline">
                                    Explore
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );

    return (
        <div
            className={`bg-[#5555554c] h-[42rem] shadow-inner w-screen flex justify-center items-center ${styles.colorfullBack}`}
        >
            <div
                className={`flex w-[80rem] h-[28rem] items-center justify-start ${styles.container}`}
            >
                <div
                    className={`bg-black dark:bg-white w-6 rounded mx-6 h-[30rem] hover:w-[75rem] duration-1000 absolute z-10 mix-blend-soft-light dark:mix-blend-soft-light ${styles.hvrElement}`}
                >
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg opacity-0 hover:opacity-100 transition-opacity duration-500">
                        <div
                            className={`absolute inset-0 flex items-center justify-center text-white font-bold text-lg ${styles.mainText}`}
                        >
                            Thank You !!!
                        </div>
                    </div>
                </div>
                <div
                    className={`h-full w-[60rem] text-gray-800 dark:text-gray-200 flex-col z-0 relative left-28 ${styles.mainText}`}
                >
                    <div className="font-medium text-lg mb-4">
                        I’ve put a lot of effort into creating this portfolio,
                        and I’m eager to hear your thoughts and suggestions.
                        Your feedback will help me improve and showcase my
                        skills better!
                    </div>

                    <div className="absolute w-28 h-28 right-0 bottom-0 my-auto mx-auto blur-[100px] bg-white bg-gradient-to-bl to-yellow-50 -z-20"></div>
                    <div className="absolute w-48 h-48 -left-32 -top-0 blur-[100px] rounded-full bg-white bg-gradient-to-bl from-blue-900 to-blue-50 animate-pulse -z-20"></div>
                    <div className="absolute w-48 h-48 -right-0 -top-0 blur-[100px] rounded-full bg-white bg-gradient-to-bl from-teal-700 to-blue-50 -z-20 opacity-50"></div>
                    <form onSubmit={handleSubmit}>
                        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-transparent z-0 dark:border-gray-600 relative shadow-2xl">
                            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-transparent">
                                <textarea
                                    id="comment"
                                    rows="4"
                                    cols="8"
                                    value={userMessage}
                                    onChange={(e) =>
                                        setUserMessage(e.target.value)
                                    } // Update state on change
                                    className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-transparent focus:ring-0 dark:text-white dark:placeholder-gray-200 outline-none min-h-56 max-h-80"
                                    placeholder="Write an anonymous comment..."
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                                <button
                                    type="submit"
                                    className={`inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-gray-50 rounded-sm focus:ring-4 focus:ring-blue-200 dark:focus:ring-[#565656] ${getButtonStyle()}`}
                                    disabled={buttonState === "sending"}
                                >
                                    {getButtonText()}
                                </button>
                                <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2"></div>
                            </div>
                        </div>
                    </form>
                    <p className="ms-auto text-xs text-gray-500 dark:text-gray-400">
                        I am glad to have you scrolling till last{" "}
                        <button className="text-blue-600 dark:text-blue-500 hover:underline">
                            Explore
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
