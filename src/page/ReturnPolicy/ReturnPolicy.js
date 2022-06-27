import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
// custom component
import Footer from "../../component/Footer/Footer"
import { MainBox } from "./ReturnPolicyStyle"
// action   
const ReturnPolicy = props => {
    // variables & states 
    const {

    } = props
    // functions 
    return (
        <>
            <div>
                <div style={{ textAlign: "center", paddingTop: 16 }} >
                    <h1 style={{ fontSize: 24, fontWeight: "bold" }} >Return Policy</h1>
                </div>
                <MainBox>
                    <p><strong>Hand Woven Products:&nbsp;</strong>We appreciate our Artisans and our rich Indian tradition. Each product created by our Artisans is unique.</p>

                    <p>Please note that while working with:</p>

                    <ul>
                        <li>handwoven/handmade fabrics (like Tussar, Ghicha, Cotton, Silk etc), work of hand-embroidery, irregularities in weave / loose threads / knots are very natural to its finishing processes.</li>
                        <li>Use of natural vegetable dyes in hand Block printing or colouring the handspun yarns (Bandha / Tie n Dye) or pen kalamkaris etc</li>
                    </ul>

                    <p>there usually will be slight variations in stitching/weaving/colours/textures &ndash; which enhance the cultural/unique value of the products. and considered as hallmarks of authenticity of a hand crafted products and are thus&nbsp;<strong>not</strong>&nbsp;considered as Defects under Returns.</p>

                    <p>Handloom Products are bound to have irregularities in weave / print / loose threads / knots. This are marks of authenticity of a hand crafted products and are thus&nbsp;<strong>not</strong>&nbsp;considered as Defects.</p>

                    <p>To honour our Artisans work, and for the sake of Hygiene specially in the present context,&nbsp;<strong>we do not allow Returns for Sarees / any Handwoven Items.&nbsp;</strong>Accepting Returns may financially harm our Artisans who have toiled to create each masterpiece. Please do reach out to us for any additional queries on colour / fabric composition, if any , by emailing us at : support@vemshala.com, before placing your orders.</p>

                    <p>We only accept Prepaid Orders.</p>

                    <p>For all&nbsp;<strong>undelivered</strong>&nbsp;domestic orders (Wrong address / Change of Mind decisions/Refusal to accept the delivery), we would be charging Courier cost, both Forward and Return of flat Rs (INR) 500/- per Item and refunding the remaining amount. This will help us remain lean and cost effective. Package once received and opened at your end, won&rsquo;t be returned.&nbsp;Orders once placed cannot be cancelled.</p>

                    <h4><strong>DEFECTIVE/WRONG PRODUCT(S) REPLACEMENT:</strong></h4>

                    <p>All our products are carefully handled and it is ensured that each shipment is thoroughly inspected before it leaves our premises. However if you do receive a faulty/damaged product(s),&nbsp;we request you to write to us on : returns@vemshala.com, &nbsp;within 24 hours / 1 day of receipt. In order to sort it on priority, please contact us with the following details:</p>

                    <ol>
                        <li><strong>Mention the order Id in the subject line for reference.</strong></li>
                        <li><strong>Attach a Snapshot/photo of the fault / damaged product(s) indicating it. Once we receive the mail, our team will review the concerns. We will resolve this in the best way possible for you and will do our best to provide an enhanced service.</strong></li>
                    </ol>

                    <p>While returning the damaged / defective product(s) to us, please ensure that it is in a new and unused condition, with the original label and tags still intact and in the original bag and packaging. For accepted Returns, We shall organise Reverse Pick-up. Reverse Pick-up might call for printing of document for pasting on the Packet. We also recommend you retain proof of return, such as a Courier receipt for future references.</p>

                    <p>For International Orders, please note that Vemshala prices do not include custom duties and additional charges, may be levied by your local tax office. Should you fail to clear/accept the order through local customs and pay the relevant duties the goods will be returned to Vemshala. Upon receipt of the returned goods, a refund deducting the cost of return shipping plus&nbsp;any associated duties incurred by us, will be automatically credited via your mode of payment.</p>

                    <p>Support Team at Vemshala will contact you within 3 &ndash; 7 days&nbsp;(with the exception of weekends and public holidays) on receipt of the returned goods.</p>

                    <p><a href="https://www.vemshala.com/"><strong>Vemshala.com</strong></a><strong>&nbsp;reserves the right to accept / refuse Returns,&nbsp;</strong>based on the condition of the product(s) being returned&nbsp;under damaged / defective items criteria<strong>.</strong></p>

                </MainBox>

            </div>

           
        </>
    )
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ReturnPolicy)
