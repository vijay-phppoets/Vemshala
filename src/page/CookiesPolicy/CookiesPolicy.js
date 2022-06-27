import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Collapse } from 'antd';
// custom component
import Footer from "../../component/Footer/Footer"
import { MainBox } from "./CookiesPolicyStyle"
// action   
const CookiesPolicy = props => {
    // variables & states
    const { Panel } = Collapse;
    const {

    } = props
    // functions 
    return (
        <>
            <div>
                <div style={{ textAlign: "center", paddingTop: 16 }} >
                    <h1 style={{ fontSize: 24, fontWeight: "bold" }} >Cookies Policy</h1>
                </div>
                <MainBox>
                    <p>We use cookies at&nbsp;<strong>VEMSHALA</strong>&nbsp;to improve our service for you. Some cookies we use are essential for some services to work, others are used to collect information of the use of the website (statistics) so that we can make the site more convenient and useful for you. Some cookies are temporary and will disappear when you close your browser, others are persistent and will stay on your computer for some time. We are also using some local cookies that are tied to local campaigns and which will disappear when the campaign ends.Some of the cookies are strictly necessary for the functionality of the site while others are used to enhance the performance and your user experience.</p>

                    <h4><strong>Functional cookies are used to:</strong></h4>

                    <ul>
                        <li>Remember your log-in details, if applicable or registered.</li>
                        <li>Make sure you are secure when logged-in</li>
                        <li>Make sure that the web site looks consistent</li>
                        <li>Offer live chat support</li>
                    </ul>

                    <h4><strong>Performance cookies are used to:</strong></h4>

                    <ul>
                        <li>Enhance the performance of the web site</li>
                        <li>Enhance the user experience</li>
                    </ul>

                    <h4><strong>Targeting cookies are used to:</strong></h4>

                    <ul>
                        <li>Allow you to share and like</li>
                        <li>Send information to other websites to customize their needs.</li>
                    </ul>

                    <p>We respect your decision and you will also appreciate that these Policy keeps modifying depending upon the changes in the legal legislations as applicable.</p>

                    <h4><strong>Examples of use:</strong></h4>

                    <p>The cookies are used to improve services for you through, for example:</p>

                    <ul>
                        <li>Enabling a service to recognize your device so you don&rsquo;t have to give the same information several times during one task</li>
                        <li>Recognizing that you may already have given a username and password when logged in to VEMSHALA so you don&rsquo;t need to do it for every web page requested</li>
                        <li>Measuring how many people are using services, so they can be made easier to use and to ensure that there&rsquo;s enough capacity to ensure they are fast</li>
                        <li>Analyzing data to help us understand how you use online services so we can improve them</li>
                    </ul>

                    <p>If you choose not to use cookies during your visit, you should be aware that certain functions and pages will not work as expected. As an example you will not be able to use the some of the restricted premium contents, available for logged-in-users only.</p>

                    <p>If you want to delete any cookies already on your computer, please refer to your browser (Safari / Chrome and the likes) setting&rsquo;s instructions by clicking &ldquo;Help&rdquo; in your browser menu.</p>

                    <p>You can also find out more about cookies and how to delete and control them on&nbsp;www.aboutcookies.org&nbsp;or click &ldquo;Help&rdquo; in your browser menu.</p>

                    <p>If you wish to disagree with our Cookies Policy, you always have an option to leave our website.</p>

                </MainBox>

            </div>

           
        </>
    )
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CookiesPolicy)
