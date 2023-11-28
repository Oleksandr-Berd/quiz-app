import { Route, Routes } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";

const App:React.FC = () => {
  return (
   <>
   <SharedLayout>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
    </SharedLayout></>
  );
}

export default App;
