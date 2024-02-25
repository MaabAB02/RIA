import React, { Component, Fragment } from 'react';
import {TopNavbar} from './components/TopNavbar';
import '../src/assets/css/custom.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import SearchPage from './pages/SearchPage';



export class App extends Component {
  render() {
    return (
    <Fragment>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </Fragment>
    )
  }
}

export default App
