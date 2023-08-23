import React from 'react';
import CartWidget from './CartWidget'; 


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Mercado NFT</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link btn btn-primary" href="#">Explorar</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-primary" href="#">Subastas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-primary" href="#">Mi Colección</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-primary" href="#">Tienda</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-primary" href="#">Perfil</a>
          </li>
        </ul>
      </div>
      <CartWidget /> {/* Agregamos el componente CartWidget al NavBar */}
   </nav>
  );
}

export default NavBar;
