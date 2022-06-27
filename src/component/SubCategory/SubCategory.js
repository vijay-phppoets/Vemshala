import React from "react"

const SubCategory = props => {
    return (
        <div style={{ background: "#fff", border: "solid 1px #cccccca8" }} >
            <div>
                <img src={props.img_url} style={{ width: "100%", height: "auto" }} />
            </div>
            <div style={{ padding: 10, textAlign: "center" }} >
                <span style={{ fontSize: 16, color: "#000", fontWeight: 600, textTransform: "capitalize" }} >{props.subCategoryName}</span><br />
            </div>
        </div>
    )
}

export default SubCategory