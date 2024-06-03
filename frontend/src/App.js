import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Posts from "./components/Posts";
import PostPage from "./components/PostPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
