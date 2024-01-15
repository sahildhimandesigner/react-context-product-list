import React from "react";
import Global from "../Context/Global";
import { useContext } from "react";

const Sidebar = () => {

    const productData = useContext(Global);

    return(
        <>
            <div className="sidebar-container">
                <h1>Product</h1>
                <ul>
                    {productData.map(productList => {
                        return (
                            <li className="product-list">
                                <span>{productList.pName}</span>
                                <span>{productList.price}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Sidebar;