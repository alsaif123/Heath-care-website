import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mt-5">
      <div className="footer">
        <div className="footer_sub">
          <h4>About M.Pharmacies</h4>
          <br />
          <p>ADD 01: 5535 Brionna Village Suite 166</p>
          <p>ADD 02: 1603 Johnston Fort Apt. 229</p>
          <p>EMAIL: alsaif200200@gmail.com</p>
          <p>TEL: (+00)-456 789 000</p>
        </div>
        <div className="footer_sub">
          <h4>Support</h4>
          <br />
          <p>TECHNICAL SUPPORT</p>
          <p>DOCUMENTS & FORMS</p>
          <p>RETURN GOODS POLICY</p>
          <p>CONTACT US</p>
        </div>
        <div className="footer_sub">
          <h4>Products</h4>
          <br />

          <p>PERIOPERATIVE SUPPLIES</p>
          <p>INCONTINENCE CARE</p>
          <p>PHARMA & NUTRITION</p>
          <p>INFECTION PREVENTION</p>
          <p>RESPIRATORY CARE </p>
        </div>

        <div  className="footer_sub">
          <h4> Solutions</h4>
          <p>CLINICAL SOLUTIONS</p>
          <p>SUPPLY SOLUTIONS</p>
          <p>NEWS & MEDIA</p>
          <p>CUSTOMER TESTIMONIALS</p>
        </div>
      </div>
      <p>
        <small>© 2017 Medicare Pharmacies. All Rights Reserved.</small>
      </p>
    </div>
  );
};

export default Footer;
