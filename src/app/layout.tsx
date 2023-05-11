import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyClasses = `${roboto.className} bg-red-700 text-white`;
  return (
    <html lang="en">
      <body className={bodyClasses}>{children}</body>
    </html>
  );
}
