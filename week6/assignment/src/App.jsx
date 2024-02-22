
import './App.css'

function App() {
  /*llama facts array*/
  const llamaFacts = [
    "llamas can live 20-30 years",
    "llamas can be trained as therapy animals",
    "llamas can communicate with each other by humming",
    "llamas sometimes adopt sheep and goats into their herds",
    ];
  /*to be used in turnary*/
  const llamaConditionTrue = "Llamas will spit 10 ft";
  const llamaConditionFalse = "Llamas might spit 10 ft";
  const llamasSpit = "10 ft";
  return (
    <>
      <div>
       <header></header>
      <h1>Llama Facts</h1>
      <ul>
        {/*basic llama facts from array*/} 
        <li>{llamaFacts[0]}</li>
        <li>{llamaFacts[1]}</li>
        <li>{llamaFacts[2]}</li>
        <li>{llamaFacts[3]}</li>
        {/*turnary llama fact*/} 
        <li>{llamasSpit === "10 ft" ? (<>{llamaConditionTrue}</>) : (<>{llamaConditionFalse}</>)}
        </li>
      </ul>
      </div>
      
    </>
  )
}

export default App
