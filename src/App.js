import Search from "./pages/Search";
import GlobalStyles from "./styles/GlobalStyles";
import All from "./pages/All";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Images from "./pages/Images";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route element={<Search />} exact path="/" />
        <Route element={<All />} exact path="/all" />
        <Route element={<Images />} path="/images" />
      </Routes>
    </Router>
  );
}

export default App;
