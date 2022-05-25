import React from 'react'
import   './Style.css';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Sale = () => {
  return (
<section class="shop-banner" id='BigSale'>
    	<div class="container">
        	<h3>April Big sale is on! <br /> with big <span class="orange-text">Discount...</span></h3>
            <div class="sale-percent"><span>Sale! <br /> Upto</span>50% <span>off</span></div>
            {<a href="shop.html" class="cart-btn btn-lg"><ShoppingCartCheckoutIcon/>Shop Now</a>}
        </div>
    </section>
  )
}

export default Sale