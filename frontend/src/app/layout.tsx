import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "OpsPilot",
    description: "Operations management platform",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode; //React.ReactNode : anything React can render
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}



// function RootLayout(props) {
//     console.log(props.children);
// }

//THESE ARE THE SAME

// function RootLayout({ children }) {
//     console.log(children);
// }

