import "./footer.css";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsGoogle,
  BsInstagram,
} from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="container-fluid  bg-dark footer-bottom align-items-center d-flex justify-content-around">
        <div>
          <a className="icon-link " href="#">
            <BsFacebook />
          </a>
          <a className="icon-link ms-4" href="#">
            <BsTwitter />
          </a>
          <a className="icon-link ms-4" href="#">
            <BsGithub />
          </a>
          <a className="icon-link ms-4" href="#">
            <BsLinkedin />
          </a>
          <a className="icon-link ms-4" href="#">
            <BsGoogle />
          </a>
          <a className="icon-link ms-4" href="#">
            <BsInstagram />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
