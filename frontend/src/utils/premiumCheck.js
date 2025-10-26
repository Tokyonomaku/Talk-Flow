export const isPremiumFeature = (feature, userPremiumStatus) => {
  return feature.isPremium && !userPremiumStatus;
};

export const canAccessFeature = (feature, userPremiumStatus) => {
  return !feature.isPremium || userPremiumStatus;
};

export const getPremiumMessage = (featureName) => {
  return `This ${featureName} is available with a premium subscription. Upgrade now to unlock all features!`;
};

/**
 * Check if the current user has premium access
 * @returns {boolean} True if user has premium access
 */
export const isPremium = () => {
  return localStorage.getItem('isPremium') === 'true';
};
