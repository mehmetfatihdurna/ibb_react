import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterBlog from './RouterBlog';
import reportWebVitals from './reportWebVitals';

//BrowserRouter ==> http://localhost:3000/
//HashRouter ==> http://localhost:3000/#/
import { BrowserRouter } from 'react-router-dom';
// ROOT
const root = ReactDOM.createRoot(document.getElementById('root'));


// RENDER
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterBlog></RouterBlog>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
