import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import HomePage from "./views/HomePage/HomePage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/UserRegistrationPage/UserRegisterationPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import ProductUploadPage from './views/ProductUploadPage/ProductUploadPage'
import ProductDetailPage from './views/ProductDetailPage/ProductDetailPage';
import ShoppingCartPage from './views/CartPage/ShoppingCartPage';
import HistoryPage from './views/HistoryPage/History';

function App() {

  return (
    <Suspense fallback={(<div>Loading.........</div>)}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
        <Route exact path="/product/upload" component={Auth(ProductUploadPage, true)} />
          <Route exact path="/product/:productId" component={Auth(ProductDetailPage, null)} />
          <Route exact path="/user/cart" component={Auth(Sho, true)} />
          <Route exact path="/history" component={Auth(HistoryPage, true)} />
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
