import React, { useEffect, useState } from "react"
import { Button, Drawer, Collapse, Menu, Dropdown, Input, Form, Divider, Space, message } from "antd"
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { useMediaQuery } from 'react-responsive'
import {
    HomeOutlined, ShoppingCartOutlined, HeartOutlined,
    DownOutlined, UserOutlined, PhoneOutlined, SearchOutlined, CloseOutlined,
    UnorderedListOutlined, LogoutOutlined
} from "@ant-design/icons"



/* custom component */
import { MenuIcon, SearchIcon } from "../CustomIcons"
import {
    HideInMobile, SubContainer, HideInTablet, CartDrawer,
    CartCount, MenuDrawer, HideInLaptopS, CatBtn, SearchHeader,
    SearchDiv, SearchBar, AccountUl, AccountLi
} from './HeaderStyle'
import CartItem from "../CartItem/CartItem"
import { BlackBtn } from "../../component/Xcomponent"
import SignupModal from "../../component/SignupModal/SignupModal"
import AccountDrawer from "../AccountDrawer/AccountDrawer"


/* actions */
import { updateCart, updateCartReset } from "../../action/updateCartAction"
import { getCategoryTree, getCategoryTreeReset } from "../../action/getCategoryTreeAction"
import { getCartCount, getCartCountReset } from "../../action/getCartCountAction"
import { getCart, getCartReset } from "../../action/getCartAction"
import { toggleSignupModal, setUserLoggedIn } from "../../action/generalAction"

/* others */
import cnf from "../../config"
import { getCartId, getToken, getCurrency, setCurrency, setCartId } from "../../utils"
const { Panel } = Collapse;
const { Search } = Input;

const Header = props => {
    // varibales
    const {
        getCategoryTree, getCategoryTreeReset, getCategoryTreeState,
        getCartCount, getCartCountReset, getCartCountState,
        getCart, getCartReset, getCartState,
        toggleSignupModal, setUserLoggedIn, generalState,
        createCustomerState,
        updateCart, updateCartReset, updateCartState,
    } = props
    const [menuVisible, setMenuVisible] = useState(false)
    const [accountVisible, setAccountVisible] = useState(false)
    const [searchVisible, setSearchVisible] = useState(false)
    const [cartVisible, setCartVisible] = useState(false)
    const isMobile = useMediaQuery({ query: '(max-width: 800px)' })
    const menu = (
        <Menu>
            <Menu.Item key="INR" style={{ display: "flex", alignItems: "center" }} onClick={() => handelCurrencyChange("INR")} >
                <img src="/india-flag.png" alt="" style={{ width: 16, marginRight: 4 }} />
                <span>INR</span>
            </Menu.Item>
            <Menu.Item key="USD" style={{ display: "flex", alignItems: "center" }} onClick={() => handelCurrencyChange("USD")} >
                <img src="/earth.jpeg" alt="" style={{ width: 16, marginRight: 4 }} />
                <span>USD</span>
            </Menu.Item>
        </Menu>
    );
    const [redirect, setRedirect] = useState([false, ""])
    const rootCatKeys = ['WOMEN', 'MEN', 'JEWELRY', 'MAKE-UP'];
    const [catOpenKeys, setCatOpenKeys] = React.useState([]);
    const [searchQuery, setSearchQuery] = useState('')
    const MenuJsx = (props) => {
        let finalJsx = []
        props.menuList.map(item => {
            if (item.children.length > 0) {
                finalJsx.push(
                    <MenuJsx menuList={item.children} subMenuTitle={item.name} />
                )
            } else {
                finalJsx.push(
                    <Menu.Item key={item.url_key}>
                        <Link to={`/shop/${item.url_key}`} onClick={() => setMenuVisible(false)} >
                            <span className='menuName'>{item.name}</span>
                        </Link>
                    </Menu.Item>
                )
            }
        })


        return (
            <Menu.SubMenu
                key={props.subMenuTitle}
                title={props.subMenuTitle}
                {...props}
            >{finalJsx}</Menu.SubMenu>
        )
    }

    /* callbacks */
    useEffect(() => {
        let currency = getCurrency();
        currency = !currency ? "INR" : currency;
        setCurrency(currency)
        getCategoryTree()
        getCartCount({
            cart_id: getCartId()
        })
        getCart({
            cart_id: getCartId(),
            currencyType: currency
        })

        if (getToken()) {
            setUserLoggedIn()
        }
    }, [])

    useEffect(() => {
        if (updateCartState.apiState === "error") {
            message.error("Something went wrong. Please try later");
        }
        if (updateCartState.apiState === "success") {
            setCartId(updateCartState.cart_id)
            getCartCount({
                cart_id: updateCartState.cart_id
            })
            getCart({
                cart_id: updateCartState.cart_id,
                currencyType: getCurrency()
            })
            message.success(updateCartState.message);
        }
    }, [updateCartState])


    const handelCurrencyChange = (selectedCurrency) => {
        setCurrency(selectedCurrency)
        window.location.reload()
    }


    const handleCategoryClick = (v) => {
        setMenuVisible(false)
        setRedirect([true, "/category"])
    }

    const onCatOpenChange = keys => {
        console.log(keys);
        const latestOpenKey = keys.find(key => catOpenKeys.indexOf(key) === -1);
        if (rootCatKeys.indexOf(latestOpenKey) === -1) {
            setCatOpenKeys(keys);
        } else {
            setCatOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    }

    const handleSubCatClick = () => {
        let containers = document.getElementsByClassName("mega-menu-container")
        for (var i = 0; i < containers.length; i++) {
            containers[i].style.display = "none";
        }
    }

    const handleSubCatMouseOut = () => {
        let containers = document.getElementsByClassName("mega-menu-container")
        for (var i = 0; i < containers.length; i++) {
            containers[i].style.display = "";
        }
    }



    /* ON PAGE COMPONENTS */
    const MegaMenu = ({ subCats }) => {
        return (
            <div className="mega-menu-container" >
                <div style={{ display: "flex", flexFlow: "wrap" }} >
                    {subCats.map(cat => (
                        <Link
                            to={`/shop/${cat.url_key}`}
                            style={{ width: "25%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 20 }}
                            onClick={handleSubCatClick}
                            onMouseOut={handleSubCatMouseOut}
                        >
                            <img src={`${cnf.s3_base_url}${cat.image}`} style={{ width: "100%", height: "auto" }} />
                            <p style={{ fontWeight: "800", marginTop: 8, color: "#000", textTransform: "uppercase" }} >{cat.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }

    const handleSearch = () => {
        setRedirect([true, `/search/${searchQuery}`])
    }



    return (
        <>
            {redirect[0] &&
                <Redirect to={redirect[1]} />
            }
            <div style={{
                height: 70,
                display: "flex",
                justifyContent: "center",
                boxShadow: "rgb(204 204 204 / 40%) 0px 8px 6px -6px",
                position: "sticky",
                top: 0,
                zIndex: 100,
                background: "#fff",
                backdropFilter: "saturate(100%) blur(25px)",
                backgroundColor: "rgba(255, 255, 255, 0.9)"
            }} >
                <SubContainer>
                    {!searchVisible &&
                        <>
                            <div style={{
                                flex: 0.4,
                                display: "flex",
                                alignItems: "center",
                            }} >
                                <Button type="text" onClick={() => setMenuVisible(true)} >
                                    <MenuIcon />
                                </Button>
                                <HideInMobile>
                                    <Link to="/">
                                        <Button type="text">
                                            <HomeOutlined style={{ fontSize: 20 }} />
                                        </Button>
                                    </Link>
                                </HideInMobile>
                                <Button type="text" onClick={() => setSearchVisible(true)} >
                                    <SearchIcon />
                                </Button>
                            </div>
                            <div style={{
                                flex: 0.2,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }} >
                                {getCategoryTreeState.tree[0] &&
                                    <HideInLaptopS>
                                        <Link to={`/shop/${getCategoryTreeState.tree[0].url_key}`}
                                            onClick={handleSubCatClick}
                                            onMouseOut={handleSubCatMouseOut}
                                        >
                                            <CatBtn type="text" >{getCategoryTreeState.tree[0].name}</CatBtn>
                                        </Link>
                                        {getCategoryTreeState.tree[0].children.length > 0 &&
                                            <MegaMenu subCats={getCategoryTreeState.tree[0].children} />
                                        }
                                    </HideInLaptopS>
                                }
                                {getCategoryTreeState.tree[1] &&
                                    <HideInLaptopS>
                                        <Link to={`/shop/${getCategoryTreeState.tree[1].url_key}`}
                                            onClick={handleSubCatClick}
                                            onMouseOut={handleSubCatMouseOut}
                                        >
                                            <CatBtn type="text" >{getCategoryTreeState.tree[1].name}</CatBtn>
                                        </Link>
                                        {getCategoryTreeState.tree[1].children.length > 0 &&
                                            <MegaMenu subCats={getCategoryTreeState.tree[1].children} />
                                        }
                                    </HideInLaptopS>
                                }
                                <Link to="/" style={{ margin: "0 24px" }} >
                                    <img src="/vemshala-logo.webp" alt="" style={{ height: 60, width: "auto" }} />
                                </Link>
                                {getCategoryTreeState.tree[2] &&
                                    <HideInLaptopS>
                                        <Link to={`/shop/${getCategoryTreeState.tree[2].url_key}`}
                                            onClick={handleSubCatClick}
                                            onMouseOut={handleSubCatMouseOut}
                                        >
                                            <CatBtn type="text" >{getCategoryTreeState.tree[2].name}</CatBtn>
                                        </Link>
                                        {getCategoryTreeState.tree[2].children.length > 0 &&
                                            <MegaMenu subCats={getCategoryTreeState.tree[2].children} />
                                        }
                                    </HideInLaptopS>
                                }
                                {getCategoryTreeState.tree[3] &&
                                    <HideInLaptopS>
                                        <Link to={`/shop/${getCategoryTreeState.tree[3].url_key}`}
                                            onClick={handleSubCatClick}
                                            onMouseOut={handleSubCatMouseOut}
                                        >
                                            <CatBtn type="text" >{getCategoryTreeState.tree[3].name}</CatBtn>
                                        </Link>
                                        {getCategoryTreeState.tree[3].children.length > 0 &&
                                            <MegaMenu subCats={getCategoryTreeState.tree[3].children} />
                                        }
                                    </HideInLaptopS>
                                }
                            </div>
                            <div style={{
                                flex: 0.4,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end"
                            }} >
                                <HideInMobile>
                                    {generalState.isUserLoginIn
                                        ? <Link to='/profile'><Button type="text" >Account</Button></Link>
                                        : <Button type="text" onClick={() => setAccountVisible(true)} >Login</Button>
                                    }

                                </HideInMobile>
                                <Dropdown overlay={menu} trigger="click" >
                                    <Button type="text">
                                        {
                                            getCurrency() === "USD" ?
                                                <>
                                                    <img src="/earth.jpeg" alt="" style={{ width: 16, marginRight: 4 }} />
                                                    <span>USD</span>
                                                </>
                                                :
                                                <>
                                                    <img src="/india-flag.png" alt="" style={{ height: 16, marginRight: 4 }} />
                                                    <span>INR</span>
                                                </>
                                        }


                                        <DownOutlined />
                                    </Button>
                                </Dropdown>
                                <HideInMobile>
                                    {generalState.isUserLoginIn
                                        ? <Link to="/wishlist">
                                            <Button type="text">
                                                <HeartOutlined style={{ fontSize: 22 }} />
                                            </Button>
                                        </Link>
                                        : <Button type="text" onClick={() => setAccountVisible(true)} ><HeartOutlined style={{ fontSize: 22 }} /></Button>
                                    }
                                </HideInMobile>

                                <Button type="text" onClick={() => setCartVisible(true)} >
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center"
                                    }} >
                                        <ShoppingCartOutlined style={{ fontSize: 22 }} />
                                        <CartCount>{!getCartCountState.count ? null : getCartCountState.count}</CartCount>
                                    </div>
                                </Button>
                            </div>
                        </>
                    }

                    {searchVisible &&
                        <SearchHeader>
                            <Link to="/" style={{ margin: "0 24px" }}
                                onClick={() => setSearchVisible(false)}
                                className="searchLogo"
                            >
                                <img src="/vemshala-logo.webp" alt="" style={{ height: 60, width: "auto" }} />
                            </Link>
                            <Button type="text" icon={<CloseOutlined style={{ fontSize: 20 }} />}
                                onClick={() => setSearchVisible(false)}
                                className="backSearchBtn"
                                style={{ marginRight: 8 }}
                            />
                            <SearchDiv>
                                <SearchBar
                                    placeholder="Search Products"
                                    enterButton={null}
                                    size="middle"
                                    prefix={<SearchOutlined style={{ fontSize: 20, }} />}
                                    suffix={<Button type="primary" shape="round"
                                        onClick={handleSearch}
                                    >SEARCH</Button>}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    value={searchQuery}
                                />
                            </SearchDiv>
                            <Button type="text" icon={<CloseOutlined style={{ fontSize: 20 }} />}
                                onClick={() => {
                                    setSearchVisible(false)
                                    setSearchQuery('')
                                }}
                                className="closeSearchBtn"
                            />
                        </SearchHeader>
                    }
                </SubContainer>
            </div>


            <MenuDrawer
                title="MENU"
                placement="left"
                visible={menuVisible}
                onClose={() => setMenuVisible(false)}
                width={isMobile ? "90%" : "400px"}
                footer={<div style={{ background: "#f5f5f5" }} >
                    <Menu style={{ background: "transparent" }} >
                        {
                            generalState.isUserLoginIn ?
                                <Menu.Item onClick={() => {
                                    setMenuVisible(false)
                                }} >
                                    <Link to="/profile">
                                        <UserOutlined />Account
                                    </Link>
                                </Menu.Item>
                                :
                                <Menu.Item onClick={() => {
                                    setMenuVisible(false)
                                    setAccountVisible(true)
                                }} >
                                    <UserOutlined />Login
                                </Menu.Item>
                        }

                        <Menu.Item onClick={() => {
                            setMenuVisible(false)
                        }}  >
                            <Link to="/contact"><PhoneOutlined /> Contact Us </Link>
                        </Menu.Item>
                    </Menu>
                </div>}
            >
                {getCategoryTreeState.apiState === "success" &&
                    <Menu
                        mode="inline"
                    >
                        {
                            getCategoryTreeState.tree.map(item => {
                                if (item.children.length > 0) {
                                    return <MenuJsx menuList={item.children} subMenuTitle={item.name} />
                                } else {
                                    return (
                                        <Menu.Item key={item.url_key} >
                                            <Link to={`/shop/${item.url_key}`} onClick={() => setMenuVisible(false)} > {item.name}</Link>
                                        </Menu.Item>
                                    )
                                }
                            })
                        }
                    </Menu>
                }
            </MenuDrawer>


            <AccountDrawer
                accountVisible={accountVisible}
                onClose={() => setAccountVisible(false)}
            />


            <CartDrawer
                title="CART"
                placement="right"
                closable={true}
                onClose={() => setCartVisible(false)}
                visible={cartVisible}
                footer={
                    <>
                        <Link to="/checkout/cart" onClick={() => setCartVisible(false)}>
                            <Button size="large" block style={{ marginBottom: 8 }} >VIEW CART</Button>
                        </Link>
                        <Link to="/checkout/login" onClick={() => setCartVisible(false)}>
                            <Button type="primary" size="large" block style={{ marginBottom: 20 }} >CHECKOUT</Button>
                        </Link>
                    </>
                }
            >

                {getCartState.cart && getCartState.cart.items && getCartState.cart.items.length > 0 ?
                    <>
                        {getCartState.cart.items.map(item => (
                            <>
                                <CartItem item={item} currencyType={getCurrency()} />
                                <div style={{
                                    borderBottom: "solid 1px #f5f5f5",
                                    margin: "16px 0"
                                }} />
                            </>
                        ))}
                    </>
                    : <div style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} >No product added to the cart.</div>
                }


                {getCartState.apiState === "error" &&
                    <div style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} >No product added to the cart.</div>
                }
            </CartDrawer>

            <SignupModal />
        </>
    )
}

const mapStateToProps = (state) => ({
    getCategoryTreeState: state.getCategoryTree,
    getCartCountState: state.getCartCount,
    getCartState: state.getCart,
    createCustomerState: state.createCustomer,
    updateCartState: state.updateCart,
    generalState: state.general,
})
const mapDispatchToProps = (dispatch) => ({
    getCategoryTree: (params) => dispatch(getCategoryTree(params)),
    getCategoryTreeReset: () => dispatch(getCategoryTreeReset()),
    getCartCount: (params) => dispatch(getCartCount(params)),
    getCartCountReset: () => dispatch(getCartCountReset()),
    getCart: (params) => dispatch(getCart(params)),
    updateCart: (params) => dispatch(updateCart(params)),
    updateCartReset: () => dispatch(updateCartReset()),
    getCartReset: () => dispatch(getCartReset()),
    toggleSignupModal: () => dispatch(toggleSignupModal()),
    setUserLoggedIn: () => dispatch(setUserLoggedIn()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)