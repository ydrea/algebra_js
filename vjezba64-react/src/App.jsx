import Header from "./components/Header";
import ListaKartica from "./components/ListaKartica";
import Stats from "./components/Stats";
import UnosKartica from "./components/UnosKartica";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import { FeedBackProvider } from "./context/Context";

const App = () => {
  return (
    <FeedBackProvider>
      <Router>
        <Header text="NOVI LOGO" />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <UnosKartica />
                <Stats />
                <ListaKartica />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </FeedBackProvider>
  );
};

export default App;
