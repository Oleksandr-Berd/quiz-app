import { createContext, Context } from "react";
import { IState } from "./themeContextProvide";

const ThemeContext: Context<IState> = createContext<IState>({
  theme: "light",
  toggle: (theme) => {},
});

export default ThemeContext;
