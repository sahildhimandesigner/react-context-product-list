import React, { useContext, useState } from "react";
import Global from "../Context/Global";
import ProductRating from "./ProductRating";
import Price from "./ProductPrice";

const ProductDetail = () => {

    const product = useContext(Global);

    const [productItem, setProductItem] = useState('');

    const InputHandler = (e) => {
        setProductItem(e.target.value)
    }

    const filteredProduct = product.find(product => product.pName.toLowerCase(productItem.toLowerCase()).includes(productItem.toLowerCase()));

    return(
        <>
            <h3 className="product-count">Product Count: {product.length}</h3>
            
            <div className="product-detail">
                <div className="filter-input">
                    <label>Name:</label>
                    <input type="text" value={productItem} onChange={InputHandler} />
                </div>

                {filteredProduct && (
                    <>                    
                        <Price price={filteredProduct.price} />        
                        <ProductRating rating={filteredProduct.rating} />            
                    </>
                )}
            </div>
        </>
    )
}

export default ProductDetail;