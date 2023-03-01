import "./globals.css";

// components
import Navigation from "@/Components/Navigation/Navigation";

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
      </body>
    </html>
  );
}
