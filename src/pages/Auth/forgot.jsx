import React, { useState } from "react";
import Header from "../../componants/header/header";
import Layout from "../../componants/layout/layout";
import Footer from "../../componants/footer/footer";
import { sendPasswordResetEmail } from "firebase/auth";
import { Auth } from "./configbackend";
const Forgotpassword = () => {
  const [resetPasswordError, setresetPasswordError] = useState({
    message: "",
    isError: false,
  });

  async function ForgotpasswordHandler(e) {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(Auth, e.target[0].value);
    } catch (err) {
      setresetPasswordError((prev) => {
        return {
          ...prev,
          message: err.message,
          isError: true,
        };
      });
    }
  }

  return (
    <>
      <Header />
      <Layout>
        <div style={{display:"block"}}>
        {resetPasswordError.isError && (
          <p className="text-danger text-center fw-bold text-capitalize my-3 py-2 bg-success-subtle">
            {resetPasswordError.message.substring(
              22,
              resetPasswordError.message.length - 2
            )}
          </p>
        )}
        <form onSubmit={ForgotpasswordHandler}>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="form-control"
            placeholder="abc@gmail.com"
          />
          <button type="submit" className="btn btn-primary my-3">
            send Email
          </button>
        </form>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Forgotpassword;
