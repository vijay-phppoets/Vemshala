import { Button, Pagination, Space, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect, useLocation } from "react-router-dom";

/* custom components */
import FilterSection from "../../component/FilterSection/FilterSection";
import Product from "../../component/Product/Product";
import { GlobleBox, Wrapper } from "../../component/Xcomponent";
import { ProductsBox, ProductsWrapper } from "./ProductListStyle";

/* actions */
import {
  getProductList,
  getProductListReset,
} from "../../action/getProductListAction";

/* other */
import { getCurrency } from "../../utils";

const ProductList = (props) => {
  /* variables */
  const { getProductList, getProductListReset, getProductListState } = props;
  const search = useLocation().search;
  const page = new URLSearchParams(search).get("page");
  const sort = new URLSearchParams(search).get("sort");
  const filter = new URLSearchParams(search).get("filter");
  const attr_filter = new URLSearchParams(search).get("attr_filter");
  const [pagination, setPagination] = useState({
    page: page ? parseInt(page) : 1,
    records: 20,
  });
  const [sortBy, setSortBy] = useState(sort ? sort : "");
  const [redirect, setRedirect] = useState([false, ""]);
  const [filter_params, set_filter_params] = useState(
    filter ? JSON.parse(filter) : {}
  );
  const [attr_filter_params, set_attr_filter_params] = useState(
    attr_filter ? JSON.parse(attr_filter) : {}
  );
  const [currencyType, setCurrencyType] = useState("");

  /* callbacks */
  useEffect(() => {
    let currency = getCurrency();
    setCurrencyType(currency);
    if (!props.forSearch) {
      getProductList({
        category_url_key: props.category_url_key,
        page: pagination.page,
        records: pagination.records,
        sort_key: sortBy,
        filter_params: filter_params,
        attr_filter_params: attr_filter_params,
        currencyType: currency,
      });
    } else {
      getProductList({
        page: pagination.page,
        records: pagination.records,
        search_query: props.search_query,
        filter_params: {},
        attr_filter_params: {},
        currencyType: currency,
      });
    }
  }, [
    pagination,
    sortBy,
    filter_params,
    attr_filter_params,
    props.search_query,
  ]);

  useEffect(() => {
    let url = "";
    if (props.forSearch) {
      url = `/search/${props.search_query}?page=${pagination.page}`;
    } else {
      url = `/shop/${props.category_url_key}?page=${pagination.page}`;
    }
    if (sortBy)
      url = `/shop/${props.category_url_key}?page=${pagination.page}&sort=${sortBy}`;

    const filter_params_keys = Object.keys(filter_params);
    if (filter_params_keys.length > 0) {
      url = `${url}&filter=${JSON.stringify(filter_params)}`;
    }

    const attr_filter_params_keys = Object.keys(attr_filter_params);
    if (attr_filter_params_keys.length > 0) {
      url = `${url}&attr_filter=${JSON.stringify(attr_filter_params)}`;
    }

    setRedirect([true, url]);
  }, [pagination, sortBy, filter_params, attr_filter_params]);

  /* functions */
  const handleSort = (sort_key) => {
    setSortBy(sort_key);
  };

  const handleFilter = (filter_by, filter_value, checked) => {
    let values = filter_params[filter_by];
    let valuesArr = values ? values.split(",") : [];

    if (checked) {
      valuesArr.push(filter_value);
      set_filter_params({ ...filter_params, [filter_by]: valuesArr.join(",") });
    } else {
      valuesArr = valuesArr.filter((el) => el !== filter_value);
      if (valuesArr.length > 0)
        set_filter_params({
          ...filter_params,
          [filter_by]: valuesArr.join(","),
        });
      else {
        delete filter_params[filter_by];
        set_filter_params({ ...filter_params });
      }
    }
  };

  const handleAttrFilter = (filter_by, filter_value, checked) => {
    let values = attr_filter_params[filter_by];
    let valuesArr = values ? values.split(",") : [];

    if (checked) {
      valuesArr.push(filter_value);
      set_attr_filter_params({
        ...attr_filter_params,
        [filter_by]: valuesArr.join(","),
      });
    } else {
      valuesArr = valuesArr.filter((el) => el !== filter_value);
      if (valuesArr.length > 0)
        set_attr_filter_params({
          ...attr_filter_params,
          [filter_by]: valuesArr.join(","),
        });
      else {
        delete attr_filter_params[filter_by];
        set_attr_filter_params({ ...attr_filter_params });
      }
    }
  };

  return (
    <>
      {redirect[0] && <Redirect to={redirect[1]} />}

      <GlobleBox>
        <Wrapper>
          {!props.forSearch && (
            <FilterSection
              handleSort={handleSort}
              handleFilter={handleFilter}
              handleAttrFilter={handleAttrFilter}
              category_url_key={props.category_url_key}
              filter_params={filter_params}
              attr_filter_params={attr_filter_params}
              sortBy={sortBy}
            />
          )}
          {props.search_query && (
            <h2 style={{ textAlign: "center" }}>
              Search Result: '{props.search_query}'
            </h2>
          )}
          {getProductListState.list.length > 0 && (
            <Spin
              spinning={getProductListState.apiState === "loading"}
              tip="Loading..."
              size="large"
            >
              <ProductsWrapper>
                {getProductListState.list.map((product) => (
                  <ProductsBox className="desktop">
                    <Product
                      product={product}
                      hideActionBtns={props.hideActionBtns}
                      currencyType={currencyType}
                    />
                  </ProductsBox>
                ))}
              </ProductsWrapper>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 64,
                }}
              >
                <Pagination
                  current={pagination.page}
                  total={getProductListState.total_records}
                  pageSize={pagination.records}
                  onChange={(page, pageSize) =>
                    setPagination({ ...pagination, ["page"]: page })
                  }
                />
              </div>
            </Spin>
          )}

          {getProductListState.apiState === "success" &&
            getProductListState.list.length === 0 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minHeight: 300,
                  justifyContent: "center",
                }}
              >
                <h3>No Product Found.</h3>
                <Space>
                  <Button
                    onClick={() => {
                      set_filter_params({});
                      set_attr_filter_params({});
                    }}
                  >
                    Clear Filter
                  </Button>
                  <Link to="/">
                    <Button>Home</Button>
                  </Link>
                </Space>
              </div>
            )}

          {getProductListState.apiState === "error" && <h1>Error</h1>}
        </Wrapper>
      </GlobleBox>
    </>
  );
};

const mapStateToProps = (state) => ({
  getProductListState: state.getProductList,
});
const mapDispatchToProps = (dispatch) => ({
  getProductList: (params) => dispatch(getProductList(params)),
  getProductListReset: () => dispatch(getProductListReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
