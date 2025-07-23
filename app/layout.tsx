import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { HashCleanup } from "@/components/HashCleanup";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    template: "%s | HayatCare",
    default: "HayatCare",
  },
  description:
    "Aplikacija za povezivanje volontera i starijih osoba kojima je potrebna pomoć u svakodnevnom životu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HashCleanup />
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
