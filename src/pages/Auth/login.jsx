import Header from "../../componants/header/header";
import Footer from "../../componants/footer/footer";
import Layout from "../../componants/layout/layout";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { Auth } from "./configbackend";
import "./login.css";
import { authChecking } from "../../redux/action/action";
import {  useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db,storage } from "./configbackend";
import { ref, getDownloadURL } from "firebase/storage";
import useWindowSize from "../../componants/media Query/size";
import LoadingSpinner from "../../componants/Loder/loder";
// import { fromString } from "uuidv4";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Minimum eight characters, at least one letter and one number"
    )
    .required("Required"),
});

let data;
const Login = () => {
  const [loginModeError, setloginModeError] = useState({
    message: "",
    isError: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const size = useWindowSize();
  const Navigation = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (values, action) => {
    setIsLoading(true);
    try {
      const data = await setPersistence(Auth, browserSessionPersistence)
      const response = await signInWithEmailAndPassword(Auth, values.email, values.password);
    
      if (response) {
        const isUserstoreSomething = localStorage.getItem(`${values.email}`);
        if (!isUserstoreSomething) {
          const mydatabase = await getDocs(collection(db, "usersData"));
          mydatabase.forEach((query) => {
            if (
              query._document.data.value.mapValue.fields.userEmail
                .stringValue === values.email
            ) {
              const refernce = ref(
                storage,
                `users/${query._document.data.value.mapValue.fields.userProfile.stringValue}`
              );
              
              if (refernce) {
                getDownloadURL(refernce).then((res) => {
                  localStorage.setItem(
                    `${values.email}`,
                    JSON.stringify({
                      url: res,
                      email: values.email,
                      name: query._document.data.value.mapValue.fields.userName
                        .stringValue,
                      cart: [],
                    })
                  );
                  dispatch(
                    authChecking({
                      email: values.email,
                      flag: true,
                    })
                  );
                });
                Navigation("/");
                setIsLoading(false);
              } else {
                dispatch(
                  authChecking({
                    email: values.email,
                    flag: true,
                  })
                );
                localStorage.setItem(
                  `${values.email}`,
                  JSON.stringify({
                    url: "",
                    email: values.email,
                    cart: [],
                    name: query._document.data.value.mapValue.fields.userName
                      .stringValue,
                  })
                );
                Navigation("/");
                setIsLoading(false);
              }
            }
          });
        } else {
          dispatch(
            authChecking({
              email: values.email,
              flag: true,
            })
          );
          Navigation("/");
        }
      }
      setIsLoading(false);
    } catch (err) {
      setloginModeError((prev) => {
        return { ...prev, message: err.message, isError: true };
      });
      setIsLoading(false);
    }
    action.resetForm();
  };
  return (
    <>
      <Header />
      <Layout>
      <div className="container login-divison  d-flex  justify-content-center px-5 ">
        <div className="row loginlayout layout-form margin-divsion">
          <div id="loginform " className="col-md-6 ps-0">
            <h2 className="text-secondary text-center">Login</h2>
            <div className="divider d-flex align-items-center my-3 "></div>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <Field type="email" name="email" className="form-control" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label className="text form-label ">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/forgot/password">Forgot password?</Link>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-warning w-100 mt-5"
                      disabled={isSubmitting}
                    >
                      {isLoading ? <LoadingSpinner /> : "Login"}
                    </button>
                  </div>
                  {loginModeError.isError && (
                    <p className="text-danger text-center fw-bold text-capitalize my-3 py-2 bg-success-subtle">
                      {loginModeError.message}
                    </p>
                  )}

                  <div className="mb-3 mt-3 text-center">
                    Don't have an account?{" "}
                    <span>
                      <Link
                        to={"/Register"}
                        className="link-underline text-danger link-underline-opacity-0   fw-medium "
                      >
                        Register account
                      </Link>
                    </span>
                  </div>
                  {/* login */}
                </Form>
              )}
            </Formik>
          </div>
          {size.width > 780 && (
            <div className="col-md-6 ">
              <img
                src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?w=740&t=st=1693375570~exp=1693376170~hmac=892d4bf06e2e09017cfd10fbd08fdb3ebac06e579e109416cf63d0227cd8d469"
                alt=""
                width={"100%"}
                height={"83%"}        
                
              />
            </div>
          )}
        </div>
      </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Login;
