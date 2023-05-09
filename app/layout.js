import "./globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "Explicit",
  description: "top music charts everywhere for free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
