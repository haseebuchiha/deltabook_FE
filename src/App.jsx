import React, { useState } from "react";
import TowerOfHanoi from './components/TowerOfHonoi'
import RockPaperScissor from './components/RockPaperScissor'
import TicTacToe from './components/TicTacToe'
import Navbar from './components/Navbar'
import './App.css'
import { Route, Routes, } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./components/Home";
import Feed from "./components/Feed/Feed";
import Feeds from "./components/Feeds/Feeds";
import NewFeed from "./components/Feed/New";
import EditFeed from "./components/Feed/Edit";


import Friends from "./components/Friends.jsx"
import AddFriends from "./components/AddFriends";
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient} >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />
        <Route path="/RockPaperScissor" element={<RockPaperScissor />} />
        <Route path="/TowerOfHanoi" element={<TowerOfHanoi />} />
        <Route path='/feeds' element={<Feeds />} />
        <Route path='/feeds/new' element={<NewFeed />} />
        <Route path='/feeds/:id' element={<Feed />} />
        <Route path='/feeds/:id/edit' element={<EditFeed />} />
        <Route path="/" element={<Home/>} />
        <Route path="/TicTacToe" element={<TicTacToe/>} />
        <Route path="/RockPaperScissor" element={<RockPaperScissor/>} />
        <Route path="/TowerOfHanoi" element={<TowerOfHanoi/>} />
        <Route path={"/Friends"} element={<Friends/>}/>
        <Route path={"/AddFriends"} element={<AddFriends/>}/>
      </Routes>
    </QueryClientProvider>
  )
}
export default App
