import React, { Component, Fragment } from 'react'
import CartList from '../components/cart/CartList'
import OrderList from '../components/cart/OrderList'

export class CartListPage extends Component {
  constructor(){
    super();
    window.scroll(0,0)

    }
  render() {
    return (
      <Fragment>
        <CartList />
        <OrderList />
      </Fragment>
    )
  }
}

export default CartListPage
