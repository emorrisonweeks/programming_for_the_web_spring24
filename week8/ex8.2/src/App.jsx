import { useState } from 'react'
import './App.css'
import AnimalsComponent from './animalsComponent';

function App() {
  const [headline, setHeadline] = useState("Animal");
  const [animals, setAnimals] = useState([
    "Abyssinian Guinea Pig",
    "Badger",
    "Capybara", 
    "Dachshund",
    "Elephant Seal",
    "Fox",
    "Goat",
    "Hedgehog",
    "Indri",
    "Jaguar",
    "Koala",
    "Lemming",
    "Muskrat",
    "Newt", 
    "Otter",
    "Penguin",
    "Rabbit",
    "Sloth",
    "Tamarin", 
    "Uakari",
    "Vampire Bat",
    "Wombat",
    "Xingu River Ray",
    "Yellow-Throated Marten",
    "Zebra",
  ]);
  function deleteState(animalName) {
    const updatedArray = animals.filter((state) => {
      return state !== animalName;
    }); 
    setAnimals(updatedArray);
  }
  function focusState(animalName) {
    setHeadline(animalName)
  }

  return (
    <>
      <h1>{`${headline}s are the coolest!`}</h1>
      {animals.map((loopAnimal) => {
       return <AnimalsComponent 
       key={loopAnimal} 
       animalName={loopAnimal}
       deleteFn={deleteState} 
       focusFn={focusState}/>
      })}
    </>
  )
}

export default App
