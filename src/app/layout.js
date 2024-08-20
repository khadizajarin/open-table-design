import Navbar from "@/components/shared/Navbar";
import "./globals.css"
import TitleBar from "@/components/shared/TitleBar";

export const metadata = {
  title: "Open Table Restaurant",
  description: "Book to enjoy elegance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TitleBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
