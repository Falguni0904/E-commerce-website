import Header from "../../componants/header/header";
import Footer from "../../componants/footer/footer";
import ProductBill from "./bill";
import { useSelector } from "react-redux";
import "./cart.css";
import AddedProduct from "./cart_product";
import ConfimationAndAlert from "../../componants/Alertingcomponant/conformatiomAndAleart";
import useWindowSize from "../../componants/media Query/size";
const Cart = () => {
  const size = useWindowSize()
  const cartData = useSelector((state) => state.cartProduct);

  if (cartData.length === 0) {
    return (
      <>
        <ConfimationAndAlert
          ImageInfo={{
            url: "https://cdn-icons-png.flaticon.com/512/2762/2762885.png",
            alt: "empty cart",
          }}
          route={"/"}
          message={"cart is empty"}
          btnText={"return to shopping"}
        />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container d-flex flex-md-row flex-column" style={{height:"auto"}}>
        <AddedProduct list={cartData} />
        <ProductBill
          list={cartData}
          routeForPay={"/add-address/payment"}
          text={"Place Order"}
        />
      </div>
      <Footer />
    </>
  );
};

export default Cart;