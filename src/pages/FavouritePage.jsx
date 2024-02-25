import React, { Component, Fragment } from 'react'
import Favourite from '../components/common/Favourite'

export class FavouritePage extends Component {
  constructor(){
    super();
    window.scroll(0,0)

    }
  render() {
    return (
      <Fragment>
        <Favourite />
      </Fragment>
    )
  }
}

export default FavouritePage
