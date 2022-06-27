import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'

// sagas
import getCategoryDetailsSaga from './saga/getCategoryDetailsSaga'
import getProductListSaga from './saga/getProductListSaga'
import getCategoryTreeSaga from './saga/getCategoryTreeSaga'
import getHomePageDataSaga from './saga/getHomePageDataSaga'
import getAttributeListSaga from './saga/getAttributeListSaga'
import getProductDetailSaga from './saga/getProductDetailSaga'
import updateCartSaga from './saga/updateCartSaga'
import getCartCountSaga from './saga/getCartCountSaga'
import getCartSaga from './saga/getCartSaga'
import createCustomerSaga from './saga/createCustomerSaga'
import loginSaga from './saga/loginSaga'
import saveCartAddressSaga from './saga/saveCartAddressSaga'
import getCountryListSaga from './saga/getCountryListSaga'
import getStateListSaga from './saga/getStateListSaga'
import placeCodOrderSaga from './saga/placeCodOrderSaga'
import getCustomerDetailSaga from './saga/getCustomerDetailSaga'
import getOrderListSaga from './saga/getOrderListSaga'
import getOrderDetailSaga from './saga/getOrderDetailSaga'
import saveWishlistSaga from './saga/saveWishlistSaga'
import getWishlistSaga from './saga/getWishlistSaga'
import wishlistRemoveSaga from './saga/wishlistRemoveSaga'
import checkCouponSaga from './saga/checkCouponSaga'
import saveContactSaga from './saga/saveContactSaga'
import removeCouponSaga from './saga/removeCouponSaga'
import getOfferSaga from './saga/getOfferSaga'
import sendOtpSaga from './saga/sendOtpSaga'
import resetPasswordSaga from './saga/resetPasswordSaga'
import getInvoiceSaga from './saga/getInvoiceSaga'
import getExclusiveProductsSaga from './saga/getExclusiveProductsSaga'
import getCustomerAddressSaga from './saga/getCustomerAddressSaga'
import addCustomerAddressSaga from './saga/addCustomerAddressSaga'
import deleteCustomerAddressSaga from './saga/deleteCustomerAddressSaga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
)

// then run the saga
sagaMiddleware.run(getCategoryDetailsSaga)
sagaMiddleware.run(getProductListSaga)
sagaMiddleware.run(getCategoryTreeSaga)
sagaMiddleware.run(getHomePageDataSaga)
sagaMiddleware.run(getAttributeListSaga)
sagaMiddleware.run(getProductDetailSaga)
sagaMiddleware.run(updateCartSaga)
sagaMiddleware.run(getCartCountSaga)
sagaMiddleware.run(getCartSaga)
sagaMiddleware.run(createCustomerSaga)
sagaMiddleware.run(loginSaga)
sagaMiddleware.run(saveCartAddressSaga)
sagaMiddleware.run(getCountryListSaga)
sagaMiddleware.run(getStateListSaga)
sagaMiddleware.run(placeCodOrderSaga)
sagaMiddleware.run(getCustomerDetailSaga)
sagaMiddleware.run(getOrderListSaga)
sagaMiddleware.run(getOrderDetailSaga)
sagaMiddleware.run(saveWishlistSaga)
sagaMiddleware.run(getWishlistSaga)
sagaMiddleware.run(wishlistRemoveSaga)
sagaMiddleware.run(checkCouponSaga)
sagaMiddleware.run(saveContactSaga)
sagaMiddleware.run(removeCouponSaga)
sagaMiddleware.run(getOfferSaga)
sagaMiddleware.run(sendOtpSaga)
sagaMiddleware.run(resetPasswordSaga)
sagaMiddleware.run(getInvoiceSaga)
sagaMiddleware.run(getExclusiveProductsSaga)
sagaMiddleware.run(getCustomerAddressSaga)
sagaMiddleware.run(addCustomerAddressSaga)
sagaMiddleware.run(deleteCustomerAddressSaga)

// render the application

export default store