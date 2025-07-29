import designSystem from '../../domakin-design-system.json';

// Extract colors with proper typing
export const colors = {
  primary: {
    orange: '#FF914D',
    blue: '#004AAD',
    red: '#FF5A3C',
  },
  neutral: {
    black: '#000000',
    white: '#FFFFFF',
    textPrimary: 'rgba(0, 0, 0, 0.7)',
    textDark: '#000000',
    lightGray: '#F8F8F8',
    borderGray: '#EDEDED',
    darkGray: '#0C0C0C',
    mediumGray: '#BFBFBF',
  },
  background: {
    pink: '#FFF8F4',
    pinkTwo: '#F5EDE8',
    pinkThree: '#FAF1EC',
    light: '#F8F8F8',
    dark: '#000000',
    surface: '#222020',
  },
  accent: {
    green: '#77C720',
    yellow: '#FFFF00',
  },
  semantic: {
    success: '#77C720',
    warning: '#FFFF00',
    error: '#FF5A3C',
    info: '#004AAD',
  },
  overlays: {
    backdrop: 'rgba(0, 0, 0, 0.5)',
    cardOverlay: 'rgba(0, 0, 0, 0.4)',
    lightOverlay: 'rgba(0, 0, 0, 0.25)',
    textureOverlay: 'rgba(0, 0, 0, 0.55)',
  },
};

// Typography system
export const typography = {
  fontFamily: {
    primary: 'System', // Will use system fonts for React Native
    secondary: 'serif',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    md: 17,
    lg: 18,
    xl: 20,
    '2xl': 22,
    '3xl': 24,
    '4xl': 28,
    '5xl': 32,
    '6xl': 44,
    '7xl': 64,
    '8xl': 72,
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    black: '900',
  },
  lineHeight: {
    tight: 1.138,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.777,
    loose: 2,
  },
};

// Spacing system
export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
  40: 160,
  48: 192,
  56: 224,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
};

// Border radius system
export const borderRadius = {
  none: 0,
  xs: 2,
  sm: 5,
  base: 8,
  md: 10,
  lg: 15,
  xl: 20,
  '2xl': 25,
  '3xl': 30,
  '4xl': 40,
  '5xl': 50,
  '6xl': 60,
  full: 9999,
};

// Shadow system
export const shadows = {
  none: 'none',
  xs: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 2,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  base: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.07,
    shadowRadius: 30,
    elevation: 8,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 30 },
    shadowOpacity: 0.06,
    shadowRadius: 60,
    elevation: 12,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 30 },
    shadowOpacity: 0.04,
    shadowRadius: 70,
    elevation: 15,
  },
};

// Component styles extracted from design system
export const buttonStyles = {
  primary: {
    backgroundColor: colors.primary.orange,
    borderRadius: borderRadius.md,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[6],
    minWidth: 160,
    borderWidth: 1,
    borderColor: colors.primary.blue,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderRadius: borderRadius.md,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[6],
    minWidth: 130,
    borderWidth: 1,
    borderColor: colors.primary.orange,
  },
  outline: {
    backgroundColor: 'transparent',
    borderRadius: borderRadius.md,
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[8],
    borderWidth: 1,
    borderColor: colors.neutral.black,
  },
};

export const cardStyles = {
  standard: {
    backgroundColor: colors.neutral.white,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.neutral.borderGray,
    padding: spacing[8],
    ...shadows.xl,
  },
  property: {
    backgroundColor: colors.neutral.white,
    borderRadius: borderRadius.xl,
    padding: spacing[5],
    ...shadows.lg,
  },
  elevated: {
    backgroundColor: colors.neutral.white,
    borderRadius: borderRadius.xl,
    padding: spacing[6],
    ...shadows.base,
  },
};

export const inputStyles = {
  standard: {
    backgroundColor: colors.neutral.white,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.neutral.borderGray,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    fontSize: typography.fontSize.base,
    color: colors.neutral.textPrimary,
  },
};

// Theme object
export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  buttonStyles,
  cardStyles,
  inputStyles,
  designSystem, // Include the full design system for reference
};

export default theme; 