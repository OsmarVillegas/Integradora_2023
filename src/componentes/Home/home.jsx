import React from "react";
import "../../estilos/Home/header.css";
import "../../estilos/Home/caracteristicas.css";
import "../../estilos/Home/services.css";
import "../../estilos/Home/NewsAndUpdate.css";
import noticias from "../../base-de-datos/noticias.json";
import colab from "../../base-de-datos/colaboradores.json";



export function Header() {
    return (
      <div className="header-contenido row">
        <img className="header-img col-12" src={require("../../imagenes/cabeza/Home.png")} alt="Imagen principal de un avión" />
        <h1 className="header-titulo">OPTIMEN</h1>
        <p className="header-parrafo">Unique team of Resources Management <br/> and Optimization Experts and passionate <br/>Software Developers.</p>
      </div>
    );
}

export function Caracteristicas() {
  return (
    <div className="caracteristicas-contenido row justify-content-center">
      <div className="col-auto" />
      <div className="caracteristicas-cuadros col-2">
        <div className="caracteristicas-titulos">
        <h1 className="caracteristicas-titulo">A World Class Global Enterprise</h1>
        </div>
        <p className="caracteristicas-texto">Mexican Company with the following experience since 2006: Resource Optimization Consultancy and Configuration Support Services IT Software Solutions Development</p>
      </div>
      <div className="col-1">

      </div>
      <div className="caracteristicas-cuadros col-2">
        <div className="caracteristicas-titulos">
        <h1 className="caracteristicas-titulo text">Capabilities</h1>
        </div>
        <p className="caracteristicas-texto">know more about us</p>
        <img className="caracteristicas-imagen" src={require("../../imagenes/recursos/search.png")} alt="caracteristicas-img" />
      </div>
      <div className="col-1">

      </div>
      <div className="caracteristicas-cuadros caracteristicas-our col-2">
        <div className="caracteristicas-titulos">
        <h1 className="caracteristicas-titulo text">Our Porpuse</h1>
        </div>
        <p className="caracteristicas-texto caracteristicas-our">Streamline the world mobility</p>
      </div>

      <div className="col-auto" />
      
    </div>
  );
}

export function Services() {
  return(
    <div className="services-contenido row">
      <h1 className="services-titulo col-12">Our Services</h1>
      <div className="services-servicio col-1">
        <img src={require("../../imagenes/recursos/implementation.png")} alt="Implementation" className="services-servicio-imagen" />
        <h4 className="services-servicio-nombre">Implementation</h4>
      </div>
      <div className="services-servicio col-1">
        <img src={require("../../imagenes/recursos/innovation.png")} alt="Innovation" className="services-servicio-imagen" />
        <h4 className="services-servicio-nombre">Innovation</h4>
      </div>
      <div className="services-servicio col-1">
          <img src={require("../../imagenes/recursos/interface_Developmen.png")} alt="Interfaces Development" className="services-servicio-imagen" />
          <h5 className="services-servicio-nombre">Interfaces Development</h5>
      </div>
      <div className="services-servicio col-1">
          <img src={require("../../imagenes/recursos/consultancy.png")} alt="Consultancy" className="services-servicio-imagen" />
          <h4 className="services-servicio-nombre">Consultancy</h4>
      </div>
      <div className="services-servicio col-1">
        <img src={require("../../imagenes/recursos/business_Rules_Developmen.png")} alt="Bussines Rules Developmen" className="services-servicio-imagen" />
        <h5 className="services-servicio-nombre">Bussines Rules Development</h5>
      </div>
      <div className="services-servicio col-1">
        <img src={require("../../imagenes/recursos/auditing.png")} alt="Auditing" className="services-servicio-imagen" />
        <h4 className="services-servicio-nombre">Auditing</h4>
      </div>
    </div>
  );
}

export function NewsAndUpdates() {
  return(
    <div className="newsAndUpdate-contenido row">
      <h1 style={{color:"white"}}>News and updates</h1>
    {noticias.map((noticias) => {
      const imagen = noticias.img;
      console.log(noticias);
      return(
      <div className="newsAndUpdate-noticias col-2">
        <img src={require(`../../imagenes/noticias/noticiasOptimen-${imagen}.jpg`)} alt={noticias.titulo} className="newsAndUpdate-img"/>
        <h3 className="newsAndUpdate-titulo-noticia">{noticias.titulo}</h3>
        <p className="newsAndUpdate-fecha"> {noticias.fecha} </p>
        <p className="newsAndUpdate-texto">{noticias.desc}</p>
      </div>
      )}
    )}
    </div>
  );
}

export function Colaboradores() {
  return(
    <div className="colaboradores-contenido">
      <h1>Partnerships and Affiliations</h1>
      {colab.map((colab) => {
        const col = colab.direccion;
        return(
          <div className="colaboradores-colab">
            <img src={require(`../../imagenes/colaboradores/${col}.png`)} alt={colab.direccion} />
          </div>
        )}
      )}
    </div>
  );
}

export function AwardsAndCertifications() {
  return(
    <div className="awardsAndCertifications-contenido">
      <h1>Partnerships and Affiliations</h1>
      <div className="awardsAndCertifications-awards">
        <img src={require("../../imagenes/reconocimientos/logo-Boeing.png")} alt="Logo Boeing" />
      </div>
      <div className="awardsAndCertifications-awards">
        <img src={require("../../imagenes/reconocimientos/logo-MarcaGuanajuato.png")} alt="Logo Marca Guanajuato" />
      </div>
      <div className="awardsAndCertifications-awards">
        <img src={require("../../imagenes/reconocimientos/reconocimiento-ESR.png")} alt="Reconocimiento ESR" />
      </div>
      <div className="awardsAndCertifications-awards">
        <img src={require("../../imagenes/reconocimientos/reconocimiento-iso.png")} alt="Reconocimiento ISO" />
      </div>
    </div>  
  );
}

