import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Paisaje1 } from "./components/Paisaje1";
import { Paisaje2 } from "./components/Paisaje2";
import { Paisaje3 } from "./components/Paisaje3";
import { Paisaje4 } from "./components/Paisaje4";
import { Paisaje5 } from "./components/Paisaje5";

function App() {
  return (
    <>
        <BrowserRouter>
      <div>
        <h1 className="text-center my-3">Gallery Project</h1>
      </div>
      <div className="container d-flex justify-content-center">
          <Routes>
            <Route
              path="paisaje1"
              element={<Paisaje1 className="main-img-container" />}
            />
            <Route
              path="paisaje2"
              element={<Paisaje2 className="main-img-container" />}
            />
            <Route
              path="paisaje3"
              element={<Paisaje3 className="main-img-container" />}
            />
            <Route
              path="paisaje4"
              element={<Paisaje4 className="main-img-container" />}
            />
            <Route
              path="paisaje5"
              element={<Paisaje5 className="main-img-container" />}
            />
          </Routes>
      </div>
      <div className="container">
        <Navigation />
                </div>
        </BrowserRouter>
    </>
  );
}

export default App;
