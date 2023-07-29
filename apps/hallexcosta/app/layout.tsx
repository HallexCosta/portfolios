"use client";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style jsx global>
          {`
            html {
              font-family: ${poppins.style.fontFamily};
            }
          `}
        </style>
      </head>
      <body className="bg-back-default">{children}</body>
    </html>
  );
}
