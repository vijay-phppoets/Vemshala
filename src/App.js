import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "antd/dist/antd.less"
import { ThemeProvider } from 'styled-components'
import { AnimatedSwitch } from 'react-router-transition';
import { Provider } from "react-redux"
import CookieConsent from "react-cookie-consent";
import store from "./store"

import TopBar from "./component/TopBar/TopBar"
import Header from "./component/Header/Header"
import CheckoutHeader from "./component/CheckoutHeader/CheckoutHeader"

import Home from "./page/Home/Home"
import CategoryProductList from "./page/CategoryProductList/CategoryProductList"
import SubCategoryProductList from "./page/SubCategoryProductList/SubCategoryProductList"
import ProductDetail from "./page/ProductDetail/ProductDetail"
import BillingAddress from "./page/BillingAddress/BillingAddress"
import ShippingAddress from "./page/ShippingAddress/ShippingAddress"
import CheckoutPayment from "./page/CheckoutPayment/CheckoutPayment"
import CheckoutThanks from "./page/CheckoutThanks/CheckoutThanks"
import CheckoutCart from "./page/CheckoutCart/CheckoutCart"
import Wishlist from "./page/Wishlist/Wishlist"
import CategoryPage from "./page/CategoryPage/CategoryPage"
import SearchPage from "./page/SearchPage/SearchPage"
import NotFound from "./page/NotFound/NotFound"
import Login from "./page/Login/Login"
import Profile from "./page/Profile/Profile"
import Orders from "./page/Orders/Orders"
import OrderDetail from "./page/OrderDetail/OrderDetail"
import Faqs from "./page/Faqs/Faqs"
import ContactUs from "./page/ContactUs/ContactUs"
import OurStory from "./page/OurStory/OurStory"
import PrivacyPolicy from "./page/PrivacyPolicy/PrivacyPolicy"
import Terms from "./page/Terms/Terms"
import ReturnPolicy from "./page/ReturnPolicy/ReturnPolicy"
import CookiesPolicy from "./page/CookiesPolicy/CookiesPolicy"
import InternationalShipping from "./page/InternationalShipping/InternationalShipping"
import ForgotPassword from "./page/ForgotPassword/ForgotPassword"
import ResetPassword from "./page/ResetPassword/ResetPassword"
import Invoice from "./page/Invoice/Invoice"
import ExclusiveProducts from "./page/ExclusiveProducts/ExclusiveProducts"

// others
import theme from './theme'
import Footer from "./component/Footer/Footer";
import { Space } from "antd";
import { MainBox } from "./AppStyle";



const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route path={[
                            "/",
                            "/category",
                            "/sub-category",
                            "/exclusive",
                            "/wishlist",
                            "/shop/:category",
                            "/search/:query",
                            "/p/:url_key",
                            "/checkout/cart",
                            "/profile",
                            "/orders",
                            "/order/:id",
                            "/invoice/:id",

                            "/faqs",
                            "/contact",
                            "/our-story",
                            "/privacy-policy",
                            "/terms",
                            "/return-policy",
                            "/cookies-policy",
                            "/international-shipping",
                            "/forgot-password",
                            "/reset-password/:customer_id",

                        ]} exact >
                            <TopBar />
                            <Header />
                            {/* <AnimatedSwitch
                                atEnter={{ opacity: 0 }}
                                atLeave={{ opacity: 0 }}
                                atActive={{ opacity: 1 }}
                                className="switch-wrapper"
                            > */}
                            <MainBox>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/shop/:category" component={CategoryPage} />
                                <Route exact path="/search/:query" component={SearchPage} />
                                <Route exact path="/category" component={CategoryProductList} />
                                <Route exact path="/sub-category" component={SubCategoryProductList} />
                                <Route exact path="/exclusive" component={ExclusiveProducts} />
                                <Route exact path="/wishlist" component={Wishlist} />
                                <Route exact path="/p/:url_key" component={ProductDetail} />
                                <Route exact path="/checkout/cart" component={CheckoutCart} />
                                <Route exact path="/profile" component={Profile} />
                                <Route exact path="/orders" component={Orders} />
                                <Route exact path="/order/:id" component={OrderDetail} />
                                <Route exact path="/invoice/:id" component={Invoice} />

                                <Route exact path="/faqs" component={Faqs} />
                                <Route exact path="/contact" component={ContactUs} />
                                <Route exact path="/our-story" component={OurStory} />
                                <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                                <Route exact path="/terms" component={Terms} />
                                <Route exact path="/return-policy" component={ReturnPolicy} />
                                <Route exact path="/cookies-policy" component={CookiesPolicy} />
                                <Route exact path="/international-shipping" component={InternationalShipping} />
                                <Route exact path="/forgot-password" component={ForgotPassword} />
                                <Route exact path="/reset-password/:customer_id" component={ResetPassword} />
                            
                           
                            </MainBox>
                            <Footer />
                        </Route>

                        <Route path={[
                            "/checkout/billing",
                            "/checkout/shipping",
                            "/checkout/payment",
                            "/checkout/login",
                            "/checkout/thanks",
                        ]} >
                            <CheckoutHeader />
                            <MainBox>
                                <Route exact path="/checkout/login" component={Login} />
                                <Route exact path="/checkout/billing" component={BillingAddress} />
                                <Route exact path="/checkout/shipping" component={ShippingAddress} />
                                <Route exact path="/checkout/payment" component={CheckoutPayment} />
                                <Route exact path="/checkout/thanks" component={CheckoutThanks} />
                            </MainBox>
                            <Footer />
                        </Route>

                        <Route path="*" component={NotFound} status={404} />
                    </Switch>
                </Router>
                <CookieConsent buttonStyle={{"background-color":"#ff3f6c", "color":"#FFFFFF"}}>This website uses cookies to enhance the user experience.</CookieConsent>
            </ThemeProvider>
        </Provider>
    )
}

export default App