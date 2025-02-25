import Providers from "@/providers";
import "./globals.css";

export const metadata = {
  title: "Next.js CRUD Dashboard",
  description: "A CRUD dashboard built with Next.js, Tailwind CSS, and MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
