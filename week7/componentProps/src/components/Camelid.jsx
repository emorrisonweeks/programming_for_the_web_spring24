import "./camelids.css";


function Camelid({name, img, desc}) {
    console.log(name)
    return(
        <div className = "camelidCard">
            <h1>{name}</h1>
            <p>{img}</p>
            <p>{desc}</p>
            <div style ={{
                width: "100px",
                height: "100px",

            }}></div>
        </div>
    );
}
export default Camelid; 