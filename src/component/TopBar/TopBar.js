import React, { useEffect, useState } from "react"
import { CloseOutlined } from "@ant-design/icons"
import { connect } from "react-redux"
// custom component
import { Container, CloseBtnContainer } from "./TopBarStyle"
import { setOfferStrip, getOfferStrip } from "../../utils"
// action
import { getOffer } from "../../action/getOfferAction"
const TopBar = props => {
    const {
        getOffer, getOfferState,
    } = props
    const [topBarView, setTopBarView] = useState("yes")

    // Callback
    useEffect(() => {
        getOffer()
    }, [])

    const handleClose = () => {
        setOfferStrip("no")
        setTopBarView("no")
    }
    let strip = getOfferStrip();
    strip = !strip ? "yes" : strip;
    setOfferStrip(strip);
    return (
        <div>
            {getOfferStrip() === "yes" ?
                <Container>
                    {getOfferState.message}
                    <CloseBtnContainer>
                        <a href="#" onClick={() => handleClose()} className="close-button"></a>
                    </CloseBtnContainer>
                </Container>
                : ""
            }
        </div>
    )
}
const mapStateToProps = (state) => ({
    getOfferState: state.getOffer,
})
const mapDispatchToProps = (dispatch) => ({
    getOffer: (params) => dispatch(getOffer(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TopBar)