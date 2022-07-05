import React, { Component } from "react";
import DanhSachGiay from "./DanhSachGiay";
import shoesList from "../../Data/data.json";
import ModalGiay from "./ModalGiay";
import GioHang from "./GioHang";

export default class BaiTapGiay extends Component {
  state = {
    dataGiay: shoesList,
    selectedGiay: shoesList[0],
    cartList: [],
  };

  showDetail = (giay) => {
    this.setState({
      selectedGiay: giay,
    });
  };

  delete = (id) => {
    const newCart = [...this.state.cartList];
    let index = newCart.findIndex((ele) => ele.id === id);
    newCart.splice(index, 1);
    this.setState({
      cartList: newCart,
    });
  };

  addToCart = (shoe) => {
    const newCart = [...this.state.cartList];

    const idx = newCart.findIndex((ele) => ele.id === shoe.id);

    if (idx !== -1) {
      newCart[idx].soLuong += 1;
    } else {
      newCart.push({
        ...shoe,
        soLuong: 1,
      });
    }

    this.setState(
      {
        cartList: newCart,
      },
      () => {
        console.log(this.state.cartList);
      }
    );
  };

  handleQuantity = (shoe, isIncrease) => {
    const newCart = [...this.state.cartList];

    const idx = newCart.findIndex((ele) => ele.id === shoe.id);

    if (idx === -1) {
      alert("Không tìm thấy sản phẩm");

      throw new Error("Không tìm thấy sản phẩm");
    }

    if (isIncrease) {
      newCart[idx].soLuong += 1;
    } else if (newCart[idx].soLuong > 1) {
      newCart[idx].soLuong -= 1;
    } else if (window.confirm("Bạn có muốn xoá ko ?")) {
      newCart.splice(idx, 1);
    }

    this.setState({
      cartList: newCart,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary">SHOES SHOP</h1>
        <div className="text-right">
          {/* <button
            className="btn btn-warning"
            data-toggle="modal"
            data-target="#modelId1"
          >
            Cart({this.state.cartList.length})
          </button> */}
          <GioHang
            cartList={this.state.cartList}
            handleQuantity={this.handleQuantity}
            delete={this.delete}
          />
        </div>

        <DanhSachGiay
          dataGiay={this.state.dataGiay}
          showDetail={this.showDetail}
          addToCart={this.addToCart}
        />

        <ModalGiay selectedGiay={this.state.selectedGiay} />
      </div>
    );
  }
}
