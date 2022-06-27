import React, { useState, useEffect } from 'react'

/* custom components */
import { GlobleBox, Wrapper } from "../../component/Xcomponent"
import ProductList from "../../component/ProductList/ProductList"
import Footer from "../../component/Footer/Footer"

/* actions */


const SearchPage = props => {
    /* VARIABLES */
    const search_query = props.match.params.query


    /* callbacks */


    return (
        <>
            <GlobleBox>
                <Wrapper>
                    <ProductList
                        forSearch={true}
                        search_query={search_query}
                    />
                </Wrapper>
            </GlobleBox>
        </>
    )
}


export default SearchPage
