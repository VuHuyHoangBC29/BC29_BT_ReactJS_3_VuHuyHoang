import React, { Component } from "react";
import Giay from "./Giay";

export default class DanhSachGiay extends Component {
  renderShoesList = () => {
    return this.props.dataGiay.map((ele) => {
      return (
        <div className="col-4 my-3" key={ele.id}>
          <Giay
            showDetail={this.props.showDetail}
            item={ele}
            addToCart={this.props.addToCart}
          ></Giay>
        </div>
      );
    });
  };

  render() {
    return <div className="row">{this.renderShoesList()}</div>;
  }
}
