import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/themeprovider";
import { ModeToggle } from "@/components/modechange";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "R.O.F.I.E.S",
  description: "Rofies - Robotics Club of IIIT Pune",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={cn(
          "relative min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute right-0 top-0 z-50 m-4">
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
