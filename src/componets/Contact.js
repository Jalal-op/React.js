import React from 'react';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

const Contact = () => {
  return (
    <section id="contact">
		<div className="service_content" >
		   <h1>Contact Us</h1>
		   <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
	   </div>
	   <div className="container">
		   <div className="maine">
			   <div className=" row">
				   <div className="col-md-6 col-lg-6">
					   <div className="contentte">
						   {<i  aria-hidden="true" style={{width: '32px'}}><AddLocationAltIcon /></i>}
						   <h5>ADDRESS:</h5>
					   </div>
					   <p>Shop#6, RAbia Crown. New M.A Jinnah Road</p>

					   <div className="contentte">
						   <i className="fa fa-phone-square" aria-hidden="true" style={{width: '32px'}}><LocalPhoneIcon /></i>
						   <h5>PHONE:</h5>
					   </div>
					   <p>092 223 678</p>

					   <div className="contentte">
						   <i className="fa fa-envelope" aria-hidden="true" style={{width: '32px'}}><MailIcon /></i>
						   <h5>EMAIL:</h5>
					   </div>
					   <p>shah@gmail.com</p>

				   </div>
				   <div className="col-md-6 col-lg-6">
					{<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d452.4799251335711!2d67.00517455757834!3d24.869334114228085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f8f01b6f553%3A0xb554239c96fa2a46!2sBalOch%20Cloth%20Shop.!5e0!3m2!1sen!2s!4v1649140952303!5m2!1sen!2s" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
				   </div>
			   </div>
			   
		   </div>
	   </div>	

</section>
  
)

}

export default Contact