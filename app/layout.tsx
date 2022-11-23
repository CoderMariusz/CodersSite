import { AnalyticsWrapper } from "../components/analytics";
import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <Header />
      <AnalyticsWrapper />
      <body>{children}</body>
    </html>
  );
}
