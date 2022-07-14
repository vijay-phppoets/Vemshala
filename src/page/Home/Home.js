import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Carousel, Spin, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

/* custom compnents */
import Product from "../../component/Product/Product";
import { GlobleBox, Wrapper } from "../../component/Xcomponent";
import { getCurrency } from "../../utils";
import {
  CategoryBox,
  CategoryImgBox,
  CategoryImgTitle,
  CategoryWrapper,
  Container,
  NewArrivalsBox,
  NewArrivalsWrapper,
} from "./HomeStyle";

/* actions */
import {
  getHomePageData,
  getHomePageDataReset,
} from "../../action/getHomePageDataAction";

/* others */
import cnf from "../../config";

const { TabPane } = Tabs;

const Home = (props) => {
  /* VARIABLES */
  const [currencyType, setCurrencyType] = useState("");
  const {
    getCategoryTreeState,
    getHomePageData,
    getHomePageDataReset,
    getHomePageDataState,
  } = props;
  const contentStyle = {
    height: "500px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const [apiState, setApiState] = useState("");

  /* CALLBACKS */
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    let currency = getCurrency();
    setCurrencyType(currency);
    getHomePageData({
      currencyType: currency,
    });
  }, []);

  useEffect(() => {
    if (
      getCategoryTreeState.apiState === "success" &&
      getHomePageDataState.apiState === "success"
    ) {
      setApiState("success");
      document.documentElement.scrollTop = 0;
    } else if (
      getCategoryTreeState.apiState === "error" ||
      getHomePageDataState.apiState === "error"
    ) {
      setApiState("error");
    } else {
      setApiState("loading");
    }
  }, [getCategoryTreeState, getHomePageDataState]);

  return (
    <Container>
      {apiState === "loading" && (
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
      {apiState === "success" && (
        <>
          <div>
            <Carousel autoplay>
              {getHomePageDataState.sliderList.map((slider) => (
                <div>
                  <div
                    style={{
                      height: "auto",
                      width: "auto",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={`${cnf.s3_base_url}${slider.image}`}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <GlobleBox>
            <Wrapper>
              <div
                style={{
                  marginTop: 64,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h1>Our Categories</h1>
                <CategoryWrapper>
                  {getCategoryTreeState.tree[0] && (
                    <CategoryBox className="desktop">
                      <div
                        style={{
                          background: "#fff",
                          border: "solid 1px #cccccca8",
                        }}
                      >
                        <CategoryImgBox
                          to={`/shop/${getCategoryTreeState.tree[0].url_key}`}
                        >
                          <img
                            src={`${cnf.s3_base_url}${getCategoryTreeState.tree[0].image}`}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </CategoryImgBox>
                        <CategoryImgTitle>
                          {getCategoryTreeState.tree[0].name}
                        </CategoryImgTitle>
                      </div>
                    </CategoryBox>
                  )}
                  {getCategoryTreeState.tree[1] && (
                    <CategoryBox className="desktop">
                      <div
                        style={{
                          background: "#fff",
                          border: "solid 1px #cccccca8",
                        }}
                      >
                        <CategoryImgBox
                          to={`/shop/${getCategoryTreeState.tree[1].url_key}`}
                        >
                          <img
                            src={`${cnf.s3_base_url}${getCategoryTreeState.tree[1].image}`}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </CategoryImgBox>
                        <CategoryImgTitle>
                          {getCategoryTreeState.tree[1].name}
                        </CategoryImgTitle>
                      </div>
                    </CategoryBox>
                  )}
                  {getCategoryTreeState.tree[2] && (
                    <CategoryBox className="desktop">
                      <div
                        style={{
                          background: "#fff",
                          border: "solid 1px #cccccca8",
                        }}
                      >
                        <CategoryImgBox
                          to={`/shop/${getCategoryTreeState.tree[2].url_key}`}
                        >
                          <img
                            src={`${cnf.s3_base_url}${getCategoryTreeState.tree[2].image}`}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </CategoryImgBox>
                        <CategoryImgTitle>
                          {getCategoryTreeState.tree[2].name}
                        </CategoryImgTitle>
                      </div>
                    </CategoryBox>
                  )}
                  {getCategoryTreeState.tree[3] && (
                    <CategoryBox className="desktop">
                      <div
                        style={{
                          background: "#fff",
                          border: "solid 1px #cccccca8",
                        }}
                      >
                        <CategoryImgBox
                          to={`/shop/${getCategoryTreeState.tree[3].url_key}`}
                        >
                          <img
                            src={`${cnf.s3_base_url}${getCategoryTreeState.tree[3].image}`}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </CategoryImgBox>
                        <CategoryImgTitle>
                          {getCategoryTreeState.tree[3].name}
                        </CategoryImgTitle>
                      </div>
                    </CategoryBox>
                  )}
                </CategoryWrapper>
              </div>

              {getHomePageDataState.newArvlPrds.length > 0 && (
                <div
                  style={{
                    marginTop: 64,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h1>New Arrivals</h1>

                  <Tabs defaultActiveKey="0" centered style={{ width: "100%" }}>
                    {getHomePageDataState.newArvlPrds.map((obj, idx) => (
                      <TabPane tab={obj.category.name} key={idx}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <NewArrivalsWrapper>
                            {obj.products.map((prd) => (
                              <NewArrivalsBox className="desktop">
                                <Product
                                  link="/product"
                                  product={prd}
                                  currencyType={currencyType}
                                />
                              </NewArrivalsBox>
                            ))}
                          </NewArrivalsWrapper>
                          <Link to="/">
                            <Button type="primary" size="large">
                              View More
                            </Button>
                          </Link>
                        </div>
                      </TabPane>
                    ))}
                  </Tabs>
                </div>
              )}

              {getHomePageDataState.exclvsPrds.length > 0 && (
                <div
                  style={{
                    marginTop: 64,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h1>Exclusive Products</h1>

                  <Tabs defaultActiveKey="0" centered style={{ width: "100%" }}>
                    {getHomePageDataState.exclvsPrds.map((obj, idx) => (
                      <TabPane tab={obj.category.name} key={idx}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <NewArrivalsWrapper>
                            {obj.products.map((prd) => (
                              <NewArrivalsBox className="desktop">
                                <Product
                                  link="/product"
                                  product={prd}
                                  currencyType={currencyType}
                                />
                              </NewArrivalsBox>
                            ))}
                          </NewArrivalsWrapper>
                          <Link to="/exclusive">
                            <Button type="primary" size="large">
                              View More
                            </Button>
                          </Link>
                        </div>
                      </TabPane>
                    ))}
                  </Tabs>
                </div>
              )}

              {getHomePageDataState.onSalePrds.length > 0 && (
                <div
                  style={{
                    marginTop: 64,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h1>Products on Sale</h1>

                  <Tabs defaultActiveKey="0" centered style={{ width: "100%" }}>
                    {getHomePageDataState.onSalePrds.map((obj, idx) => (
                      <TabPane tab={obj.category.name} key={idx}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <NewArrivalsWrapper>
                            {obj.products.map((prd) => (
                              <NewArrivalsBox className="desktop">
                                <Product
                                  link="/product"
                                  product={prd}
                                  currencyType={currencyType}
                                />
                              </NewArrivalsBox>
                            ))}
                          </NewArrivalsWrapper>
                          <Link to="/">
                            <Button type="primary" size="large">
                              View More
                            </Button>
                          </Link>
                        </div>
                      </TabPane>
                    ))}
                  </Tabs>
                </div>
              )}
            </Wrapper>
          </GlobleBox>

          {getHomePageDataState.testimonialList.length > 0 && (
            <GlobleBox style={{ background: "#f1e8df", marginTop: 64 }}>
              <Wrapper style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    maxWidth: 900,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "40px 40px 10px 40px",
                  }}
                >
                  <h1>Testimonials</h1>
                  <div style={{ width: "100%" }}>
                    <Carousel autoplay>
                      {getHomePageDataState.testimonialList.map(
                        (testimonial) => (
                          <div>
                            <div
                              style={{
                                height: 200,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              }}
                            >
                              <p style={{ textAlign: "center" }}>
                                {testimonial.description}
                              </p>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {testimonial.image ? (
                                  <Avatar
                                    size={80}
                                    src={`${cnf.s3_base_url}${testimonial.image}`}
                                  />
                                ) : (
                                  <Avatar size={80} icon={<UserOutlined />} />
                                )}
                                <div style={{ marginLeft: 16 }}>
                                  <span
                                    style={{
                                      fontSize: 16,
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {testimonial.name}
                                  </span>
                                  <br />
                                  <span style={{ fontWeight: 500 }}>
                                    {testimonial.title}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </Carousel>
                  </div>
                </div>
              </Wrapper>
            </GlobleBox>
          )}
        </>
      )}
      {/* */}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  getCategoryTreeState: state.getCategoryTree,
  getHomePageDataState: state.getHomePageData,
});
const mapDispatchToProps = (dispatch) => ({
  getHomePageData: (params) => dispatch(getHomePageData(params)),
  getHomePageDataReset: () => dispatch(getHomePageDataReset()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
