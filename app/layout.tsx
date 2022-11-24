import "../styles/globals.css";
import Header from "../components/Header";
import { lazy } from "react";
import AnalyticsWrapper from "./Analytics";

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
