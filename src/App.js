import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

import LandingPage from "./routes/LandingPage";



function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
