import PropTypes from "prop-types";
import "./itemCard.css";
import criterion from "../assets/criterion.png";
import seahorse from "../assets/seahorse.png";
import trashicon from "../assets/trashicon.svg";

export default function ItemCard ({
    filmName, 
    description,
    releaseYear,
    usesAnimation,
    criterionCollection,
    image,
    id,
    deleteFn,
    duplicateFn,
    
}) {
  return (
    <div classname="filmCard">
        {criterionCollection && <div className="criterionCollection"> <img src={criterion} title="This film is part of the Criterion Collection." /></div>}
        {usesAnimation && <div className="usesAnimation"> <img src={seahorse} title="This film features animation." /></div>}
        <div className="cardImg">
          <img src={image} alt={poster} />
        </div>
        <div className="cardTitle">{filmName}</div>
        <div className="actions">
          <a href="#" onClick={(evt) => {
            evt.preventDefault();
            deleteFn(id)
          }}><img src={trashicon} /></a>
          <a href="#" onClick={(evt) => {
            evt.preventDefault();
            duplicateFn(id)
          }}></a>
          </div>
        </div>
   
  )
}
ItemCard.propTypes = {
    filmName: PropTypes.string, 
    description: PropTypes.string,
    releaseYear: PropTypes.string,
    usesAnimation: PropTypes.bool, 
    criterionCollection: PropTypes.bool,
    image: PropTypes.string,
    id: PropTypes.string,
    duplicateFn: PropTypes.func,
    deleteFN: PropTypes.func,
}