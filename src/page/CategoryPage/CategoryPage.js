import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

/* CUSTOM COMPONENTS */
import ProductList from "../../component/ProductList/ProductList";
import SubCategory from "../../component/SubCategory/SubCategory";
import { GlobleBox, Wrapper } from "../../component/Xcomponent";
import {
  BannerContainer,
  SubCatsBox,
  SubCatsWrapper,
} from "./CategoryPageStyle";

/* ACTIONS */
import {
  getCategoryDetails,
  getCategoryDetailsReset,
} from "../../action/getCategoryDetailsAction";

/* OTHERS */
import cnf from "../../config";

const CategoryPage = (props) => {
  /* VARIABLES */
  const category_url_key = props.match.params.category;
  const [redirect, setRedirect] = useState([false, ""]);
  const {
    getCategoryDetails,
    getCategoryDetailsReset,
    getCategoryDetailsState,
  } = props;

  /* CALLBACKS */
  useEffect(() => {
    getCategoryDetails({
      category_url_key: category_url_key,
    });
    document.documentElement.scrollTop = 0;
  }, [category_url_key]);

  useEffect(() => {
    if (getCategoryDetailsState.apiState === "error") {
      // setRedirect([true, "/"])
    }
  }, [getCategoryDetailsState]);

  return (
    <>
      <Helmet>
        <title>{getCategoryDetailsState.category.name}</title>
        <meta
          name="og:title"
          property="og:title"
          content={getCategoryDetailsState.category.name}
        />
      </Helmet>
      {redirect[0] && <Redirect to={redirect[1]} />}

      {getCategoryDetailsState.apiState === "loading" && (
        <div
          style={{
            minHeight: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin size="large" />
        </div>
      )}
      {getCategoryDetailsState.apiState === "success" && (
        <>
          <BannerContainer>
            <img
              src={`${cnf.s3_base_url}${getCategoryDetailsState.category.banner_img}`}
              alt=""
              className="banner_img"
              style={{ width: "100%", height: "auto" }}
            />
            <img
              src={`${cnf.s3_base_url}${getCategoryDetailsState.category.m_banner_img}`}
              alt=""
              className="m_banner_img"
              style={{ width: "100%", height: "auto" }}
            />
          </BannerContainer>

          <GlobleBox>
            <Wrapper>
              <div style={{ textAlign: "center", margin: "16px 0" }}>
                <h1
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {getCategoryDetailsState.category.name}
                </h1>
              </div>

              {getCategoryDetailsState.children.length > 0 && (
                <SubCatsWrapper>
                  {getCategoryDetailsState.children.map((subCategory) => (
                    <SubCatsBox
                      className="desktop"
                      to={`/shop/${subCategory.url_key}`}
                    >
                      <SubCategory
                        img_url={`${cnf.s3_base_url}${subCategory.image}`}
                        subCategoryName={subCategory.name}
                      />
                    </SubCatsBox>
                  ))}
                </SubCatsWrapper>
              )}

              <div style={{ textAlign: "center", margin: "16px 0" }}>
                <h1 style={{ fontSize: 32, fontWeight: "bold" }}>PRODUCTS</h1>
              </div>

              <ProductList category_url_key={category_url_key} />
            </Wrapper>
          </GlobleBox>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  getCategoryDetailsState: state.getCategoryDetails,
});
const mapDispatchToProps = (dispatch) => ({
  getCategoryDetails: (params) => dispatch(getCategoryDetails(params)),
  getCategoryDetailsReset: () => dispatch(getCategoryDetailsReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
