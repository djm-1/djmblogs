import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { BrowserRouter as Router } from "react-router-dom";
import Seo from './comps/Seo';

ReactDOM.render(
  <React.StrictMode>  
  <Router>
  <Seo
      title="Welcome to DjmBlogs"
      quote="A personal blog website on programming and life experiences"
      image="https://res.cloudinary.com/dabykheek/image/upload/v1631531331/Djmblogs/james-harrison-vpOeXr5wmR4-unsplash_1_coufdh.jpg"
      description="Hi, I'm Dibyajyoti
      I am currently pursuing Electronics and Telecommunication Engineering at
      Jadavpur University (2019-2023). My passion is to write code and make cool
      stuff out of this. I also love to contribute to open-source. Djm Blogs is
      an attempt for sharing my experience about web development, computer
      science, mathematics and life with people in short time which took me ages
      to learn."
    />  
    <Auth0ProviderWithHistory>
    <App />
    </Auth0ProviderWithHistory>
  </Router>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
