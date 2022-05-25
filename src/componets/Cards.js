import React from 'react'
import Grid from '@mui/material/Grid';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Poshank1 from './img/img001.jpg';
import Poshank2 from './img/img002.jpg';
import Poshank3 from './img/img003.jpeg';
import Poshank4 from './img/img004.jpeg';
import Poshank5 from './img/img005.jpeg';
import Poshank6 from './img/img006.jpg';


const Cards = () => {
  return (
    <div className="product-section mt-150 mb-150" id='Product'>
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2 text-center">
					<div className="section-title">	
						<h3><span className="orange-text">Our</span> Products</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4 col-md-6 text-center">
					<div className="single-product-item">
						<div className="product-image">
							<a href="single-product.html"><img src={Poshank1} alt={Poshank1} /></a>
						</div>
						<h3>BALOCHI DOCH</h3>
						<p className="product-price"><span>Per Suit</span> PKR 10,000 </p>
						{<a href="cart.html" className="cart-btn"> <Grid item xs={4}> <ShoppingCartCheckoutIcon  /> Add to Cart</Grid></a>}
					</div>
				</div>
				<div className="col-lg-4 col-md-6 text-center">
					<div className="single-product-item">
						<div className="product-image">
							<a href="single-product.html"><img src={Poshank2} alt={Poshank2} /></a>
						</div>
						<h3>BALOCHI DOCH</h3>
						<p className="product-price"><span>Per Suit</span> PKR 10,000 </p>
						{<a href="cart.html" className="cart-btn"><Grid item xs={4}><ShoppingCartCheckoutIcon  />Add to Cart</Grid></a>}
					</div>
				</div>
				<div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
					<div className="single-product-item">
						<div className="product-image">
							<a href="single-product.html"><img src={Poshank3} alt={Poshank3} /></a>
						</div>
						<h3>BALOCHI DOCH</h3>
						<p className="product-price"><span>Per Suit</span>PKR 10,000 </p>
						{<a href="cart.html" className="cart-btn"><Grid item xs={4}><ShoppingCartCheckoutIcon  />Add to Cart</Grid></a>}
					</div>
				</div>
				<div className="col-lg-4 col-md-6 text-center">
					<div className="single-product-item">
						<div className="product-image">
							<a href="single-product.html"><img src={Poshank4} alt={Poshank4} /></a>
						</div>
						<h3>BALOCHI DOCH</h3>
						<p className="product-price"><span>Per Suit</span> PKR 10,000 </p>
						{<a href="cart.html" className="cart-btn"><Grid item xs={4}><ShoppingCartCheckoutIcon  />Add to Cart</Grid></a>}
					</div>
				</div>
				<div className="col-lg-4 col-md-6 text-center">
					<div className="single-product-item">
						<div className="product-image">
							<a href="single-product.html"><img src={Poshank5} alt={Poshank5} /></a>
						</div>
						<h3>BALOCHI DOCH</h3>
						<p className="product-price"><span>Per Suit</span> PKR 10,000 </p>
						{<a href="cart.html" className="cart-btn"><Grid item xs={4}><ShoppingCartCheckoutIcon  />Add to Cart</Grid></a>}
					</div>
				</div>
				<div className="col-lg-4 col-md-6 text-center">
					<div className="single-product-item">
						<div className="product-image">
							<a href="single-product.html"><img src={Poshank6} alt={Poshank6} /></a>
						</div>
						<h3>BALOCHI DOCH</h3>
						<p className="product-price"><span>Per Suit</span> PKR 10,000 </p>
						{<a href="cart.html" className="cart-btn"><Grid item xs={4}><ShoppingCartCheckoutIcon  />Add to Cart</Grid></a>}
					</div>
				</div>
			</div>
		</div>
	</div>
	
  )
}

export default Cards