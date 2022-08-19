import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trolley from './components/Trolley';
import ProductInfo from './components/ProductInfo';
import Header from './components/Header';
import SearchBar from './components/Search';
import { Container } from 'reactstrap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/'  element={<App />}/>
    <Route path='carrito'  element={<Trolley />}/>
    <Route path='/producto/:id'  element={<ProductInfo />}/>
  </Routes>
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
