import React, { useState } from 'react'
import { Menu, message } from 'antd';
import {
    HeartOutlined, UserOutlined,
    UnorderedListOutlined, LogoutOutlined
} from "@ant-design/icons"
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"

/* actions */
import { setUserLoggedOut, setCustomerData } from '../../action/generalAction'

/* others */
import { removeToken, removeCustomer } from '../../utils'

const ProfileMenu = props => {

    // variables & state
    const { setUserLoggedOut } = props
    const [redirect, setRedirect] = useState([false, 0])


    // function
    const handleLogout = () => {
        message.success("You are logged out successfully.");
        removeToken()
        setUserLoggedOut()
        removeCustomer()
        setCustomerData({
            customer: null
        })
        setRedirect([true, '/'])
    }

    return (
        <>
            {redirect[0] &&
                <Redirect to={redirect[1]} />}
            <Menu
                style={{ width: '100%' }}
                mode="inline"
            >
                <Menu.Item key='Profile' >
                    <Link to='/profile'>
                        <UserOutlined /> Address
                    </Link>
                </Menu.Item>
                <Menu.Item key='Orders' >
                    <Link to='/orders'>
                        <UnorderedListOutlined /> Orders
                    </Link>
                </Menu.Item>
                <Menu.Item key='OrdWishlisters' >
                    <Link to='/wishlist'>
                        <HeartOutlined /> Wishlist
                    </Link>
                </Menu.Item>
                <Menu.Item key='Logout' onClick={handleLogout}>
                    <LogoutOutlined /> Logout
                </Menu.Item>
            </Menu>
        </>
    )
}

const mapStateToProps = (state) => ({
    generalState: state.general,
    loginState: state.login,
})
const mapDispatchToProps = (dispatch) => ({
    setUserLoggedOut: () => dispatch(setUserLoggedOut()),
    setCustomerData: (params) => dispatch(setCustomerData(params)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu)