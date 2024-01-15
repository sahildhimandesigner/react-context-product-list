import React from "react";
import Sidebar from "./Dashboard/Sidebar";
import ProductDetail from "./Dashboard/ProductDetail";

const Container = () => {
    return(
        <div className="container">
            <Sidebar />
            <div className="product-detail-container">
                <ProductDetail />
            </div>
        </div>
    )
}

export default Container;