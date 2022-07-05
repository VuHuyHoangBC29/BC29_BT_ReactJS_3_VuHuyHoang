import React, { Component } from "react";

export default class Giay extends Component {
  render() {
    const {id, name, alias, price, description, shortDescription, quantity, image} = this.props.item;

    return (
      <div className="card">
        <img className="card-img-top" src={image} alt />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">${price}</p>
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modalGiay"
            onClick={() => this.props.showDetail(this.props.item)}
          >
            Show detail
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.props.addToCart(this.props.item)}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}
