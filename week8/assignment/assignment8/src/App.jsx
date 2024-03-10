import { useState } from 'react'

import './App.css'
import {Masthead} from "./Masthead/Masthead";
import {ItemCard} from "./ItemCard/ItemCard";
import {nanoid} from "nanoid";

function App() {
  const[films, setFilms] = useState([
    {
      filmName: "Rushmore", 
      description: "A teenager at Rushmore Academy falls for a much older teacher and befriends a middle-aged industrialist. Later, he finds out that his love interest and his friend are having an affair, which prompts him to begin a vendetta.",
      releaseYear: "Released in 1998",
      image: "./rushmore.jpg",
      usesAnimation: false,
      criterionCollection: true,
      id: "1",
    },
    {
      filmName: "The Life Aquatic", 
      description: "With a plan to exact revenge on a mythical shark that killed his partner, Oceanographer Steve Zissou (Bill Murray) rallies a crew that includes his estranged wife, a journalist, and a man who may or may not be his son.",
      releaseYear: "Released in 2004",
      image: "./thelifeaquatic.jpg",
      usesAnimation: true,
      criterionCollection: true,
      id: "2",
    },
    {
      filmName: "Fantastic Mr. Fox", 
      description: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      releaseYear: "Released in 2009",
      image: "./fantasticmisterfox.jpg",
      usesAnimation: true,
      criterionCollection: true,
      id: "3",
    },
    {
      filmName: "Moonrise Kingdom", 
      description: "Two 12-year-olds, who live on an island, fall in love with each other and elope into the wilderness. While people set out on a search mission, a violent storm approaching them catches their attention.",
      releaseYear: "Released in 2012",
      image: "./moonrisekingdom.jpg",
      usesAnimation: false,
      criterionCollection: true,
      id: "4",
    },
    {
      filmName: "The Grand Budapest Hotel", 
      description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      releaseYear: "Released in 2014",
      image:"./thegrandbudapesthotel.jpg",
      usesAnimation: false,
      criterionCollection: false,
      id: "5",
    },
    {
      filmName: "Isle of Dogs", 
      description: "In a dystopian near-future Japan, a dog-flu virus spreads throughout the canine population. Though one scientist, Professor Watanabe (Akira Ito), is close to finding a cure, but overruling him the authoritarian mayor of Megasaki City, Kobayashi (Kunichi Nomura), signs a decree banishing all dogs to Trash Island.",
      releaseYear: "Released in 2018",
      image: "./isleofdogs.jpeg",
      usesAnimation: true,
      criterionCollection: false,
      id: "6",
    },
    {
      filmName: "The French Dispatch", 
      description: "A love letter to journalists set in an outpost of an American newspaper in a fictional 20th-century French city that brings to life a collection of stories published in The French Dispatch.",
      releaseYear: "Released in 2021",
      image: "./thefrenchdispatch.jpeg",
      usesAnimation: true,
      criterionCollection: false,
      id: "7",
    }
  ]);

  return (
    <div className="page">
     <Masthead />
     <div className="collection">
      {/*deck map goes here */}
      {/*use ItemCard component in loop*/}
      {films.map((film) => {
        return (
          <ItemCard 
          key={film.id} 
          deleteFn={deleteCard}
          duplicateFN={duplicateCard}
          {...films}/>
        )
      })}
     </div>
    </div>
  )
}

export default App
