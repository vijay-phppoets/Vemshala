import React, { useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import { connect } from "react-redux"
import { pad, inr,getCustomer } from "../../utils"
// actions
import { getInvoice, getInvoiceReset } from '../../action/getInvoiceAction' 
// others 

// Font.register({ family: 'Poppins, sans-serif', src: ['fonts/Poppins/Poppins-Black.ttf', 'fonts/Poppins/Poppins-ExtraLight.ttf'] })
Font.register({ family: 'Poppins, sans-serif', src: '/fonts/Poppins/Poppins-Regular.ttf', fontStyle: 'normal', fontWeight: 'normal' })
Font.register({ family: 'Poppins, sans-serif', src: '/fonts/Poppins/Poppins-ExtraBold.ttf', fontStyle: 'bold', fontWeight: 'bold' })
Font.register({ family: 'Poppins, sans-serif', src: '/fonts/Poppins/Poppins-SemiBold.ttf', fontStyle: 'semi-bold', fontWeight: 'semi-bold' })

// Create styles
const styles = StyleSheet.create({
    page: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        fontFamily: 'Poppins, sans-serif'
    },
    image:{
        width:"100"
    },
    table: {
        borderStyle: "solid",
        borderColor: "black",
        // borderWidth: "0 0 0 0",
        display: "inline-block",
        width: "100%"
    },
    tableRow: {
        float: "left",
        flexDirection: "row",
        overflow: "hidden"
    },
    tableHeaderCell: {
        border: 1,
        borderStyle: "solid",
        borderColor: "black",
        width: "10%",
        marginLeft: -1,
        textAlign: "center",
        padding: "5px",
        justifyContent: "center"
    },
    tableHeaderQtyCell: {
        border: 1,
        borderStyle: "solid",
        borderColor: "black",
        width: "8%",
        marginLeft: -1,
        textAlign: "center",
        padding: "5px",
        justifyContent: "center"
    },
    tableHeaderDisCell: {
        border: 1,
        borderStyle: "solid",
        borderColor: "black",
        width: "12%",
        marginLeft: -1,
        textAlign: "center",
        padding: "5px",
        justifyContent: "center"
    },
    tableHeaderDescriptionCell: {
        border: 1,
        borderStyle: "solid",
        borderColor: "black",
        width: "30%",
        textAlign: "center",
        padding: "5px",
    },
    tableDescriptionCell: {
        border: 1,
        borderStyle: "solid",
        borderColor: "black",
        width: "30%",
        marginTop: -1,
        padding: "5px",
    },
    tableCell: {
        border: 1,
        borderStyle: "solid",
        borderColor: "black",
        width: "10%",
        marginTop: -1,
        marginLeft: -1,
        textAlign: "right",
        padding: "5px",
        verticalAlign: "middle"
    },
    tableQtyCell: {
        border: 1,
        borderStyle: "solid",
        borderColor: "black",
        width: "8%",
        marginTop: -1,
        marginLeft: -1,
        textAlign: "right",
        padding: "5px",
        verticalAlign: "middle"
    },
    tableDisCell: {
        border: 1,
        borderStyle: "solid",
        borderColor: "black",
        width: "12%",
        marginTop: -1,
        marginLeft: -1,
        textAlign: "right",
        padding: "5px",
        verticalAlign: "middle"
    },
    tableDescriptionFooterCell: {
        border: 1,
        borderStyle: "solid",
        borderColor: "black",
        width: "88.90%",
        marginTop: -1,
        fontStyle: "semi-bold",
        padding: "5px",
        textAlign: "right"
    },
    tableAmountWordsFooterCell: {
        border: 1,
        borderStyle: "solid",
        borderColor: "black",
        width: "98.7%",
        marginTop: -1,
        fontStyle: "semi-bold",
        padding: "5px",
        textAlign: "left"
    },
})



// Create Document Component
const MyDocument = ({ invoice_order }) => {
    const price_in_words = (price) => {
        var sglDigit = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"],
            dblDigit = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"],
            tensPlace = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"],
            handle_tens = function (dgt, prevDgt) {
                return 0 == dgt ? "" : " " + (1 == dgt ? dblDigit[prevDgt] : tensPlace[dgt])
            },
            handle_utlc = function (dgt, nxtDgt, denom) {
                return (0 != dgt && 1 != nxtDgt ? " " + sglDigit[dgt] : "") + (0 != nxtDgt || dgt > 0 ? " " + denom : "")
            };

        var str = "",
            digitIdx = 0,
            digit = 0,
            nxtDigit = 0,
            words = [];
        if (price += "", isNaN(parseInt(price))) str = "";
        else if (parseInt(price) > 0 && price.length <= 10) {
            for (digitIdx = price.length - 1; digitIdx >= 0; digitIdx--) switch (digit = price[digitIdx] - 0, nxtDigit = digitIdx > 0 ? price[digitIdx - 1] - 0 : 0, price.length - digitIdx - 1) {
                case 0:
                    words.push(handle_utlc(digit, nxtDigit, ""));
                    break;
                case 1:
                    words.push(handle_tens(digit, price[digitIdx + 1]));
                    break;
                case 2:
                    words.push(0 != digit ? " " + sglDigit[digit] + " Hundred" + (0 != price[digitIdx + 1] && 0 != price[digitIdx + 2] ? " and" : "") : "");
                    break;
                case 3:
                    words.push(handle_utlc(digit, nxtDigit, "Thousand"));
                    break;
                case 4:
                    words.push(handle_tens(digit, price[digitIdx + 1]));
                    break;
                case 5:
                    words.push(handle_utlc(digit, nxtDigit, "Lakh"));
                    break;
                case 6:
                    words.push(handle_tens(digit, price[digitIdx + 1]));
                    break;
                case 7:
                    words.push(handle_utlc(digit, nxtDigit, "Crore"));
                    break;
                case 8:
                    words.push(handle_tens(digit, price[digitIdx + 1]));
                    break;
                case 9:
                    words.push(0 != digit ? " " + sglDigit[digit] + " Hundred" + (0 != price[digitIdx + 1] || 0 != price[digitIdx + 2] ? " and" : " Crore") : "")
            }
            str = words.reverse().join("")
        } else str = "";
        return str

    }

    return (
        < Document >
            <Page size="A4" style={styles.page}>
                <View style={{
                    width: "100%", fontSize: 10,
                    padding: "16px 16px 16px 24px"
                }} >
                    <View
                        style={{
                            display: "flex", flexDirection: "row",
                            justifyContent: "space-between", width: "100%",

                        }}
                    >
                         
                        <View><Text style={{ fontSize: 12, fontStyle: "bold", fontWeight: "bold" }} >Tax Invoice/Bill of Supply/Cash Memo</Text></View>
                    </View>
                    <View
                        style={{
                            display: "flex", flexDirection: "row",
                            justifyContent: "space-between", width: "100%",
                            paddingTop: 24
                        }}
                    >
                        <View>
                            <Text style={{ fontStyle: "semi-bold" }} >Sold By :</Text>
                            <Text>Nirmal Building, 21st Floor,</Text>
                            <Text>Nariman Point,</Text>
                            <Text>400021, Mumbai, Maharashtra</Text>
                         
                            <View
                                style={{ display: "flex", flexDirection: "row" }}
                            >
                                <Text style={{ fontStyle: "semi-bold" }} >PAN No: </Text>
                                <Text>AACCS1665A</Text>
                            </View>
                            <View
                                style={{ display: "flex", flexDirection: "row" }}
                            >
                                <Text style={{ fontStyle: "semi-bold" }} >GST Registration No: </Text>
                                <Text>27AACCS1665A1ZP</Text>
                            </View>
                            <View
                                style={{ display: "flex", flexDirection: "row" }}
                            >
                                <Text style={{ fontStyle: "semi-bold" }} >State/UT Code: </Text>
                                <Text>27</Text>
                            </View>
                        </View>
                        <View style={{ width: "30%" }}>
                            <Text style={{ fontStyle: "semi-bold" }} >Billing Address :</Text>
                            <Text>{invoice_order.b_fname +' '+invoice_order.b_lname}</Text>
                            <Text >{invoice_order.b_street}, {invoice_order.b_landmark}</Text>
                            <Text> {invoice_order.b_city}, {invoice_order.b_state}</Text>
                            <Text>{invoice_order.b_phone}</Text> 
                            <Text style={{ fontStyle: "semi-bold", paddingTop: 16 }} >Shipping Address :</Text>
                            <Text>{invoice_order.s_fname +' '+invoice_order.s_lname}</Text>
                            <Text>{invoice_order.s_street}, {invoice_order.s_landmark}</Text>
                            <Text>{invoice_order.s_city}, {invoice_order.s_state}</Text>
                            <Text>{invoice_order.s_phone}</Text> 
                        </View>
                    </View>

                    <View
                        style={{
                            display: "flex", flexDirection: "row",
                            justifyContent: "space-between", width: "100%",
                            paddingTop: 24
                        }}
                    >
                        <View>
                            <View
                                style={{ display: "flex", flexDirection: "row" }}
                            >
                                <Text style={{ fontStyle: "semi-bold" }} >Order Number: </Text>
                                <Text> {invoice_order.order_no}</Text>
                            </View>
                            <View
                                style={{ display: "flex", flexDirection: "row" }}
                            >
                                <Text style={{ fontStyle: "semi-bold" }} >Order Date: </Text>
                                <Text> {invoice_order.order_date}</Text>
                            </View>
                        </View>
                        
                    </View>

                    <View
                        style={{
                            display: "flex", flexDirection: "row",
                            justifyContent: "space-between", width: "100%",
                            paddingTop: 24
                        }}
                    >
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <View style={styles.tableHeaderDescriptionCell}>
                                    <Text>Description</Text>
                                </View>
                                <View style={styles.tableHeaderCell}>
                                    <Text>Unit Price</Text>
                                </View>
                                <View style={styles.tableHeaderQtyCell}>
                                    <Text>Qty</Text>
                                </View>
                                <View style={styles.tableHeaderDisCell}>
                                    <Text>Discount</Text>
                                </View>
                                <View style={styles.tableHeaderCell}>
                                    <Text>Taxable Amount</Text>
                                </View>
                                <View style={styles.tableHeaderCell}>
                                    <Text>GST Rate</Text>
                                </View>
                                <View style={styles.tableHeaderCell}>
                                    <Text>GST Amount</Text>
                                </View>
                                <View style={styles.tableHeaderCell}>
                                    <Text>Total</Text>
                                </View>
                            </View>
                            {invoice_order.items.map(item => (
                                <View style={styles.tableRow}>
                                    <View style={styles.tableDescriptionCell}>
                                        <Text>{item.product_name}</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text>{item.price}</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text>{item.quantity}</Text>
                                    </View>  
                                    <View style={styles.tableQtyCell}>
                                        <Text>{item.total}</Text>
                                    </View>  
                                    <View style={styles.tableCell}>
                                        <Text>5%</Text>
                                    </View>  
                                    <View style={styles.tableCell}>
                                        <Text>{item.total*0.05}</Text>
                                    </View>  
                                    <View style={styles.tableCell}>
                                        <Text>{item.total}</Text>
                                    </View>
                                </View>
                            )
                            )}
                              
                            <View style={styles.tableRow}>
                                <View style={styles.tableDescriptionFooterCell}>
                                    <Text>Sub Total</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <Text style={{ fontStyle: "semi-bold" }}>{invoice_order.sub_total}</Text>
                                </View>
                            </View>
                            {invoice_order.shipping_charge > 0 &&
                                <View style={styles.tableRow}>
                                    <View style={styles.tableDescriptionFooterCell}>
                                        <Text>Shipping Charges</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text style={{ fontStyle: "semi-bold" }}>{invoice_order.shipping_charge}</Text>
                                    </View>
                                </View>
                            }
                            {invoice_order.discount_inr > 0 &&
                              invoice_order.payment_type =="INR"?
                               <View style={styles.tableRow}>
                                    <View style={styles.tableDescriptionFooterCell}>
                                        <Text>Discount Amount</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text style={{ fontStyle: "semi-bold" }}>{invoice_order.discount_inr}</Text>
                                    </View>
                                </View>
                              :
                               <View style={styles.tableRow}>
                                    <View style={styles.tableDescriptionFooterCell}>
                                        <Text>Discount Amount</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text style={{ fontStyle: "semi-bold" }}>{invoice_order.discount_usd}</Text>
                                    </View>
                                </View>
                                
                            }
                            <View style={styles.tableRow}>
                                <View style={styles.tableDescriptionFooterCell}>
                                    <Text>Grand Total</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <Text style={{ fontStyle: "semi-bold" }}>{invoice_order.grand_total}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableAmountWordsFooterCell}>
                                    <Text>Amount in Words: {price_in_words(invoice_order.grand_total)} Only</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
            </Page>
        </Document >
    )
}

const Invoice = props => {
    // variables
    const {
        getInvoice, getInvoiceState,
    } = props
    const sales_order_id = props.match.params.id || null

    // callbacks
    useEffect(() => { 
        getInvoice({
            card_id:sales_order_id,
            customer_id:getCustomer().id
        });
    }, [])

    useEffect(() => {
         console.log("hello",getInvoiceState.data)
         
    }, [getInvoiceState]) 
    return (
        <>
            {getInvoiceState.apiState === 'success' &&
                <PDFViewer style={{ width: "100%", height: 1000 }} >
                    <MyDocument invoice_order={getInvoiceState.data} />
                </PDFViewer>  
            }
        </>
    )

}


const mapStateToProps = (state) => ({
    getInvoiceState: state.getInvoice,
})

const mapDispatchToProps = (dispatch) => ({
    getInvoice: (params) => dispatch(getInvoice(params)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Invoice)