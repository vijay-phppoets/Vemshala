import React, { useEffect, useState } from "react"
import { Button, Space, Dropdown, Menu, Checkbox, Row, Col } from "antd"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import _ from "lodash"
import { DownOutlined, CloseOutlined } from '@ant-design/icons'


/* custom component */
import { FilterIcon } from "../../component/CustomIcons"
import { Container } from "./FilterSectionStyle"


/* actions */
import { getAttributeList, getAttributeListReset } from "../../action/getAttributeListAction"
import { filter_price } from "../../strings.json"

const FilterSection = props => {
    /* variables */
    const {
        getCategoryTreeState,
        getAttributeList, getAttributeListReset, getAttributeListState
    } = props
    const [visible, setVisible] = useState(false)
    const [categories, setCategories] = useState([])
    const [attributes, setAttributes] = useState([])
    const menu = (
        <Menu>
            <Menu.Item onClick={() => props.handleSort("price_low_to_high")} >Price Low to High</Menu.Item>
            <Menu.Item onClick={() => props.handleSort("price_high_to_low")} >Price High to Low</Menu.Item>
        </Menu>
    );

    /* callbacks */
    useEffect(() => {
        getAttributeList()
    }, [])

    useEffect(() => {
        if (getCategoryTreeState.apiState === "success") {
            if (_.find(getCategoryTreeState.tree, { 'url_key': props.category_url_key })) {
                setCategories(_.find(getCategoryTreeState.tree, { 'url_key': props.category_url_key }).children);
            }
        }
    }, [getCategoryTreeState])

    useEffect(() => {
        if (getAttributeListState.apiState === "success") {
            setAttributes(getAttributeListState.list)
        }
    }, [getAttributeListState])

    return (
        <Container>
            <div style={{ margin: "0 16px", display: "flex", justifyContent: "flex-end" }} >
                <Space>
                    <Button type="text" onClick={() => setVisible(!visible)}>
                        <div style={{ display: "flex", alignItems: "center" }} >
                            {visible ? <CloseOutlined /> : <FilterIcon />}
                            <span style={{ marginLeft: 8 }}>FILTER</span>
                        </div>
                    </Button>
                    <Dropdown overlay={menu} trigger={["click"]} >
                        <Button type="text" >
                            <div style={{ display: "flex", alignItems: "center" }} >
                                <DownOutlined /><span style={{ marginLeft: 8 }} >
                                    SORT
                                    {props.sortBy === "price_high_to_low" && ": High to Low"}
                                    {props.sortBy === "price_low_to_high" && ": Low to High"}
                                </span>
                            </div>
                        </Button>
                    </Dropdown>
                </Space>

            </div>
            <div style={{ background: "#fff", marginTop: 8, height: visible ? 200 : 0,  display: "flex", flexFlow: "wrap",border:'1px solid #999',borderRadius:'20px' }} className="filter-box" >
                {categories.length > 0 &&
                    <div style={{ width: '20%', padding: "20px 10px" }} >
                        <h4 style={{ color: "#00000099" }} >FILTER BY CATEGORY</h4>
                        <div style={{ padding: "0 4px", maxHeight: 200, overflowY: "hidden", display: "flex", flexDirection: "column" }} >
                            {categories.map(cat => (
                                <Checkbox style={{ marginLeft: 8 }}
                                    onChange={e => props.handleFilter('category', cat.url_key, e.target.checked)}
                                    checked={props.filter_params.category && props.filter_params.category.split(",").includes(cat.url_key)}
                                >{cat.name}</Checkbox>
                            ))}
                        </div>
                    </div>
                }
                <div style={{ width:'20%', padding: "20px 10px" }} >
                    <h4 style={{ color: "#00000099" }} >FILTER BY PRICE</h4>
                    <div style={{ padding: "0 4px", maxHeight: 200, overflowY: "hidden", display: "flex", flexDirection: "column" }} >
                        {filter_price.map(obj => (
                            <Checkbox style={{ marginLeft: 8 }}
                                onChange={e => props.handleFilter('price', obj.value, e.target.checked)}
                                checked={props.filter_params.price && props.filter_params.price.split(",").includes(obj.value)}
                            >{obj.label}</Checkbox>
                        ))}
                    </div>
                </div>
                {attributes.map(att => (
                    <div style={{ width: '20%', padding: "20px 10px" }} >
                        <h4 style={{ color: "#00000099", textTransform: "uppercase" }} >FILTER BY {att.name}</h4>
                        <div style={{ padding: "0 4px", maxHeight: 200, overflowY: "hidden", display: "flex", flexDirection: "column" }} >
                            {att.options.map(option => (
                                <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }} >
                                    <Checkbox style={{ marginLeft: 8 }}
                                        onChange={e => props.handleAttrFilter(att.attr_code, option.option_url_key, e.target.checked)}
                                        checked={props.attr_filter_params[att.attr_code] && props.attr_filter_params[att.attr_code].split(",").includes(option.option_url_key)}
                                    />
                                    <div style={{ display: "flex", alignItems: "center", marginLeft: 8 }} >
                                        {att.type === "color_swatch" && <div style={{ height: 16, width: 16, borderRadius: 8, background: option.color_code, marginRight: 4, border: "solid 1px #000" }} />}
                                        <span>{option.option_value}</span>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    getCategoryTreeState: state.getCategoryTree,
    getAttributeListState: state.getAttributeList,
})
const mapDispatchToProps = (dispatch) => ({
    getAttributeList: (params) => dispatch(getAttributeList(params)),
    getAttributeListReset: () => dispatch(getAttributeListReset()),
})
export default connect(mapStateToProps, mapDispatchToProps)(FilterSection)