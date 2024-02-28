import imageLlama from "./assets/images/llamas.jpeg";
import imageAlpaca from "./assets/images/alpacas.jpeg";
import Camelid from "./components/Camelid";
function App() {
  const camelidData = [
     {name: "Llama",  img:<img src = {imageLlama} alt="llama" />,  desc: "Llamas are raised for packing, cart pulling, animal facilitated therapy, guarding livestock, and for their wool."},
     {name: "Alpaca", img:<img src = {imageAlpaca} alt="alpacas" />, desc: "Alpacas are raised primarily for their fleece, which is soft and durable with excellent thermal qualities. They are also great guards for livestock and companionable towards humans."},
    

  ]
  return (
    <div>
      <h2>Camelids</h2>
      <Camelid name ={camelidData[0].name} 
             desc ={camelidData[0].desc} 
             img ={camelidData[0].img}/>
      <Camelid name ={camelidData[1].name} 
             desc ={camelidData[1].desc} 
             img ={camelidData[1].img}/>
    
    </div>
  )
}

export default App
