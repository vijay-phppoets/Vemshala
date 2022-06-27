import React from "react"
import { Carousel, Avatar, Space } from 'antd';
import { Link } from "react-router-dom"
import { UserOutlined, FacebookFilled, InstagramFilled, TwitterSquareFilled, WhatsAppOutlined } from "@ant-design/icons"
import { connect } from "react-redux"

import { GlobleBox, Wrapper } from "../Xcomponent"
import {
    Container, CategoryWrapper, CategoryBox, CategoryImgBox, CategoryImgTitle,
    NewArrivalsWrapper, NewArrivalsBox, FooterWrapper, FooterBox, FooterTitle,
    FooterLink
} from "./FooterStyle"
import { add } from "lodash";

const Footer = props => {
    // variables
    const {
        getCategoryTreeState,
    } = props
    const handleSocial = (url) => {
        window.open(url, '_blank').focus();
    }
    return (
        <GlobleBox style={{ background: "#172337" }} >
            <Wrapper>
                <FooterWrapper style={{ padding: "30px 4px" }} >
                    <FooterBox>
                        <FooterTitle>  <img src="/vemshala-logo.webp" alt="" style={{ height: 60, width: "auto" , padding: 4 }} />VEMASTORE</FooterTitle>
                        <div style={{ display: "flex", flexDirection: "column", lineHeight: "35px" }} >
                            <FooterLink to={`/our-story`}>Our Story</FooterLink>
                            <FooterLink to={`/contact`} >Contact Us</FooterLink>
                        </div>
                    </FooterBox>
                    <FooterBox>
                        <FooterTitle>Categories</FooterTitle>
                        <div style={{ display: "flex", flexDirection: "column", lineHeight: "35px" }} >
                            {getCategoryTreeState.tree.map(cat => (
                                <FooterLink to={`/shop/${cat.url_key}`} >{cat.name}</FooterLink>
                            ))}
                        </div>
                    </FooterBox>

                    <FooterBox>
                        <FooterTitle>IMPORTANT LINKS</FooterTitle>
                        <div style={{ display: "flex", flexDirection: "column", lineHeight: "35px" }} >
                            <FooterLink to={`/faqs`} >FAQ’s</FooterLink>

                            <FooterLink to={`/international-shipping`}>{"International Shipping"}</FooterLink>
                            <FooterLink to={`/return-policy`}>{"Return Policy"}</FooterLink>
                            <FooterLink to={`/cookies-policy`}>{"Cookies Policy"}</FooterLink>
                            <FooterLink to={`/privacy-policy`}>Privacy Policy</FooterLink>
                            <FooterLink to={`/terms`}>{"Terms of Use"}</FooterLink>
                        </div>
                    </FooterBox>
                    <FooterBox>
                        <FooterTitle>CONTACT US</FooterTitle>
                        <p style={{ color: "#fff" }}><WhatsAppOutlined style={{ fontSize: 16, color: "#52c41a",  padding:4 }}  />Whatsapp Number<br />+91 987-3456-496</p>
                        <p style={{ color: "#fff" }}>Timings: 9 am to 9 pm IST (all days)</p>
                        <Space size="large" direction="horizontal" >
                            <Link onClick={() => handleSocial("https://m.facebook.com/vemshaladotcom")}><FacebookFilled style={{ fontSize: 24, color: "#fff" }} /></Link>
                            <Link onClick={() => handleSocial("https://instagram.com/vem.shala?utm_medium=copy_link")}><InstagramFilled style={{ fontSize: 24, color: "#fff" }} /></Link>
                            {/* <Link onClick={() => handleSocial("https://www.twitter.com")}><TwitterSquareFilled style={{ fontSize: 24, color: "#fff" }} /></Link> */}
                        </Space>
                    </FooterBox>
                </FooterWrapper>
                <div style={{ padding: "10px 2px", textAlign: "center", color: "#fff" }} >
                    ©2021 Piky - all rights reserved
                </div>
            </Wrapper>
        </GlobleBox>
    )
}

const mapStateToProps = (state) => ({
    getCategoryTreeState: state.getCategoryTree,
})
export default connect(mapStateToProps, null)(Footer)