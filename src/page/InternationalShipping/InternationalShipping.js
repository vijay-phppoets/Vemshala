import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
// custom component
import Footer from "../../component/Footer/Footer"
import { MainBox } from "./InternationalShippingStyle"
// action   
const InternationalShipping = props => {
    // variables & states 
    const {

    } = props
    // functions 
    return (
        <>
            <div>
                <div style={{ textAlign: "center", paddingTop: 16 }} >
                    <h1 style={{ fontSize: 24, fontWeight: "bold" }} >International Shipment</h1>
                </div>
                <MainBox>
                    <p><strong>Goods purchased via this Website can be shipped to most parts of the world. &nbsp;</strong>We ship Internationally through our logistic partners like Delhivery, UPS, DHL, Fedex.<br />
                        <br />
                        <strong>Shipment Transit Time:</strong><br />
                        <br />
Our logistic partners give us an assurance to deliver our shipment to foreign destination in approx. 5-6 days. We ship within 2 working days and shall with you the tracking details. As of now, we have all items at our warehouse and are despatch ready.<br />
                        <br />
However, delivery timelines might get impacted mainly on account of :<br />
                        <br />
a) Query raised by your country&rsquo;s Customs department.<br />
b) COVID 19 related local containments or city movement restrictions.</p>

                    <p><strong>Courier Charges:</strong><br />
                        <br />
Typically, International courier charges range from Rs 1500 to Rs 2500 for one packet of the size / weight being assessed at 1 Kilogram or less. Box shaped packets (with length , breadth and height parameters / dimensions) are calculated using volumetric weights which could be more than the dead weight of the entire packet. This excludes Import duties and any additional handling charges at the airports / clearing offices, if levied by local customs department in your country of shipping.<br />
                        <br />
Our Courier fee of Rs 2100 / &ndash; or USD 30/- is good for packets of 1 kg or less. In case you are ordering 3 sarees or more, the courier cost will be in multiple of US $ 30, mainly to take care of every additional 1 kg of weight.<br />
                        <br />
                        <strong>Import Duties</strong><br />
                        <br />
Your shipping destination (other than India) might attract Import duties and an additional local handling charges (processing fee) at your country&rsquo;s airports custom clearances. The amount payable is decided on the basis of the category of products being ordered, value.<br />
                        <br />
                        <strong>By placing an order, you commit to pay all customs duties and local handling charges as applicable to your country of shipping.&nbsp;</strong>These duties vary from country to country. Usually it is in the range of 5% to 25% for Textiles / Sarees / Garments / Apparels. As a thumb rule, for example, if you place an order for a value of say USD 100/-,&nbsp;<strong>which includes the price of shipping,&nbsp;</strong>you might pay an additional 10% to 30%&nbsp;<strong>more</strong>, depending upon your shipping location.</p>

                    <p>Higher Import duties are usually levied / imposed in some countries to discourage foreign items and encourage local products. Higher import duties also act as a deterrent to import any foreign products, as hot currency US $ goes out of that country.</p>

                    <p>Here is a brief list of major countries with their published Import duties for products what we sell on our website.&nbsp;<strong><em>Source: Internet. Pls check in your own country to know the right import duties applicable in your country to take the best decision.</em></strong></p>

                    <table width="100%" border="1">
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Countr</strong>y</td>
                                <td><strong>Items</strong></td>
                                <td><strong>Import Duty</strong>&nbsp;(Govt Levy)<br />
			excludes<br />
			local port clearances fee<br />
			if any.</td>
                            </tr>
                            <tr>
                                <td>EU Countries</td>
                                <td>Textiles/Garments</td>
                                <td>Around 25%</td>
                            </tr>
                            <tr>
                                <td>USA</td>
                                <td>Textiles/Garments</td>
                                <td>15% to 20%</td>
                            </tr>
                            <tr>
                                <td>Malaysia</td>
                                <td>Textiles/Garments</td>
                                <td>6% to 50% (Sales Tax being minimum)</td>
                            </tr>
                            <tr>
                                <td>Singapore</td>
                                <td>Textiles/Garments</td>
                                <td>0% / GST also excluded (Upto SGD 400)</td>
                            </tr>
                            <tr>
                                <td>Canada</td>
                                <td>Textiles/Garments</td>
                                <td>16%-18% (GST could be additional)</td>
                            </tr>
                            <tr>
                                <td>Brazil</td>
                                <td>Textiles/Garments</td>
                                <td>10% to 35%</td>
                            </tr>
                            <tr>
                                <td>Argentina</td>
                                <td>Textiles/Garments</td>
                                <td>18% to 35% (ad valorem)</td>
                            </tr>
                            <tr>
                                <td>UK</td>
                                <td>Textiles/Garments</td>
                                <td>Around 25% (Includes VAT)</td>
                            </tr>
                            <tr>
                                <td>Russia</td>
                                <td>Textiles/Garments</td>
                                <td>Around 25% (Import Duty and VAT)</td>
                            </tr>
                            <tr>
                                <td>Australia</td>
                                <td>Textiles/Garments</td>
                                <td>10% to 20% (10% GST being minimum)</td>
                            </tr>
                            <tr>
                                <td>New Zealand</td>
                                <td>Textiles/Garments</td>
                                <td>Around 20% (Import Duties &amp; Sales Tax)</td>
                            </tr>
                            <tr>
                                <td>UAE</td>
                                <td>Textiles/Garments</td>
                                <td>GCC Nations 5%</td>
                            </tr>
                            <tr>
                                <td>Qatar</td>
                                <td>Textiles/Garments</td>
                                <td>GCC Nations 5%</td>
                            </tr>
                            <tr>
                                <td>Saudi Arabia</td>
                                <td>Textiles/Garments</td>
                                <td>GCC Nations 5%</td>
                            </tr>
                        </tbody>
                    </table>

                    <p><strong><em>These tax slabs are tentative figures taken from Internet and various websites. These are subject to change and you are strongly encouraged to check with your local government Import Department websites to know on the exact Tax applicable in your country of shipping.</em></strong>&nbsp;<strong><em>Many countries don&rsquo;t charge import duties upto certain declared value. Minimum Sales Tax / GST might still be applicable or again exempted.&nbsp;</em></strong>This is why we cannot pre-build or increase our price universally for all International shipping. You might even save or not asked to pay any additional tax based on your country customs official decision to not levy any customs.</p>

                    <p>In case you have any queries, please feel free to write to us on &rdquo; support@vemshala.com or whatsapp us on +91 7827612103.</p>

                </MainBox>

            </div>

           
        </>
    )
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(InternationalShipping)
