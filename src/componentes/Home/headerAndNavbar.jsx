import React from "react";
import "../../estilos/Home/headerAndNavbar.css"

export function Navbar() {
    return(
    <header className="header">
      <div className="logo">
        <img src={require("../../imagenes/logos/logo-optimen.png")} alt="Logo de la empresa" />
      </div>
  
    <nav>
      <ul className="nav-link">
        <li><a href="Home">Home</a></li>
        <li><a href="Customers">Customers</a></li>
        <li><a href="About us">About us</a></li>
        <li><a href="New us">New us</a></li>
        <li><a href="Contact us">Contact us</a></li>
      </ul>
    </nav>
    </header>
    );
}

export function Footer() {
    return(
    <footer>
      <p1>Optimen</p1>
      
      <p>info@mysite.com</p>
      
      <p>&copy;2023 por Optimen. </p>
  
    </footer>
    )
}