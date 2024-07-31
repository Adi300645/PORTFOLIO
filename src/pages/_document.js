import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            
            <Head />
            
            <body className="transition-colors duration-500 dark:bg-[#2B2A33] bg-[#E6E6E6] overflow-x-hidden">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
