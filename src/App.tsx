import { Route, Routes } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import { useContext } from "react";
import {ThemeProvider } from "@emotion/react";
import lightTheme from "./utils/styles/lightTheme";
import darkTheme from "./utils/styles/darkTheme";
import ThemeContext from "./context/themeContext";

const App:React.FC = () => {
    const { theme } = useContext(ThemeContext);
  const commonTheme = theme === "light" ? lightTheme : darkTheme;
console.log(commonTheme);

  return (
    <>
      <ThemeProvider theme={commonTheme}>
        <SharedLayout >
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </SharedLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
