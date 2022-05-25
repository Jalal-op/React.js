import React from 'react';
import   './Style.css';
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhoneIcon from '@mui/icons-material/Phone';
import CachedIcon from '@mui/icons-material/Cached';



const Services = () => {
    return (
        <section className="icons-container"id='ser'>

    <div className="icons">
        {<i> <HomeIcon/></i>}
        <div className="content">
            <h3>50+</h3>
            <p>Branches</p>
        </div>
    </div>

    <div className="icons">
        {<i><LocalShippingIcon/></i>}
        <div className="content">
            <h3>Free Shipping</h3>
            <p>When order over PKR 20k</p>
        </div>
    </div>

    <div className="icons">
        {<i> <PhoneIcon/></i>}
        <div className="content">
            <h3>24/7 Support</h3>
            <p>Get support all day</p>
        </div>
    </div>

    <div className="icons">
        {<i> <CachedIcon/></i>}
        <div className="content">
            <h3>Refund</h3>
            <p>Get refund within 3 days!</p>
        </div>
    </div>

</section>
    )
}

export default Services