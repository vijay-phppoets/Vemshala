import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
// custom component
import Footer from "../../component/Footer/Footer"
import { MainLeftBox, MainRightBox } from "./OurStoryStyle"
// action   
const OurStory = props => {
    // variables & states
    const {

    } = props
    // functions 
    return (
        <>
            <div style={{paddingBottom: "40px"}}>
                <div style={{ textAlign: "center", paddingTop: 16 }} >
                    <h1 style={{ fontSize: 24, fontWeight: "bold" }} >OUR STORY</h1>
                </div>

                <center>
                    <MainLeftBox>
                        <div style={{ width: "80%" }}>
                            <img src='/vemshala-logo.webp' width="100%" style={{ marginLeft: "5%", marginTop: "30px" }} alt='' />
                        </div>
                    </MainLeftBox>
                    <MainRightBox>
                        <h3 style={{ fontSize: 24, fontWeight: "bold" }}>Vemshala</h3>
                        <p style={{ textAlign: "left", fontSize: 16, }}>Vemshala comes from two Sanskrit words “vem” meaning “loom” and “shala” meaning “house”. Vemshala thus translates to “ house of the loom” and that is what we proudly stand for. All things handcrafted with love in a slow-life mode that allows the maker to enjoy his/her work as much as the end customer does. And isn’t that how everything in life should be!</p>
                        <br />
                        <p style={{ textAlign: "left", fontSize: 16, }}>Started by two industry professionals with decades of experience in managing leadership roles across corporates, it’s truly an endeavour to bring the best of handcrafted products to all. We truly believe in the our rich cultural heritage and the skills that have been passed from generation to generation. These age old crafts and skills reinstate the wisdom of our ancestors who inherently followed sustainable and natural methods for all processes.</p>
                        <p style={{ textAlign: "left", fontSize: 16, }}>We consciously source directly from the artisans to be authentic and more inclusive. Let’s celebrate our rich cultural heritage each day and make everyday better for our artisans too!</p>

                    </MainRightBox>

                </center>

            </div>

            {/* */}
        </>
    )
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(OurStory)
