import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import "./style.css";

const ProductCard = ({ product }) => (
  <div className="col-4">
    <div className="card product-card">
      <div className="product-card__image">
        <img src={product.image} alt="" />
      </div>
      <div className="card-body">
        <p className="card-text product-card__price">R$ {product.price}</p>
        <h5 className="card-title product-card__title">{product.name}</h5>
      </div>
      <div className="card-footer product-card__footer">
        <a href={product.url} className="btn product-card__btn">IR À LOJA</a><br/>
        <Link to="/comparisons">Ver preços em mais lojas</Link>
      </div>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({}).isRequired
};

export default ProductCard;
