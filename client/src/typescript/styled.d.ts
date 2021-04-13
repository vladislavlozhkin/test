import 'styled-components/macro';

declare module 'styled-components/macro' {
  export interface DefaultTheme {
    borderRadius: {
      sm: string;
      lg: string;
    };
    spacing: {
      xxs: string;
      xs: string;
      sm: string;
      lg: string;
    };
    fontSize: {
      xs: string,
      sm: string,
      md: string,
      lg: string
    };
    colors: {
      white: string;
      black: string;
      orange: string;
      grey1: string;
      grey2: string;
      grey3: string;
      grey4: string;
      lightGreen: string;
      primary: string;
    };
  }
}
