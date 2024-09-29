const theme = {
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
    xlarge: 32,
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  }
};

export type SpacingKeys = keyof typeof theme.spacing;

export default theme;
