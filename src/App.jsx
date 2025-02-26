import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import Artists from "./pages/Artists";
import Song from "./pages/Song";
import Songs from "./pages/Songs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/artist/:id" element={<Artist />}></Route>
        <Route path="/artists" element={<Artists />}></Route>
        <Route path="/song/:id" element={<Song />}></Route>
        <Route path="/songs" element={<Songs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
