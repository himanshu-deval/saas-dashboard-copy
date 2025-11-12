import React from "react";
import { QueryProvider } from "./query-provider";
import { ThemeProvider } from "./theme-provider";
import { FeatureFlagProvider } from "./feature-flag-provider";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <ThemeProvider>
        <FeatureFlagProvider>{children}</FeatureFlagProvider>
      </ThemeProvider>
    </QueryProvider>
  );
};