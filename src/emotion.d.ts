import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      backgroundColor:string;
      ui: string;
      text: string;
      body: string;
      component: string;
      secondaryText:string;
    };
  }
}
