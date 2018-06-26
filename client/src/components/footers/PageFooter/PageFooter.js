import React from 'react';

import './style.css';

const PageFooter = () => (
  <footer className='page-footer'>
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="p-3">
          <h5>Comparador</h5>
          <p>Plataforma open source para salvar seu treino <i className="fa fa-heart"/></p>
        </div>
        <div className="p-3">
          <h5>Redes Sociais</h5>
          <ul className="nav navbar-nav d-inline-flex">
            <li className="nav-item">
              <ul className="list-inline-mb-0">
                <li className="list-inline-item"><a href="https://www.instagram.com/ufibra.me/"><i className="fa fa-instagram"/></a></li>
                <li className="list-inline-item"><a href="https://www.linkedin.com/company/ufibra-me/"><i className="fa fa-linkedin"/></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default PageFooter;
