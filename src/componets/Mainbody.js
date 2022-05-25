import React from 'react';
import Baloch from './img/About.jpg';

const Mainbody = () => {
  return (
    <section id="about">
    <h2>About Us</h2>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-8 col-lg-6 content-about">
          <div className="abt-img center">
            <img src={Baloch} alt={Baloch}/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="abt">
          	<h3>WHY CHOOSE US?</h3>
            <h3>Best Bus Service In The Country</h3>
            <p>We are a small business concern based in Karachi, Pakistan.  This store is purely a commercial venture, not affiliated with any government or non-governmental organization. The products displayed for sale are procured from suppliers and artisans throughout the Sindh province.</p>

          </div>
        </div>
      </div>
    </div>
  </section>


  )
}

export default Mainbody