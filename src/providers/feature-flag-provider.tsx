import React, { createContext, useContext } from "react";

// In a real app, this would come from a remote source
const featureFlags = {
  "new-dashboard-layout": true,
  "show-analytics": false,
};

type FeatureFlags = typeof featureFlags;

const FeatureFlagContext = createContext<FeatureFlags | undefined>(undefined);

export const FeatureFlagProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <FeatureFlagContext.Provider value={featureFlags}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

export const useFeatureFlag = (flag: keyof FeatureFlags) => {
  const context = useContext(FeatureFlagContext);
  if (context === undefined) {
    throw new Error("useFeatureFlag must be used within a FeatureFlagProvider");
  }
  return context[flag];
};

export const useFeatureFlags = () => {
    const context = useContext(FeatureFlagContext);
    if (context === undefined) {
      throw new Error("useFeatureFlags must be used within a FeatureFlagProvider");
    }
    return context;
}