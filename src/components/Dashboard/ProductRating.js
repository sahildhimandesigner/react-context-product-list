import React from "react";

const ProductRating = (props) => {
    return(
        <div className="rating-container">
          <h5>Rating</h5>
          <input type="text" value={props.rating} />
        </div>
    )
}

export default ProductRating;