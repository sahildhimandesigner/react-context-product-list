
const Price = (props) => {
    return(
        <div className="product-price-container">
          <label>Price:</label>  
          <input type="text" value={props.price} />
        </div>
    )
}

export default Price;