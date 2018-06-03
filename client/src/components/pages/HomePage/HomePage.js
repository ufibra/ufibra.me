import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Grid,
  Row,
  Thumbnail,
} from 'react-bootstrap';

const Product = ({ url }) => (
  <Thumbnail src={url}>
    <h3>Whey Protein</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida justo a augue hendrerit blandit. Aenean eu quam vitae nulla sollicitudin hendrerit a at diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin dui in justo semper lacinia. Phasellus non nisi lectus. In pretium placerat mattis. Morbi placerat pulvinar risus id vestibulum.</p>
  </Thumbnail>
);

Product.propTypes = {
  url: PropTypes.string.isRequired
};

const Products = () => (
  <Row>
    <Col xs={6} md={4}>
      <Product url='http://www.corpoemfocosuplementos.com.br/image/cache/data/Produtos/Proteinas/whey-protein-pro-series-1kg-baunilha_4-700x700.jpg' />
    </Col>
    <Col xs={6} md={4}>
      <Product url='https://s3.images-iherb.com/opn/opn02866/l/3.jpg' />
    </Col>
    <Col xs={6} md={4}>
      <Product url='http://www.madrugaosuplementos.com.br/media/product/3c3/100-whey-protein-900g-optimum-nutrition-gratis-multishaker-25e.png' />
    </Col>
  </Row>
);

// TODO: Refactor
const HomePage = () => (
  <Grid>
    <Products />
  </Grid>
);

export default HomePage;
