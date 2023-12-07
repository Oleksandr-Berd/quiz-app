import { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Dna } from "react-loader-spinner";

import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import lightTheme from "./utils/styles/lightTheme";
import darkTheme from "./utils/styles/darkTheme";
import ThemeContext from "./context/themeContext";
import { getAllData } from "./services/api";
import QuizPage from "./pages/QuizPage/QuizPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";

const App: React.FC = () => {
  const [data, setData] = useState<[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIserror] = useState<string | null>(null);
  const [chosenTopic, setChosenTopic] = useState<{
    icon: string;
    title: string;
    questions: [];
  } | null>(null);
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      setChosenTopic(null);
    } else if (location.pathname === "/quiz" && !chosenTopic) {
      navigate("/");
    }
  }, [location, chosenTopic, navigate]);

  const commonTheme = theme === "light" ? lightTheme : darkTheme;

  const fetchData = async () => {
    setIsLoading(true);
    const result = await getAllData();

    if (result.message) {
      setIserror(result.message);
    } else {
      setData(result);
    }
  };

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  const handleTopic = (chosenTitle: string) => {
    const chosen = data?.filter(({ title }) => title === chosenTitle);

    setChosenTopic(chosen![0]);
  };

  return (
    <>
      <ThemeProvider theme={commonTheme}>
        <SharedLayout chosenTopic={chosenTopic}>
          {isLoading ? (
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          ) : null}
          {isError ? (
            <ErrorPage message={isError} />
          ) : (
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    data={data ? data : null}
                    handleTopic={handleTopic}
                  />
                }
              />
              <Route
                path="/quiz"
                element={<QuizPage chosenTopic={chosenTopic ?? chosenTopic} />}
              />
            </Routes>
          )}
        </SharedLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
