import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        const item = this.props.item;
        const handleRemoveFromCart = this.props.handleRemoveFromCart;
        const getCountOfProduct = this.props.getCountOfProduct
        const count = getCountOfProduct(item, this.props.cart)

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-2 text-center">
                        <img className="img-fluid" src={ item.image } alt={ item.name } />
                    </div>
                    <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                        <h4 className="product-name"><strong>{ item.name }</strong></h4>
                        <h4>
                            <small></small>
                        </h4>
                    </div>
                    <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                        <div className="col-3 col-sm-3 col-md-6 text-md-right" style={{ paddingTop: "5px" }}>
                            <h6><strong>${ item.price } <span className="text-muted">x</span> { count } </strong></h6>
                        </div>
                        {/* <div className="col-4 col-sm-4 col-md-4">
                                <div className="quantity">
                                    <input type="button" value="+" className="plus">
                                    <input type="number" step="1" max="99" min="1" value="1" title="Qty" className="qty" size="4">
                                    <input type="button" value="-" className="minus">
                                </div>
                            </div> */}
                        <div className="col-2 col-sm-2 col-md-2 text-right">
                            <button onClick={() => handleRemoveFromCart(item)} type="button" style={{ color: "white" }} className="btn btn-danger btn-xs">
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <hr />
            </React.Fragment>
        )
    }
}
