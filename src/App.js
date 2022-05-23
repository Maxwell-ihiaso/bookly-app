import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnBoardingPage from "./pages/OnBoardingPage";
import WelcomePage from "./pages/WelcomePage";
import PersonalizationPage from "./pages/PersonalizationPage";
import LibraryPage from "./pages/LibraryPage";
import ErrorPage from "./pages/ErrorPage";
import PlayerPage from "./pages/PlayerPage";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route exact path="/" element={<OnBoardingPage />}></Route>
        <Route path="/welcome" element={<WelcomePage />}></Route>
        <Route path="/personalization" element={<PersonalizationPage />} />
        <Route path="/onboarding" element={<OnBoardingPage />}></Route>
        <Route path="/onboarding/:pageNumber" element={<OnBoardingPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/library/:bookId" element={<PlayerPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
