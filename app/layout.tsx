import { AnalyticsWrapper } from "./Analytics";
import "../styles/globals.css";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
