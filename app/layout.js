import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/themeprovider";
import { ModeToggle } from "@/components/modechange";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MainHeader } from "@/components/navbar";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "R.O.F.I.E.S",
  description: "Rofies - Robotics Club of IIIT Pune",
};

export default function RootLayout({ children }) {
  const authCookie = cookies().get("auth_session");
  const isAuthenticated = authCookie ? true : false;
  return (
    <html suppressHydrationWarning className="h-full">
      <body
        className={cn(
          "relative h-full min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainHeader isUserAuthenticated={isAuthenticated} />
          <div className="absolute right-0 top-0 z-50 m-4">
            <ModeToggle />
          </div>
          {children}
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
