import React from 'react';

import "./style.css";

class HotContainer extends React.Component {

  state = {
    items: []
  };

  componentWillMount() {
    // TODO: Fetch hot products
    this.setState({
      items: [
	{
	  name: 'Whey Protein Pro',
	  src: 'http://www.corpoemfocosuplementos.com.br/image/cache/data/Produtos/Proteinas/whey-protein-pro-series-1kg-baunilha_4-700x700.jpg',
	  description: 'Whey Protein para seu treino'
	},
	{
	  name: 'Whey Protein Pro Series',
	  src: 'https://s3.images-iherb.com/opn/opn02866/l/3.jpg',
	  description: 'Whey Protein para seu treino'
	},
	{
	  name: 'Whey Protein Optimum Nutrition',
	    src: 'http://www.madrugaosuplementos.com.br/media/product/3c3/100-whey-protein-900g-optimum-nutrition-gratis-multishaker-25e.png',
	  description: 'Whey Protein 900g'
	}
      ]
    });
  }

  mapProducts = items => items.map(item => (
    // TODO: Refactor
    <div className="card">
      <img className="card-img-top" src={item.src} style={{'max-width': '200px'}} alt="whey protein"/>
      <div className="card-body">
	<h5 className="card-title">{item.name}</h5>
	<p className="card-text">{item.description}</p>
      </div>
    </div>
  ));

  render() {
    const { items } = this.state;

    return (
      <div className="hot-container">
	<div className="hot">
	  <h3>Destaque</h3>
	  <div className="card-deck">
	    {this.mapProducts(items)}
	  </div>
	</div>
	<div className="hot">
	  <h3>Promoção</h3>
	  <div className="card-deck">
	    {this.mapProducts(items)}
	  </div>
	</div>
      </div>
    );
  }
}

export default HotContainer;
