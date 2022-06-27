import React, { useEffect, useState } from "react"
import { Link, Redirect, useLocation } from "react-router-dom"
import { connect } from "react-redux"

/* CUSTOM COMPONENT */
import SignupModal from "../../component/SignupModal/SignupModal"

/* actions */
import { setUserLoggedIn } from "../../action/generalAction"

/* other */
import { getToken } from '../../utils'

const CheckoutHeader = props => {
    /* variable & state */
    const { setUserLoggedIn, generalState } = props
    const [redirect, setRedirect] = useState([false, ''])
    const location = useLocation();

    /* callback */
    useEffect(() => {
        console.log("hello", location.pathname);
        if (getToken() && location.pathname.includes("/checkout/login")) {
            setUserLoggedIn()
        }
    }, [])

    useEffect(() => {
        if (generalState.isUserLoginIn) {
            setRedirect([true, '/checkout/billing'])
        }
    }, [generalState.isUserLoginIn])

    return (
        <>
            {redirect[0] &&
                <Redirect to={redirect[1]} />}
            <div style={{
                height: 70,
                boxShadow: "rgb(204 204 204 / 40%) 0px 8px 6px -6px",
                zIndex: 100,
                background: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }} >

                <div style={{ width: 1200, display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <Link to="/">
                        <img src="/vemshala-logo.webp" alt="" style={{ height: 60, width: "auto" }} />
                    </Link>
                </div>
            </div>
            <SignupModal />
        </>
    )
}

const mapStateToProps = (state) => ({
    generalState: state.general,
})
const mapDispatchToProps = (dispatch) => ({
    setUserLoggedIn: () => dispatch(setUserLoggedIn()),
})
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutHeader)