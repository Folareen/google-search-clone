import Search from "./pages/Search";
import GlobalStyles from "./styles/GlobalStyles";
import All from "./pages/All";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Images from "./pages/Images";
import Videos from "./pages/Videos";
import News from "./pages/News";
import SearchTermContextProvider from "./context/SearchTermContext";

function App() {
  return (
    <Router>
      <SearchTermContextProvider>
        <GlobalStyles />
        <Routes>
          <Route element={<Search />} exact path="/" />
          <Route element={<All />} exact path="/all" />
          <Route element={<Images />} path="/images" />
          <Route element={<Videos />} path="/videos" />
          <Route element={<News />} path="/news" />
        </Routes>
      </SearchTermContextProvider>
    </Router>
  );
}

export default App;
