import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-end mb-2">
          <button
            type="button"
            className="btn btn-warning btn-lg"
            data-toggle="modal"
            data-target="#gioHang"
          >
            GIỎ HÀNG ({this.props.cartList.length})
          </button>
        </div>
        <div
          className="modal fade"
          id="gioHang"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Hình Ảnh</th>
                      <th className="text-left">Tên SP</th>
                      <th className="text-left">Số lượng</th>
                      <th>Đơn Giá</th>
                      <th>Thành Tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.cartList.map((ele) => {
                      return (
                        <tr key={ele.id}>
                          <td>
                            <img
                              width={70}
                              src={ele.image}
                              className="img-fluid"
                              alt="phone"
                            />
                          </td>
                          <td className="text-left">{ele.name}</td>
                          <td className="text-left">
                            <button
                              onClick={() =>
                                this.props.handleQuantity(ele, false)
                              }
                              className="btn btn-warning"
                            >
                              -
                            </button>
                            <span className="mx-1">{ele.soLuong}</span>
                            <button
                              onClick={() =>
                                this.props.handleQuantity(ele, true)
                              }
                              className="btn btn-warning"
                            >
                              +
                            </button>
                          </td>
                          <td>${ele.price.toLocaleString()}</td>
                          <td>${(ele.price * ele.soLuong).toLocaleString()}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => this.props.delete(ele.id)}
                            >
                              XÓA
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                        <td colSpan={4}></td>
                        <td>
                            Total
                        </td>
                        <td>
                            ${this.props.cartList.reduce((previousValue, currentValue)=> {
                                return previousValue += currentValue.price * currentValue.soLuong
                            },0).toLocaleString()}
                        </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
