import { Route, Routes } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import lightTheme from "./utils/styles/lightTheme";
import darkTheme from "./utils/styles/darkTheme";
import ThemeContext from "./context/themeContext";
import { getAllData } from "./services/api";

const App: React.FC = () => {
  const [data, setData] = useState<null | []>(null);
  const { theme } = useContext(ThemeContext);

  const commonTheme = theme === "light" ? lightTheme : darkTheme;

  const fetchData = async () => {
    const result = await getAllData();

    setData(result);
  };

   useEffect(() => {
     fetchData();
   }, []);

  return (
    <>
      <ThemeProvider theme={commonTheme}>
        <SharedLayout>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage data={data ? data : null}/>
              }
            />
          </Routes>
        </SharedLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
