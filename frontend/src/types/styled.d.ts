import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      lightMain: string;
      darkMain: string;
      secondary: string;
      lightSecondary: string;
      darkSecondary: string;
      background: string;
      lightGrey: string;
      grey: string;
      black: string;
      white: string;
      success: string;
      lightSuccess: string;
      error: string;
      warning: string;
      lightError: string;
      inputPlacholder: string;
    };

    fontSize: {
      heading: string;
      headingSmall: string;
      meneLinks: string;
      button: string;
      big: string;
      medium: string;
      normal: string;
      small: string;
    };
    cardShadow: string;
    inputShadow: string;

    mq: {
      tablet: string;
      desktop: string;
      bigDesktop: string;
      huge: string;
    };
  }
}
