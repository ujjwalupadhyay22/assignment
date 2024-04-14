import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Home from './Pages/Home';
import About from './Pages/About';
const Product = lazy(() => import('./Pages/Product'))


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header/><Home/><Footer/></>}></Route>  
        <Route path="/about" element={<><About/></>}></Route>
        <Suspense fallback=
          {<div>Products are loading please wait...</div>}>
            <Route path="/product" element={<><Product/></>}></Route>
          </Suspense>
        <Route path="/product" element={<><Product/></>}></Route> 
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;