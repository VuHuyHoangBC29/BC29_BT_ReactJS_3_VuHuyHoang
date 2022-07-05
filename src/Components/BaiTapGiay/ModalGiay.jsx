import React, { Component } from "react";

export default class ModalGiay extends Component {
  renderModalGiay() {
    const {id, name, alias, price, description, shortDescription, quantity, image} = this.props.selectedGiay;
    return (
      <div className="card" key={id}>
        <img className="card-img-top" src={image} height={400} />
        <div className="card-body">
          <h2 className="card-title text-danger">{name}</h2>
          <p className="card-text text-left text-info">Price: ${price}</p>
          <p className="card-text text-left text-secondary">
            Description: {description}
          </p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modalGiay"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Product detail</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">{this.renderModalGiay()}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
