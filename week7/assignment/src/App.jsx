//making sure the styling and row information imports
import "./App.css";
import {WesRow} from "./WesRow.jsx";
//Setting up my array of films
function App() {
  const wesAndersonFilms = [
    {
      filmName: "Rushmore", 
      description: "A teenager at Rushmore Academy falls for a much older teacher and befriends a middle-aged industrialist. Later, he finds out that his love interest and his friend are having an affair, which prompts him to begin a vendetta.",
      releaseYear: "Released in 1998",
      image: "./rushmore.jpg",
      //will result in yellow if true and black when false
      usesAnimation: false,
      //will result in bold when true and regular when false 
      criterionCollection: true,
    },
    {
      filmName: "The Life Aquatic", 
      description: "With a plan to exact revenge on a mythical shark that killed his partner, Oceanographer Steve Zissou (Bill Murray) rallies a crew that includes his estranged wife, a journalist, and a man who may or may not be his son.",
      releaseYear: "Released in 2004",
      image: "./thelifeaquatic.jpg",
      usesAnimation: true,
      criterionCollection: true,
    },
    {
      filmName: "Fantastic Mr. Fox", 
      description: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      releaseYear: "Released in 2009",
      image: "./fantasticmisterfox.jpg",
      usesAnimation: true,
      criterionCollection: true,
    },
    {
      filmName: "Moonrise Kingdom", 
      description: "Two 12-year-olds, who live on an island, fall in love with each other and elope into the wilderness. While people set out on a search mission, a violent storm approaching them catches their attention.",
      releaseYear: "Released in 2012",
      image: "./moonrisekingdom.jpg",
      usesAnimation: false,
      criterionCollection: true,
    },
    {
      filmName: "The Grand Budapest Hotel", 
      description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      releaseYear: "Released in 2014",
      image:"./thegrandbudapesthotel.jpg",
      usesAnimation: false,
      criterionCollection: false,
    },
    {
      filmName: "Isle of Dogs", 
      description: "In a dystopian near-future Japan, a dog-flu virus spreads throughout the canine population. Though one scientist, Professor Watanabe (Akira Ito), is close to finding a cure, but overruling him the authoritarian mayor of Megasaki City, Kobayashi (Kunichi Nomura), signs a decree banishing all dogs to Trash Island.",
      releaseYear: "Released in 2018",
      image: "./isleofdogs.jpeg",
      usesAnimation: true,
      criterionCollection: false,
    },
    {
      filmName: "The French Dispatch", 
      description: "A love letter to journalists set in an outpost of an American newspaper in a fictional 20th-century French city that brings to life a collection of stories published in The French Dispatch.",
      releaseYear: "Released in 2021",
      image: "./thefrenchdispatch.jpeg",
      usesAnimation: true,
      criterionCollection: false,
    },
  ]
  //table details
  return(
    <>
    <h1>My Wes Anderson Blu-Ray and DVD Collection</h1>
    <p>These are a few of my favorite films.</p>
    <table className="films-table">
      <thead>
      <tr>
        <th>Name of Film</th>
        <th>Description</th>
        <th>Release Date</th>
        <th>Image</th>
      </tr>
      </thead>
      <tbody>
        {wesAndersonFilms.map((film, index) => {
          return (
            <WesRow
            key={film.image}
            odd={index % 2 === 0}
            filmName={film.filmName}
            description={film.description}
            releaseYear={film.releaseYear}
            image={film.image}
            usesAnimation={film.usesAnimation}
            criterionCollection={film.criterionCollection}
            />
          )
        })}
      </tbody>
    </table>
    </>
  )
}

export default App
