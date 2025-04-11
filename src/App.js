import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import GameBoard from "./components/pages/Game";

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/game" element={<GameBoard />}></Route>

        </Routes>
      </main>
    </>
  );
}

export default App;
