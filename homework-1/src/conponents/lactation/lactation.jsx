import "./lactation.css";
import Cingdom from "../../Assets/img/cingdom.png";
import Canada from "../../Assets/img/canada.png";
import Australia from "../../Assets/img/australia.png";

const Lactation = () => {
  return (
    <section>
      <div className="lactation">
        <p className="lactation-copy">Our headquarters</p>
        <ul className="lactation-list">
          <li className="lactation-list-item">
            <img className="lactation-list-item-img" src={Cingdom} alt="rasm" />
            <h4 className="lactation-list-item-title">United Kingdom</h4>
            <p className="lactation-list-item-copy">
              68 Asfordby <br /> Rd Alcaston <br /> SY6 1YA <br /> +44 1241 918425
            </p>
          </li>
          <li className="lactation-list-item">
            <img className="lactation-list-item-img" src={Canada} alt="rasm" />
            <h4 className="lactation-list-item-title">Canada</h4>
            <p className="lactation-list-item-copy">
              1528 Eglinton Avenue <br /> Toronto <br /> Ontario M4P 1A6 <br /> +1 416 485 2997
            </p>
          </li>
          <li className="lactation-list-item">
            <img
              className="lactation-list-item-img"
              src={Australia}
              alt="rasm"
            />
            <h4 className="lactation-list-item-title">Australia</h4>
            <p className="lactation-list-item-copy">
              36 Swanston Street <br /> Kewell <br /> Victoria <br /> +61 4 9928 3629
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Lactation;
