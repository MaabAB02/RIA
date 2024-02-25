import React, { Component, Fragment } from 'react';
import TopNavbar from '../components/TopNavbar';
import Footer from '../components/common/Footer';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import CartListPage from '../pages/CartListPage';
import FavouritePage from '../pages/FavouritePage';
import NotificationPage from '../pages/NotificationPage';
import LoginPage from '../pages/LoginPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import RegistrationPage from '../pages/RegistrationPage';
import SubCategoryPage from '../pages/SubCategoryPage';
import ContactPage from '../pages/ContactPage';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

export class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <TopNavbar />
        <Routes>

          <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} /> } />

          <Route exact path="/about"  Component={AboutPage} render={(props) => <AboutPage {...props} key={Date.now()} /> } />

          <Route exact path="/search" render={(props) => <SearchPage {...props} key={Date.now()} /> } />

          <Route exact path="/cart_list" render={(props) => <CartListPage /> } />

          <Route exact path="/favourit" render={(props) => <CartListPage {...props} key={Date.now()} /> } />

          <Route exact path="/about" render={(props) => <FavouritePage {...props} key={Date.now()} /> } />

          <Route exact path="/notification" render={(props) => <NotificationPage {...props} key={Date.now()} /> } />

          <Route exact path="/login" render={(props) => <LoginPage {...props} key={Date.now()} /> } />

          <Route exact path="/forget_password" render={(props) => <ForgetPasswordPage {...props} key={Date.now()} /> } />

          <Route exact path="/register" render={(props) => <RegistrationPage {...props} key={Date.now()} /> } />

          <Route exact path="/profile" Component={HomePage} render={(props) => <RegistrationPage {...props} key={Date.now()} /> } />

          <Route exact path="/computer" Component={SubCategoryPage} render={(props) => <SubCategoryPage {...props} key={Date.now()} /> } />

          <Route exact path="/contact_us" Component={ContactPage} render={(props) => <ContactPage {...props} key={Date.now()} /> } />

        </Routes>
        <Footer />
      </Fragment>
    )
  }
}

export default AppRouter
