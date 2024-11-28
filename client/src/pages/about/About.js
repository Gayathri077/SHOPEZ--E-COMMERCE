import React, { Fragment } from "react";
import {
  FcAutomotive,
  FcCurrencyExchange,
  FcCustomerSupport,
  FcRating,
} from "react-icons/fc";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import MetaData from "../../components/MetaData";
import styles from "./About.module.scss";

const About = () => {
  const abouts = [
    {
      icon: <FcAutomotive size={60} />,
      title: "Free Delevery",
      description:
        "Enjoy hassle-free shopping with free delivery on all orders, straight to your doorstep.",
    },
    {
      icon: <FcCurrencyExchange size={60} />,
      title: "100% Cash Back",
      description:
        "Shop with confidence! Get a full refund if you're not satisfied with your purchase.",
    },
    {
      icon: <FcRating size={60} />,
      title: "Quality Product",
      description:
        "We prioritize excellence, offering only top-quality products to meet your expectations.",
    },
    {
      icon: <FcCustomerSupport size={60} />,
      title: "24/7 Support",
      description:
        "Need help? Our dedicated support team is available around the clock to assist you.",
    },
  ];
  return (
    <Fragment>
      <MetaData title={"About"} />
      <Navbar />
      <div className={styles.about}>
        <div className={styles.about_title}>
          <div className="container">
            <h3>About Us</h3>
          </div>
        </div>
        <div className={styles.about_info}>
          <div className="container mb-5">
            <div className="row g-3 p-3">
              <div className="col-md-6">
                <div className={styles.image}>
                  <img
                    src="https://res.cloudinary.com/mehedi08h/image/upload/v1648616684/shopx/blog_post_3_wchde0.jpg"
                    alt="About"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.info}>
                  <h4>Know About Our Ecommerce Business, History</h4>
                  <p>
                    ShopEZ is an innovative e-commerce platform offering a
                    seamless shopping experience for buyers and efficient tools
                    for sellers. With a user-friendly interface, personalized
                    recommendations, and secure checkouts, ShopEZ makes finding
                    the perfect products easy. Sellers benefit from advanced
                    dashboards and analytics, driving business growth. ShopEZ:
                    Simplifying online shopping since 2018.
                  </p>
                  <button>Contact Us</button>
                </div>
              </div>
            </div>

            <div className={styles.features}>
              <h3 className="text-center">Our Features</h3>

              <div className="row g-3">
                <div className="col-md-10 col-md-offset-2 mx-auto">
                  <div className="row mt-4">
                    {abouts.map((about, index) => (
                      <div className="col-md-3" key={index}>
                        <div className={styles.feature}>
                          <span> {about.icon}</span>
                          <h5>{about.title}</h5>
                          <p>{about.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default About;
