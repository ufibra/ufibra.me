import React from 'react';
import axios from 'axios';

import "./style.css";

class Categories extends React.Component {

  componentWillMount () {
    axios.get(`http://localhost:5000/products/wheyprotein`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {

    return (
      <div class="row">
        <div class="offset-3 col-4">
          <div class="categories-box">
            <p class="text-center">Whey</p>
          </div>
        </div>
        <div class="col-4">
          <div class="categories-box">
            <p class="text-center">Termogênicos</p>
          </div>
        </div>
        <div class="offset-3 col-4">
          <div class="categories-box">
            <p class="text-center">Creatina</p>
          </div>
        </div>
        <div class="col-4">
          <div class="categories-box">
            <p class="text-center">BCAA</p>
          </div>
        </div>
        <div class="offset-3 col-4">
          <div class="categories-box">
            <p class="text-center">Glutamina</p>
          </div>
        </div>
        <div class="col-4">
          <div class="categories-box">
            <p class="text-center">Barrinhas de proteína</p>
          </div>
        </div>
      </div>
    );
  }
}


export default Categories;
