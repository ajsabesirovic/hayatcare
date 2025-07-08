import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Hayat Care",
    description:
        "Aplikacija za povezivanje volontera i starijih osoba kojima je potrebna pomoć u svakodnevnom životu.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
