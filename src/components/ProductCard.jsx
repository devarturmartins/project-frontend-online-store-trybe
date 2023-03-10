import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as api from '../services/api';

export default class ProductCard extends Component {
  render() {
    const { title, thumbnail, price, id } = this.props;
    return (
      <div
        style={ { width: '15rem', margin: '5px' } }
        className="card"
        data-testid="product"
      >
        <img
          className="card-img-top"
          src={ thumbnail }
          alt={ title }
        />
        <div
          style={ { padding: '10px' } }
        >
          <h5
            className="card-title"
            data-testid="shopping-cart-product-name"
          >
            { title }
          </h5>
          <p className="card-text">{ `R$: ${price}` }</p>
        </div>
        <button
          className="btn btn-success"
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => {
            api.addProductCart(id, title, price, thumbnail);
          } }
        >
          Adicionar ao Carrinho
        </button>

        <Link
          className="btn"
          data-testid="product-detail-link"
          to={ `product/${id}` }
        >
          Detalhes do Produto
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
