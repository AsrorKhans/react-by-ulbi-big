import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Posts from "./Posts";
import ErrorPage from "./ErrorPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    );
};

export default AppRouter;