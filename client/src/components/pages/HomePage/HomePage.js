import React from 'react';

import HomeHeader from '../../headers/HomeHeader';
import ProductCard from '../../cards/ProductCard';

import './styles.css';

// TODO: create a fake api
const products = [
  {
    id: '239120391203912',
    img: 'http://www.madrugaosuplementos.com.br/media/product/76b/100-whey-protein-900g-optimum-nutrition-creatina-150g-gratis-73b.png',
    price: '89,90',
    name: 'Whey Protein',
    description: 'Proteina para treinar',
    href: 'http://whey.com/prod'
  },
  {
    id: '239120391203912',
    img: 'http://www.madrugaosuplementos.com.br/media/product/76b/100-whey-protein-900g-optimum-nutrition-creatina-150g-gratis-73b.png',
    price: '89,90',
    name: 'Whey Protein',
    description: 'Proteina para treinar',
    href: 'http://whey.com/prod'
  },
  {
    id: '239120391203912',
    img: 'http://www.madrugaosuplementos.com.br/media/product/76b/100-whey-protein-900g-optimum-nutrition-creatina-150g-gratis-73b.png',
    price: '89,90',
    name: 'Whey Protein',
    description: 'Proteina para treinar',
    href: 'http://whey.com/prod'
  },
]

const HomePage = () => (
  <section className="home-page">
    <HomeHeader />
    <div className="container">
      <h3>Destaque</h3>
      <div className="card-deck">
        {products.map(product => <ProductCard product={product} />)}
      </div>
    </div>
  </section>
);

export default HomePage;
