import React from 'react';
import axios from 'axios';
import HomeHeader from '../../headers/HomeHeader';
import ProductCard from '../../cards/ProductCard';

import './styles.css';

class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      products: []
    }
  }
  componentWillMount () {
    axios.get(`http://localhost:5000/products/wheyprotein`)
      .then(res => {
        this.setState({products: res.data})
      })
      .catch(err => {
        console.log(err)
      })

    axios.get(`http://localhost:5000/products/category?category=gsnsuplementos`)
      .then(res => {
        this.setState({products: res.data})
      })
      .catch(err => {
        console.log(err)
      })  
  }

  render () {
    return (
      <section className="home-page">
        <HomeHeader />
        <div className="container">
          <h3>Destaque</h3>
          <div className="card-deck">
            {this.state.products.map(product => <ProductCard product={product} />)}
          </div>
        </div>
      </section>
    )

  }
}

export default HomePage;
