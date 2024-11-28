import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_info}>
        <div className="container">
          <div className="row g-3">
            {/* about us  */}
            <div className="col-md-3">
              <div className={styles.about_us}>
                <h5>About Us</h5>
                <div>
                  <p>
                    ShopEZ is your one-stop destination for effortless online
                    shopping. With a user-friendly interface and a comprehensive
                    product catalog, finding the perfect items has never been
                    easier. Seamlessly navigate through detailed product
                    descriptions, customer reviews, and available discounts to
                    make informed decisions. Enjoy a secure checkout process and
                    receive instant order confirmation. For sellers, our robust
                    dashboard provides efficient order management and insightful
                    analytics to drive business growth. Experience the future of
                    online shopping with ShopEZ today.
                  </p>
                </div>
              </div>
            </div>
            {/* information  */}
            <div className="col-md-3">
              <div className={styles.information}>
                <h5>Information</h5>
                <div>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>FAQs</li>
                  <li>Privacy Policy</li>
                  <li>Refund policy</li>
                  <li>Cookie Policy</li>
                </div>
              </div>
            </div>
            {/* customer service  */}
            <div className="col-md-3">
              <div className={styles.information}>
                <h5>CUSTTOMER SERVICE</h5>
                <div>
                  <li>My Account</li>
                  <li>Support Center</li>
                  <li>Terms & Conditions</li>
                  <li>Returns & Exchanges</li>
                  <li>Shipping & Delivery</li>
                </div>
              </div>
            </div>
            {/* the optimal newsletter  */}
            <div className="col-md-3">
              <div className={styles.newsletter}>
                <h5>THE OPTIMAL NEWSLETTER</h5>
                <div>
                  <p>
                    An optimal newsletter for ShopEz, which focuses on home
                    decor items and handmade crafts, should strike a balance
                    between visually appealing content and valuable information
                    for subscribers. Here's a structure to ensure engagement and
                    conversions.
                  </p>
                  <input type="email" />
                  <button>
                    <AiOutlineMail />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>© 2024 Optimal. All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
