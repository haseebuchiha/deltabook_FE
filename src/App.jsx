import React, { useState } from "react";
import TowerOfHanoi from './components/TowerOfHonoi'
import RockPaperScissor from './components/RockPaperScissor'
import TicTacToe from './components/TicTacToe'
import Navbar from './components/Navbar'
import './App.css'
import { Route, Routes, } from "react-router-dom";
import Home from "./components/Home";
import Feed from "./components/Feed/Feed";
import Feeds from "./components/Feeds/Feeds";
import NewFeed from "./components/Feed/New";
import EditFeed from "./components/Feed/Edit";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />
        <Route path="/RockPaperScissor" element={<RockPaperScissor />} />
        <Route path="/TowerOfHanoi" element={<TowerOfHanoi />} />
        <Route path='/feeds' element={<Feeds />} />
        <Route path='/feeds/new' element={<NewFeed />} />
        <Route path='/feed/:id' element={<Feed />} />
        <Route path='/feed/:id/edit' element={<EditFeed />} />
      </Routes>
    </>
  )
}
export default App
