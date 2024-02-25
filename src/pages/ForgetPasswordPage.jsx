import React, { Component, Fragment } from 'react'
import ForgetPassword from '../components/common/ForgetPassword'

export class ForgetPasswordPage extends Component {
  constructor(){
    super();
    window.scroll(0,0)

    }
  render() {
    return (
      <Fragment>
        <ForgetPassword />
      </Fragment>
    )
  }
}

export default ForgetPasswordPage
