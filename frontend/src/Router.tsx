import React from 'react';
import {Route, Routes} from "react-router";
import {Home} from "./pages/home/Home";
import {Login} from "./pages/Login/Login";

// export -- можем импортировать константу в другой файл
export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    );
};

