import React from "react"

import { BlackBtn } from './NotFoundStyle'


const NotFound = props => {

    return (
        <>
            <div style={{
                display: "table",
                width: "100%",
                height: "100vh",
                textAlign: "center",
            }}>
                <div style={{
                    display: "table-cell",
                    verticalAlign: "middle",
                }}>
                    <h1 style={{
                        fontSize: "50px",
                        display: "inline-block",
                        paddingRight: "12px",
                        animation: "type .5s alternate infinite",
                    }}>ERROR 404</h1>
                    <br />
                    <BlackBtn to={`/`}>HomePage</BlackBtn>
                </div>
            </div>
        </>
    )
}

export default NotFound