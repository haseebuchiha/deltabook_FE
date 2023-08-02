import React, {useState } from "react";
import TowerOfHanoi from './components/TowerOfHonoi'
import RockPaperScissor from './components/RockPaperScissor'
import TicTacToe from './components/TicTacToe'
import Navbar from './components/Navbar'
import './App.css'
import {Route, Routes,} from "react-router-dom";
import Home from "./components/Home";
import Friends from "./components/Friends.jsx"
import AddFriends from "./components/AddFriends";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/TicTacToe" element={<TicTacToe/>} />
        <Route path="/RockPaperScissor" element={<RockPaperScissor/>} />
        <Route path="/TowerOfHanoi" element={<TowerOfHanoi/>} />
        <Route path={"/Friends"} element={<Friends/>}/>
        <Route path={"/AddFriends"} element={<AddFriends/>}/>
      </Routes>
    </>
  )
}
export default App
