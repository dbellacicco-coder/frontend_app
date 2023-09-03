import Footer from "./components/shared/Footer";
import NavBar from "./components/shared/NavBar";
import "./globals.css";

export const metadata = {
  title: "FrontEnd Land",
  description: "Front end showcase and amazing fron end developers projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
