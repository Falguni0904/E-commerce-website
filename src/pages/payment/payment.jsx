import React, { useEffect, useState } from "react";
import Header from "../../componants/header/header";
import Footer from "../../componants/footer/footer";
import Layout from "../../componants/layout/layout";
import PaymentForm from "./Addressfrom";
// import "./payment.css";
const Payment = () => {
  const citiesInIndia = [
    "Mumbai, Maharashtra",
    "Delhi, National Capital Territory of Delhi",
    "Bangalore, Karnataka",
    "Hyderabad, Telangana",
    "Chennai, Tamil Nadu",
    "Kolkata, West Bengal",
    "Pune, Maharashtra",
    "Ahmedabad, Gujarat",
    "Jaipur, Rajasthan",
    "Lucknow, Uttar Pradesh",
    "Kanpur, Uttar Pradesh",
    "Nagpur, Maharashtra",
    "Patna, Bihar",
    "Indore, Madhya Pradesh",
    "Thane, Maharashtra",
    "Bhopal, Madhya Pradesh",
    "Visakhapatnam, Andhra Pradesh",
    "Vadodara, Gujarat",
    "Coimbatore, Tamil Nadu",
    "Ludhiana, Punjab",
    "Kochi, Kerala",
    "Agra, Uttar Pradesh",
    "Madurai, Tamil Nadu",
    "Varanasi, Uttar Pradesh",
    "Meerut, Uttar Pradesh",
    "Nashik, Maharashtra",
    "Rajkot, Gujarat",
    "Srinagar, Jammu and Kashmir",
    "Amritsar, Punjab",
    "Allahabad, Uttar Pradesh",
  ];

  return (
    <>
      <Header />
      <Layout>
      <PaymentForm cities={citiesInIndia} />
      </Layout>
      <Footer />
    </>
  );
};

export default Payment;