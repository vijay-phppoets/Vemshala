import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Collapse } from 'antd';
// custom component
import Footer from "../../component/Footer/Footer"
import { MainBox } from "./PrivacyPolicyStyle"
// action   
const PrivacyPolicy = props => {
    // variables & states
    const { Panel } = Collapse;
    const {

    } = props
    // functions 
    return (
        <>
            <div>
                <div style={{ textAlign: "center", paddingTop: 16 }} >
                    <h1 style={{ fontSize: 24, fontWeight: "bold" }} >Privacy Policy</h1>
                </div>
                <MainBox>
                    <p>Vemshala.com, an e-commerce website owned and managed by JAYVEE Designs Private Limited, (collectively, &ldquo;Vemshala&rdquo;, &ldquo;us&rdquo; or &ldquo;we&rdquo;) understand that your privacy is important to you. We are committed to respecting your privacy and protecting your personal data, which is any information that is capable of identifying you as an individual person. This Privacy Policy describes how we handle and protect your personal data in connection with Vemshala&rsquo;s e-commerce business activities, that post a link to this Privacy Policy (collectively, &ldquo;the Site&rdquo;), in our capacity as data controllers. Please see our&nbsp;<a href="/terms"><strong>Terms of use</strong></a>&nbsp;for more information about our online terms and policies in general.</p>

                    <h2><strong>Information we collect</strong></h2>

                    <p>Vemshala collects personal data in the course of its e-commerce business operations. We also collect personal data on certain areas of the Site when you register to create a user/Customer profile, register for it&rsquo;s newsletters and alerts, sign up for updates. The personal data collected varies and may include information that you provide, such as your name, mailing address, e-mail address, telephone number, and other basic information required to place an order. The Bank Account details are not maintained at our end. It is securely managed by our highly secured Payment Gateway partners (like Razorpay &trade; / Paypal(tm) etc). Our website does not store nor ask for your Bank Account Details.</p>

                    <p>We may also automatically collect information about the devices you use to interact with our Sites. The information we automatically collect may include IP address, device identifier, web browser, and browsing information collected through cookies, web beacons, pixels, clear gifs, and other similar technologies (collectively &ldquo;Cookies and Other Tracking Technologies&rdquo;) on our Site. We may also automatically collect information about how you use the Site, such as what you have searched for and viewed on the Site. The information automatically collected may be associated with a unique identifier as well as with any other personal data you have provided.</p>

                    <p>Vemshala may also collect personal data about you from third parties, such as data brokers or aggregators, in the course of its business activities. This includes demographic, professional and other information that is publicly available online, including information you choose to make public through social media platforms and other public online forums. We may combine this data with existing information we have about you or use it independently, for the purposes of our benchmarking and data analytics activities (e.g., analysis of our Customer behaviour across different geographies, foot traffic in our website. We will always seek to confirm that the third party has provided transparent information about its use of this data, including its disclosure to third parties, in compliance with applicable law.</p>

                    <h2><strong>Use of information</strong></h2>

                    <p>Vemshala uses your personal data to fulfil your requests for information, process your request to personalise content that you view or receive on the Site, evaluate and improve our services, distribute newsletters and alerts to you, prevent fraud, enforce our terms of use, comply with all applicable laws and corporate reporting obligations, enforce Vemshala&rsquo;s agreements, and accomplish other purposes you may initiate or request. In some situations, the collection of personal data may be required for the operation of the Site, or we may use it in the course of our business activities, including in connection with some client services, for example, to provide certain services or products such as our benchmarking products. We may combine and/or analyze personal data to evaluate and offer content and services most relevant to you. We may keep any of your personal data on file and use it to contact you.</p>

                    <p>Vemshala and its service providers may use first and third party Cookies and Other Tracking Technologies, including web beacons, to manage our Site and our services and collect analytics about how you use them. Vemshala and its service providers may collect information about whether you open or click any links in the knowledge, research or event communications that we send to you. The information provided throughout this Privacy Policy about cookies also applies to these other tracking technologies. Please refer to our&nbsp;<a href="/cookies-policy"><strong>Cookies Policy</strong></a>&nbsp;for more details regarding our use of Cookies and Other Tracking Technologies.</p>

                    <p>Our Sites do not track you by collecting personal data about your online activities over time and across third party websites or online services. Accordingly, we do not alter our data collection and use practices in response to &ldquo;do not track&rdquo; signals transmitted from web browsers.</p>

                    <h2><strong>Use of information collected via mobile devices</strong></h2>

                    <p>In connection with our mobile applications, Vemshala may use third party service providers to analyse user activity to fix errors, monitor usage, and improve the performance of the mobile applications. For example, Vemshala receives reports on some of our mobile applications&rsquo; aggregate usage and browsing patterns, including information about the type of device used, articles accessed, and other events occurring within our apps. Vemshala also receives reports on certain errors occurring within mobile applications.</p>

                    <p>We do not share your viewing history or trends through our Sites, with other users or any external third parties (i.e., persons or entities that are not affiliates or third party service providers of Vemshala).</p>

                    <h2><strong>The legal basis by which we process your personal data</strong></h2>

                    <p>Our processing of your personal data for the purposes mentioned above is based:</p>

                    <ul>
                        <li>in part, on our legitimate interests in promoting and protecting Vemshala, building and maintaining relationships, and providing our e-commerce business;</li>
                        <li>in part, on your consent, for example if you create a user profile, or register for our newsletters or alerts, or for business purposes that support web operations such as understanding and enhancing the quality of your experience on our web-sites;</li>
                        <li>in part, to comply with the law, when certain information is necessary to satisfy our legal or regulatory obligations.</li>
                    </ul>

                    <h2><strong>Disclosure of personal data: data recipients and international data transfers</strong></h2>

                    <p>Personal data collected in the course of Vemshala&rsquo;s e-commerce business activities, as well as on the Site may be transferred from time to time to Vemshala&rsquo;s personnel across our organization, as well as to our third party service providers located throughout the world, including in countries where the local law may grant you fewer rights than you have in your own country. Additionally, the Site may be viewed and hosted by Vemshala and our third party service providers anywhere in the world. Where required by law, we have put in place legal mechanisms designed to ensure adequate data protection of your personal data that is processed by Vemshala subsidiaries, affiliates and third party service providers, including the transfer of your personal data to countries other than the one in which you reside. By using any of the Site and providing information on any of them, you voluntarily consent to such trans-border transfer and hosting of such information.</p>

                    <p>Vemshala will not intentionally disclose or transfer (and will take reasonable steps to prevent the unauthorized or accidental disclosure of) your personal data to third parties without your consent or as otherwise permitted by law, whether for such third parties&rsquo; own marketing purposes or otherwise, except as follows. Vemshala may provide access to your personal data to third party service providers engaged by Vemshala to provide services related to the Site as well as related to Vemshala&rsquo;s business activities. We maintain processes designed to ensure that any processing of personal data by third party service providers is consistent with this Privacy Policy and protects the confidentiality, availability, and integrity of your personal data.</p>

                    <p>We also may share your personal data with third party service providers who perform services and functions on our behalf to support our interactions with you, including, for example, processing promotional campaigns, administering surveys or contests, or communicating with you.</p>

                    <p>In addition, we may disclose information about you:</p>

                    <ul>
                        <li>If we are required to do so by law or legal process;</li>
                        <li>To law enforcement authorities or other government officials;</li>
                        <li>When we believe disclosure is necessary or appropriate to prevent physical harm or financial loss or in connection with an investigation of suspected or actual illegal activity;</li>
                        <li>If disclosure is necessary to protect the vital interests of a person;</li>
                        <li>To enforce our&nbsp;<a href="/terms"><strong>Terms of use</strong></a>;</li>
                        <li>To protect our property, services and legal rights;</li>
                        <li>To prevent fraud against Vemshala, our subsidiaries, affiliates and/or business partners;</li>
                        <li>To support auditing, compliance, and corporate governance functions; or</li>
                        <li>To comply with any and all applicable laws.</li>
                    </ul>

                    <p>In addition, we may disclose or transfer your personal data in the event of a re-organization, merger, sale, joint venture, assignment, or other transfer or disposition of all or any portion of our business.</p>

                    <h2><strong>User forums</strong></h2>

                    <p>You should be aware that whenever you publicly disclose information online, that information could be collected and used by others. Vemshala is not responsible for any action or policies of any third parties who collect information that users publicly disclose in any such forums on the Site, if any.</p>

                    <h2><strong>Link to third party sites</strong></h2>

                    <p>Vemshala may provide links to third party websites or information as a service to our users. If you use these links, you will leave the Site. Such links do not constitute or imply an endorsement, sponsorship, or recommendation by Vemshala of the third party, the third party website, or the information contained therein, and Vemshala shall not be responsible or liable for your use thereof. Such use shall be subject to the terms of use and privacy policies applicable to those sites.</p>

                    <h2><strong>Social Networking</strong></h2>

                    <p>The Site may allow you to sign into and associate your social network accounts including, but not limited to, Twitter, LinkedIn, Facebook, Instagram and YouTube, with Vemshala. The Site also may allow you to log in to a Vemshala&rsquo;s account using certain social network account credentials.</p>

                    <p>By associating your social network account with Vemshala or logging in to a Vemshala account using your social network account credentials, you give us permission to access information that you have made available in your public profile for that social network account. The information available in your public profile varies based on the social network and your settings, but may include your email address, real name, profile picture, gender, and location. We use the information we receive from your social network account in accordance with the social network&rsquo;s terms of use and this Privacy Policy. Please refer to the privacy settings in your social network account for information about what data is shared with Vemshala and other connected applications and to manage the data that is shared through your account, including information about your activities using our Site.</p>

                    <p>If you would like to disconnect a social media account from us, refer to the settings of that social network account and its provider.</p>

                    <h2><strong>Security</strong></h2>

                    <p>Vemshala has implemented generally accepted standards of technology and operational security to protect personal data from loss, misuse, alteration, or destruction. Only authorized Vemshala&rsquo;s personnel and third party service providers are provided access to personal data, and these employees and service providers are required to treat this information as confidential. Despite these precautions however, Vemshala cannot guarantee that unauthorized persons will not obtain access to your personal data.</p>

                    <h2><strong>Data retention</strong></h2>

                    <p>Vemshala retains personal data, as necessary, for the duration of the relevant business relationship.</p>

                    <p>We may also retain personal data for longer than the duration of the business relationship should we need to retain it to protect ourselves against legal claims, use it for analysis or historical record-keeping, or comply with our information management policies and schedules. If you request that we delete your personal data, Vemshala will make reasonable attempts to delete all instances of the information in their entirety. For requests for access, corrections, or deletion, please refer to the &ldquo;Your Rights&rdquo; section of this Privacy Policy.</p>

                    <h2><strong>Your rights</strong></h2>

                    <p>Where granted by applicable law, you may have the right to request access to the personal data that we have collected about you for the purposes of reviewing, modifying, or requesting deletion of the data. You may also have the right to request a copy of the personal data that we have collected about you and to have any inaccuracies in that data corrected. In certain circumstances, you may also request that we cease processing your personal data.</p>

                    <p>If you would like to make a request to access, review, or correct the personal data we have collected about you, or to discuss how we process your personal data, please contact us at:&nbsp;&nbsp;<a href="mailto:rights@startrailsconsulting.com">rights@vemshala.com</a>. To help protect your privacy and security, we will take reasonable steps to verify your identity, such as requiring a password and user ID, before granting access to your personal data. We will make reasonable attempts to promptly investigate, comply with, or otherwise respond to your requests as may be required by applicable law. Different laws may prevent us from providing access to your personal data or otherwise fully complying with your request depending upon the circumstances and the request, such as for example, where producing your information may reveal the identity of someone else. We reserve the right to charge an appropriate fee for complying with your request where allowed by applicable law, and/or deny your requests where they may be manifestly unfounded, and/or excessive, or otherwise objectionable or unwarranted under applicable law.</p>

                    <h2><strong>Unsubscribe</strong></h2>

                    <p>If you have registered for Vemshala&rsquo;s newsletter or alerts, or you receive invitations to survey or launch updates from our side and you prefer not to receive future email communications from us, follow the instructions on the page of the Site where you have provided such information, subscribed or registered or write to&nbsp;<a href="mailto:unsubscribe@vemshala.com">unsubscribe@vemshal</a>a<a href="mailto:unsubscribe@vemshala.com">.com</a>&nbsp;to unsubscribe from all Vemshala&rsquo;s communications.</p>

                    <h2><strong>Consent; changes to Privacy Policy</strong></h2>

                    <p>By using the Sites, you consent to the collection, use, and storage of your personal data by us in the manner described in this Privacy Policy and elsewhere on the Sites. We reserve the right to make changes to this Privacy Policy from time to time. We will alert you to any such changes by updating this Privacy Policy. If we make material changes to this Privacy Policy that increase our rights to use personal data that we have previously collected about you, we will obtain your consent either through an email to your registered email address or by prominently posting information about the changes on our Sites.</p>

                </MainBox>

            </div>

           
        </>
    )
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy)
