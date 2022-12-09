
import Instagram from "../../Assets/img/instagram.png";
import Tiwiter from "../../Assets/img/tiwiter.png";
import Fecbook from "../../Assets/img/facebook.png";
import Footerlogo from "../../Assets/img/footer-logo.png";
import "./footer.css";

const Footer = () => {
   return <footer>
      <div className="footer-cards">
         <div className="footer-cards-text">
         <img className="footer-cards-logo" src={Footerlogo} alt="rasm" width={236} height={26} />
         <ul className="footer-list">
            <li className="footer-list-item">
               <a className="footer-list-item-link" href="#">HOME</a>
            </li>
            <li className="footer-list-item">
               <a className="footer-list-item-link" href="#">ABOUT US</a>
            </li>
            <li className="footer-list-item">
               <a className="footer-list-item-link" href="#">Create your plan</a>
            </li>
         </ul>
         </div>
         <div className="footer-cards-box">
            <a href="#">
               <img src={Fecbook} alt="rasm" width={24} height={24} />
            </a>
            <a className="footer-cards-box-img" href="#">
               <img src={Tiwiter} alt="rasm" width={24} height={24} />
            </a>
            <a className="footer-cards-box-img" href="#">
               <img src={Instagram} alt="rasm" width={24} height={24} />
            </a>
         </div>
      </div>
   </footer>
}

export default Footer