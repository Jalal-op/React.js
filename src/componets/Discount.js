import { useTimer} from 'react-timer-hook';
import React from 'react'
import Dis from './img/Discount.jpg'
function Discount ({ expiryTimestamp }){

const  {
    days,
    hours,
    minutes,
    seconds,


}  = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    

  return (
    <section className="cart-banner pt-100 pb-100 " id='Discount'>
<div className="container">
    <div className="row clearfix">
        <div className="image-column col-lg-6">
            <div className="image">
                <div className="price-box">
                    <div className="inner-price">
                        <img src={Dis} alt={Dis}  />
                    </div>
                </div>
            </div>
        </div>
        <div className="content-column col-lg-6">
            <h3><span className="orange-text">Deal</span> of the month</h3>
            <h4>BALOCHI ZARA GUL</h4>
            <div className="text">Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant</div>

            <div className="time-counter"><div className="time-countdown clearfix" data-countdown="2022/06/10"><div className="counter-column"><div className="inner"><span className="count"></span>{days}</div></div> <div className="counter-column"><div className="inner"><span className="count">{hours}</span>Hours</div></div>  <div className="counter-column"><div className="inner"><span className="count">{minutes}</span>Mins</div></div>  <div className="counter-column"><div className="inner"><span className="count">{seconds}</span>Secs</div></div></div></div>
            <a href="cart.html" className="cart-btn mt-3"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
        </div>
    </div>
</div>

</section>


    )
}


export default  Discount
