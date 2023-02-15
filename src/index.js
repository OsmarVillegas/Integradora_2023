import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header, Caracteristicas, Services, NewsAndUpdates, Colaboradores, AwardsAndCertifications } from './componentes/Home/home';
import { Navbar, Footer} from './componentes/Home/headerAndNavbar'
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Caracteristicas />
    <Services />
    <NewsAndUpdates />
    {/* <Colaboradores />
    <AwardsAndCertifications /> 
    <Footer /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
