import { isPremium, isPremiumFeature, canAccessFeature, getPremiumMessage } from '../premiumCheck';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

// Set up localStorage mock before each test
beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true
  });
});

describe('Premium Check Functions', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear();
  });

  test('isPremium should return true when localStorage has isPremium=true', () => {
    localStorageMock.getItem.mockReturnValue('true');
    expect(isPremium()).toBe(true);
    expect(localStorageMock.getItem).toHaveBeenCalledWith('isPremium');
  });

  test('isPremium should return false when localStorage has isPremium=false', () => {
    localStorageMock.getItem.mockReturnValue('false');
    expect(isPremium()).toBe(false);
  });

  test('isPremium should return false when localStorage has no isPremium value', () => {
    localStorageMock.getItem.mockReturnValue(null);
    expect(isPremium()).toBe(false);
  });

  test('isPremiumFeature should return true for premium features when user is not premium', () => {
    const feature = { isPremium: true };
    expect(isPremiumFeature(feature, false)).toBe(true);
  });

  test('isPremiumFeature should return false for premium features when user is premium', () => {
    const feature = { isPremium: true };
    expect(isPremiumFeature(feature, true)).toBe(false);
  });

  test('isPremiumFeature should return false for non-premium features', () => {
    const feature = { isPremium: false };
    expect(isPremiumFeature(feature, false)).toBe(false);
  });

  test('canAccessFeature should return true for non-premium features', () => {
    const feature = { isPremium: false };
    expect(canAccessFeature(feature, false)).toBe(true);
  });

  test('canAccessFeature should return true for premium features when user is premium', () => {
    const feature = { isPremium: true };
    expect(canAccessFeature(feature, true)).toBe(true);
  });

  test('canAccessFeature should return false for premium features when user is not premium', () => {
    const feature = { isPremium: true };
    expect(canAccessFeature(feature, false)).toBe(false);
  });

  test('getPremiumMessage should return correct message', () => {
    const message = getPremiumMessage('lesson');
    expect(message).toBe('This lesson is available with a premium subscription. Upgrade now to unlock all features!');
  });
});
