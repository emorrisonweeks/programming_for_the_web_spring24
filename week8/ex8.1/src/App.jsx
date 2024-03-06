import './App.css'
import {useState} from "react";
import llamas from "./assets/llamas.jpg";
import alpacas from "./assets/alpacas.jpg";
import Animal from "./animal";

function App() {

  const [camelid, setCamelid] = useState(llamas); 
 


  return (
    <>
      <div>
       <Animal url = {camelid} />
       </div>
       <h1>Camelids</h1>
       <div className ="card">
          <button onClick= {() => {
            console.log("click llama");
            setCamelid(llamas);
           }}>
            Llama
            </button>

            <button onClick= {() => {
            console.log("click alpaca");
            setCamelid(alpacas);
           }}>
            Alpaca
            </button>
      </div>
      <div>
      
      </div>
    </>
  )
}

export default App
