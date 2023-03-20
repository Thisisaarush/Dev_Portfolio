import "./globals.css";

// components
import Navigation from "@/Components/Navigation/Navigation";
import Footer from "@/Components/Footer/Footer";

export const metadata = {
  title: "Aarush Tanwar - Full Stack Developer, Designer",
  description: "Full Stack Developer, Designer Portfolio - Aarush Tanwar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
