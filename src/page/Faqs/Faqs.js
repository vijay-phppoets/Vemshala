import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Collapse } from 'antd';
// custom component
import Footer from "../../component/Footer/Footer"
import { Heading, Section, SectionLeft, SectionRight, SectionCenter } from "./FaqsStyle"
// action   
const OurStory = props => {
    // variables & states
    const { Panel } = Collapse;
    const {

    } = props
    // functions 
    return (
        <>
            <div>
                <div style={{ textAlign: "center", paddingTop: 16 }} >
                    <h1 style={{ fontSize: 24, fontWeight: "bold" }} >FAQs</h1>
                    <p>Need Help! Find your answers.</p>
                </div>
                <Section>
                    <SectionCenter>
                        <center>
                            <Heading>Sarees / Stoles / Dupattas: Basics</Heading>
                        </center>
                    </SectionCenter>
                    <SectionCenter>
                        <Collapse defaultActiveKey={['1']}>
                            <Panel header="From where do we source our handcrafted / handloom products?" key="1">
                                <p>We take utmost care in ensuring direct sourcing from the weavers/artisans. This is to ensure authenticity and fair practices, while sourcing.</p>
                                <p>We handpick Artisans who are acclaimed, adept and very conscious  of keeping the rich traditions alive and in no way dilute the heritage by using  sustandard artificial materials / dyestuffs.</p>
                            </Panel>
                            <Panel header="What is standard length of Sarees ?" key="2">
                                <p>Standard length of a Saree can vary from 4.5 m to 9 m. Handloom Sarees sold on Vemshala measure at least 5.30m without blouse-piece. The length of Saree varies from minimum of 5.3m to 5.5m due to the weaving pattern/style or the cluster it represents. Running Blouse-piece which comes attached with the Saree is of 0.80m length.</p>
                                <p>Please refer individual product’s “Care & Composition section” for exact details.</p>
                            </Panel>
                            <Panel header="What is standard length of a Dupatta?" key="3">
                                <p>Standard length of a dupatta can vary from 2.25 m to 2.5 m.</p>
                                <p>Please refer individual product’s “Care & Composition section” for exact details.</p>
                            </Panel>

                            <Panel header="What is standard of length of Stoles ?" key="4">
                                <p>Standard length of a Stole can vary from 1.5 m to 1.8 m.</p>
                                <p>Please refer individual product’s “Care & Composition section” for exact details.</p>
                            </Panel>
                        </Collapse>,
                    </SectionCenter>
                </Section>

                <Section>
                    <SectionCenter>
                        <center>
                            <Heading>Sustainability and Social Responsibility:</Heading>
                        </center>
                    </SectionCenter>
                    <SectionCenter>
                        <Collapse>
                            <Panel header="How do we promote Sustainability and contribute towards Social Responsibilities?" key="1">
                                <p>As mentioned above, we are committed to strictly source 100% Handcrafted / Handmade / Handwoven products, directly from the Weavers / Artisans. We thus help Weavers/Artisans by providing financial assistance and work throughout the year.</p>
                            </Panel>
                            <Panel header="How do you help protect nature by using minimal or no plastic materials?" key="2">
                                <p>Our packaging is vastly eco-friendly. Plastic packing material used, if any is recyclable.</p>
                            </Panel>
                        </Collapse>,
                    </SectionCenter>
                </Section>

                <Section>
                    <SectionCenter>
                        <center>
                            <Heading>Shipping & Returns</Heading>
                        </center>
                    </SectionCenter>
                    <SectionCenter>
                        <Collapse>
                            <Panel header="What Shipping Methods Are Available?" key="1">
                                <p>We are presently only accepting Pre-paid orders. We use reputed / reliable logistics / courier service providers like Fedex, Blue-dart, Delhivery for shipping both domestic as well as International for your valuable purchases</p>
                            </Panel>
                            <Panel header="What are your Refund and Return policies?" key="2">
                                <p>Please refer our <a href="/return-policy">Refund/Return Policy</a> by clicking the link</p>
                            </Panel>
                            <Panel header="Do You Ship International?" key="9">
                                <p>We very much ship International to help you fulfil your desire to get the most authentic Hand Crafted goods from India.  Shipment cost is extra. Local Inward Customs / VAT is additional. It takes usually 4-6 days to deliver any products</p>
                                <p>Present situation, local containments might impact delivery schedules.</p>
                                <p>Typically, each country has its own Custom duty rates on articles being imported. The Customs/Import Duty hence varies from country to country and actual Tax rates varies for imported articles.</p>
                                <p>Our International shipping costs only include shipment fee and excludes Import duties and local port clearances charges as may be levied at your shipping destination, outside India.</p>
                            </Panel>
                            <Panel header="How can I know the applicable Import duties for our listed items ?" key="3">
                                <p>To set new benchmarks in our e-commerce Industry, we have tried putting up details on Import Duties on products which we sell on our website. Please refer to our <a href="/international-shipping">International Shipping</a> page to know more on the Import duties applicable in you shipping destination.</p>
                            </Panel>
                            <Panel header="Once placed, Can my order be cancelled ?" key="4">
                                <p>Yes, your order can be canceled until, the product has been shipped. Once the product has been received by our Courier partners and you get shipment details through our courier partners, it cannot be cancelled. If you wish to change your decision and decide not to accept the delivery and the product is returned as undelivered, we shall refund the amount paid to us after deducting two way courier costs. You will appreciate that we have to sustain ourselves and we are very much careful on managing our  costs.</p>
                            </Panel>
                            <Panel header="What if I may delivery address is found wrong and product is undelivered?" key="5">
                                <p>If the packet is returned as marked “Wrong Address”, we will check with you before asking courier partner to return to us. If we are unable to deliver, we shall take the product back and refund the amount paid after deducting to-way courier costs incurred while sending and return of the product to our warehouse.</p>
                            </Panel>
                            <Panel header="I want to return my purchase! What do I do?" key="6">
                                <p>We have “No Return Policy” for Handcrafted or Handwoven products. Please refer our <a href="/return-policy">Refund/Return Policy</a> for more details.</p>
                            </Panel>
                            <Panel header="How long does it take for me to get a refund?" key="7">
                                <p>For Handcrafted / Handwoven products, we have “No Return Policy”. This is in the best interest of our Artisans.</p>
                                <p>Pls read our limited Return Policy for Damaged / Defective Products. For accepted Returns, we shall provide you with the best available alternate item in the similar price range/category, to choose from or pay the excess amount for any higher priced product. We do not refund in such cases</p>
                            </Panel>
                            <Panel header="How can I get assistance if I need it?" key="8">
                                <p>Please write to us at support@vemshala.com or chat online. We are here to help you .</p>
                            </Panel>

                        </Collapse>,
                    </SectionCenter>
                </Section>

                <Section>
                    <SectionCenter>
                        <center>
                            <Heading>Payments</Heading>
                        </center>
                    </SectionCenter>
                    <SectionCenter>
                        <Collapse >
                            <Panel header="What Payment Methods Are Accepted?" key="1">
                                <p>By card: Visa®, MasterCard®, American Express®, Rupay ®, Diners Club®, UPI/BHIM, Paypal®, Google Pay®, Phone Pay®, Razor Pay®.</p>
                            </Panel>
                            <Panel header="Do you accept International credit cards?" key="2">
                                <p>Yes. We accept International Credit cards payments using Visa®, MasterCard®, American Express ®, Diners Club®, Google Pay, Razor Pay, Paypal.</p>
                            </Panel>
                            <Panel header="Do you charge Customs / VAT on International shipments ?" key="3">
                                <p>All prices listed against products, exludes International shipment charges and any Import duties levied by destination countries.</p>
                                <p>Shipment and Taxes are levied at the time of final payment based on your shipping country.</p>
                            </Panel>

                            <Panel header="Do you have Point of Sale UPI/QR Code for taking payments. ?" key="4">
                                <p>Yes, we do have our QR Code issued by our Banking partner ICICI Bank Limited to enable you make QR based payments. Here is the link for you to scan and make payments. Once you make the payments, we shall send you your order confirmation on your mobile and your email id.</p>
                                <p>Do remember to reach out to us on our email id: support@vemshala.com or
                                    +91 7827612103 to share us your contact details.</p>
                            </Panel>
                        </Collapse>,
                    </SectionCenter>
                </Section>
            </div>

           
        </>
    )
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(OurStory)
