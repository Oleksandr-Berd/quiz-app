import { Route, Routes, useLocation } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import lightTheme from "./utils/styles/lightTheme";
import darkTheme from "./utils/styles/darkTheme";
import ThemeContext from "./context/themeContext";
import { getAllData } from "./services/api";
import QuizPage from "./pages/QuizPage/QuizPage";

const App: React.FC = () => {
  const [data, setData] = useState<[] | null>(null);
  const [chosenTopic, setChosenTopic] = useState<{
    icon: string;
    title: string;
    questions:[
    
    ];
  } | null>(null);
  const { theme } = useContext(ThemeContext);
  const location = useLocation()

useEffect(()=>{if (location.pathname === "/") {
  setChosenTopic(null);
}  },[location])



  const commonTheme = theme === "light" ? lightTheme : darkTheme;

  const fetchData = async () => {
    const result = await getAllData();

    setData(result);
  };

   useEffect(() => {
     fetchData();
   }, []);
   
   const handleTopic = (chosenTitle:string) => {

    const chosen = data?.filter(({title})=>title === chosenTitle)

    setChosenTopic(chosen![0])
   }



  return (
    <>
      <ThemeProvider theme={commonTheme}>
        <SharedLayout chosenTopic={chosenTopic}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage data={data ? data : null} handleTopic={handleTopic} />
              }
            />
            <Route
              path="/quiz"
              element={<QuizPage chosenTopic={chosenTopic} />}
            />
          </Routes>
        </SharedLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
