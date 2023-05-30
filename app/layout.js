import "./globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "Explicit",
  description: "top music charts everywhere for free",
  icons: {
    icon: '/favicon.ico',
  },

  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
