import { combineReducers } from 'redux'

import getCategoryDetails from './reducer/getCategoryDetailsReducer'
import getProductList from './reducer/getProductListReducer'
import getCategoryTree from './reducer/getCategoryTreeReducer'
import getHomePageData from './reducer/getHomePageDataReducer'
import getAttributeList from './reducer/getAttributeListReducer'
import getProductDetail from './reducer/getProductDetailReducer'
import updateCart from './reducer/updateCartReducer'
import getCartCount from './reducer/getCartCountReducer'
import getCart from './reducer/getCartReducer'
import general from './reducer/generalReducer'
import createCustomer from './reducer/createCustomerReducer'
import login from './reducer/loginReducer'
import saveCartAddress from './reducer/saveCartAddressReducer'
import getCountryList from './reducer/getCountryListReducer'
import getStateList from './reducer/getStateListReducer'
import placeCodOrder from './reducer/placeCodOrderReducer'
import getCustomerDetail from './reducer/getCustomerDetailReducer'
import getOrderList from './reducer/getOrderListReducer'
import getOrderDetail from './reducer/getOrderDetailReducer'
import saveWishlist from './reducer/saveWishlistReducer'
import getWishlist from './reducer/getWishlistReducer'
import wishlistRemove from './reducer/wishlistRemoveReducer'
import checkCoupon from './reducer/checkCouponReducer'
import saveContact from './reducer/saveContactReducer'
import removeCoupon from './reducer/removeCouponReducer'
import getOffer from './reducer/getOfferReducer'
import sendOtp from './reducer/sendOtpReducer'
import resetPassword from './reducer/resetPasswordReducer'
import getInvoice from './reducer/getInvoiceReducer'
import getExclusiveProducts from './reducer/getExclusiveProductsReducer'
import getCustomerAddress from './reducer/getCustomerAddressReducer'
import addCustomerAddress from './reducer/addCustomerAddressReducer'
import deleteCustomerAddress from './reducer/deleteCustomerAddressReducer'

export default combineReducers({
    getCategoryDetails,
    getProductList,
    getCategoryTree,
    getHomePageData,
    getAttributeList,
    getProductDetail,
    updateCart,
    getCartCount,
    getCart,
    general,
    createCustomer,
    login,
    saveCartAddress,
    getCountryList,
    getStateList,
    placeCodOrder,
    getCustomerDetail,
    getOrderList,
    getOrderDetail,
    saveWishlist,
    getWishlist,
    wishlistRemove,
    checkCoupon,
    saveContact,
    removeCoupon,
    getOffer,
    sendOtp,
    resetPassword,
    getInvoice,
    getExclusiveProducts,
    getCustomerAddress,
    addCustomerAddress,
    deleteCustomerAddress,
})