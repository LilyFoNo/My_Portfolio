"use client";
import "./globals.css";
import { ProgressBar, StairTransition } from "./components";

import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  const handleIsLoading = () => {
    setIsLoading(false);
  };
  return (
    <html>
      <body>
        <ProgressBar onIsLoading={handleIsLoading} />
        {!isLoading && (
          <div id="info">
            <StairTransition />
            {children}
          </div>
        )}
      </body>
    </html>
  );
}
