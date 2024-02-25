import React, { Component, Fragment } from 'react'
import ProductDetails from '../components/products/ProductDetails'
import SuggestedProducts from '../components/products/SuggestedProducts'

export class ProductDetailsPage extends Component {
  constructor(){
    super();
    window.scroll(0,0)

    }
  render() {
    return (
      <Fragment>
        <ProductDetails />
        <SuggestedProducts />
      </Fragment>
    )
  }
}

export default ProductDetailsPage
