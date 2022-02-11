import React from "react";
import "./main.css";

function Listing(props) {
  let arr = props.item.map(({listing_id, url, MainImage, title, currency_code, price, quantity, error_messages}) => {
    if(!error_messages){
      return(
        <div className="item" key={listing_id}>
          <div className="item-image">
            <a href={url}>
              <img alt={title} src={MainImage.url_570xN}/>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{title}</p>
            <p className="item-price">{currencySelection(currency_code)} {price}</p>
            <p className={`item-quantity ${restGoods(quantity)}`}>{quantity} left</p>
          </div>
        </div>
      )
    } 

    console.log(error_messages);
  });

  return <div className="item-list">{arr}</div>;
}

function currencySelection(currency){
  switch (currency) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    default:
      return currency;
  }
}

function restGoods(quantity){
  if(quantity < "10"){
    return "level-low";
  } else if(quantity < "20") {
    return "level-medium";
  } else if(quantity > "20") {
    return "level-high";
  }
}

export default Listing;
