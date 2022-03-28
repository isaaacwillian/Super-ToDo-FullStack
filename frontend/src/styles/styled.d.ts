import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      inputBackground: string;
      text: string;
      inputPlaceholder: string;
    };
  }
}
