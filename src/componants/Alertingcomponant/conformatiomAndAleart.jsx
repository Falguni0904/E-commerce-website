import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Layout from "../layout/layout";
import Targetbtn from "../../pages/payment/targetbtn";
// import "./conformatiomAndAleart.css"

const ConfimationAndAlert = ({ImageInfo,message,btnText,route}) => {
  return (
    <>
      <Header />
      <Layout>
      <div className="container d-flex justify-content-center flex-column containerSize  align-items-center my-5">
        <img
          src={ImageInfo.url}
          alt={ImageInfo.alt}
          width="200px"
        />
        <p className="display-3 text-center text-capitalize">
          {message}
        </p>
        <Targetbtn route={route} btnText={btnText} />
      </div>
      </Layout>
      <Footer />
    </>
  );
};

export default ConfimationAndAlert;