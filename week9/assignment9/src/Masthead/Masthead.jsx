import mastheadImg from "../assets/masthead.jpeg";
import "./Masthead.css";
export default function Masthead() {
    return (
        <div className="masthead">
            <img src={mastheadImg} alt="Emily's Wes Anderson Film Collection" />
            <h1>Emily&apos;s Wes Anderson Film Collection</h1>
        </div>
    )
}