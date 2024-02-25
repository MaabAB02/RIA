import React, { Component, Fragment } from 'react'
import UserLog from '../components/common/UserLog'

export class LoginPage extends Component {
  constructor(){
    super();
    window.scroll(0,0)

    }
  render() {
    return (
      <Fragment>
        <UserLog />
      </Fragment>
    )
  }
}

export default LoginPage
