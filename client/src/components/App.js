import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import HomePage from "./views/HomePage/HomePage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import UserRegisterationPage from "./views/UserRegistrationPage/UserRegisterationPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import ProductUploadPage from './views/ProductUploadPage/ProductUploadPage'
import ProductDetailPage from './views/ProductDetailPage/ProductDetailPage';
import ShoppingCartPage from './views/ShoppingCartPage/ShoppingCartPage';
import AdminPage from './views/AdminPage/AdminPage';
import StoreManagerPage from './views/StoreManagerPage/StoreManagerPage';
import Wishlist from './views/Wishlist/Wishlist';
import ViewEmployee from './views/AdminManagement/ViewEmployee';

import AddEmployee from './views/AdminManagement/AddEmployee';
import EditEmployee from "./views/AdminManagement/EditEmployee";
import DeleteEmployee from "./views/AdminManagement/DeleteEmployee";
import AddCategory from "./views/AdminManagement/CategoryManagement/AddCategory";
import ViewCategory from "./views/AdminManagement/CategoryManagement/ViewCategory";
import EditCategory from "./views/AdminManagement/CategoryManagement/EditCategory";
import DeleteCategory from "./views/AdminManagement/CategoryManagement/DeleteCategory";
import AddStoreManager from "./views/AdminManagement/StoreManagerManagement/AddStroeManager";
import ViewStoreManager from "./views/AdminManagement/StoreManagerManagement/ViewStoreManager";
import AddManager from './views/AdminManagement/StoreManagerManagement/addStoreManager';
import EditStoreManager from "./views/AdminManagement/StoreManagerManagement/EditStoreManager";
import DeleteStoreManager from "./views/AdminManagement/StoreManagerManagement/DeleteStoreManager";

function App() {

  return (
    <Suspense fallback={(<div>Loading.........</div>)}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
        <Route exact path="/product/upload" component={Auth(ProductUploadPage, true)} />
          <Route exact path="/product/:productId" component={Auth(ProductDetailPage, null)} />
          <Route exact path="/wishlist" component={Auth(Wishlist, false)} />
          <Route exact path="/user/cart" component={Auth(ShoppingCartPage, true)} />
          <Route exact path="/admin" component={Auth(AdminPage, null)} />
          <Route exact path="/StoreManager" component={Auth(StoreManagerPage, null)} />
          <Route exact path="/" component={Auth(HomePage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(UserRegisterationPage, false)} />
              <Route path="/viewEmployee"  component={ViewEmployee}  />
          <Route path="/addEmployee" component={AddEmployee}  />
        <Route path="/editEmployee/:id" component={EditEmployee}  />
          <Route path="/deleteEmployee/:id" component={DeleteEmployee}  />
          <Route path="/addCategory" component={AddCategory} />
          <Route path="/viewCategory" component={ViewCategory} />
          <Route path="/editCategory/:id" component={EditCategory} />
          <Route path="/deleteCategory/:id" component={DeleteCategory} />
          <Route path="/addSManager" component={AddStoreManager}  />
          <Route path="/addManager/:id" component={AddManager}  />
          <Route path="/viewSManager" component={ViewStoreManager}  />
          <Route path="/editSManager/:id" component={EditStoreManager}  />
          <Route path="/deleteSManager/:id" component={DeleteStoreManager}  />
          
        </Switch>
      </div>
    
      <Footer />
    </Suspense>
  );
}

export default App;
