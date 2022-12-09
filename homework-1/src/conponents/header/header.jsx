
import Combined from "../../Assets/img/Combined-Shape.png"
import Logo from "../../Assets/img/logojon.png"
import './header.css';

const Header = () => {
   return <header>
      <div className="headers">
         <img src={Logo} alt="" width={236} height={26} />
         <ul className="header-list">
            <li className="header-list-item"><a className="header-list-item-link" href="#">HOME</a></li>
            <li className="header-list-item"><a className="header-list-item-link" href="#">ABOUT US</a></li>
            <li className="header-list-item"><a className="header-list-item-link" href="#">Create your plan</a></li>
         </ul>

      <div className="menyu">
         <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <img src={Combined} alt="" />
         </button>

         <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
               <div class="modal-dialog">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">
                           <img src={Logo} alt="" width={168} height={18} />
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                        <ul className="modal-list">
                           <li className="modal-list-item">
                              <a className="modal-list-item-link" href="#">Home</a>
                           </li>
                           <li className="modal-list-item">
                              <a className="modal-list-item-link" href="#">About Us</a>
                           </li>
                           <li className="modal-list-item">
                              <a className="modal-list-item-link" href="#">Create Your Plan</a>
                           </li>
                        </ul>   
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
}

export default Header