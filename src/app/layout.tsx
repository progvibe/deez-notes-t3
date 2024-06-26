import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Deez Notes",
  description: "Web based notes app",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between">
      <div>Notes</div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
