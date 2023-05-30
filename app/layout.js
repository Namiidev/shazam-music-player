import "./globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "Explicit",
  description: "top music charts everywhere for free",
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg' },
    shortcut: { url: '/favicon.svg', type: 'image/svg' },
  },
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
