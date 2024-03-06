import "./App.css";
import {filmRow} from "./wesRow.jsx";

function App() {
  const wesAndersonFilms = [
    {
      filmName: "Rushmore", 
      description: "",
      releaseYear: "Released in 1998",
      //image: 
      usesAnimation: false,
      criterionCollection: true,
    },
    {
      filmName: "The Life Aquatic", 
      description: "",
      releaseYear: "Released in 2004",
      //image: 
      usesAnimation: true,
      criterionCollection: true,
    },
    {
      filmName: "Fantastic Mr. Fox", 
      description: "",
      releaseYear: "Released in 2009",
      //image: 
      usesAnimation: true,
      criterionCollection: true,
    },
    {
      filmName: "Moonrise Kingdom", 
      description: "",
      releaseYear: "Released in 2012",
      //image: 
      usesAnimation: false,
      criterionCollection: true,
    },
    {
      filmName: "The Grand Budapest Hotel", 
      description: "",
      releaseYear: "Released in 2014",
      //image: 
      usesAnimation: false,
      criterionCollection: false,
    },
    {
      filmName: "Isle of Dogs", 
      description: "",
      releaseYear: "Released in 2018",
      //image: 
      usesAnimation: true,
      criterionCollection: false,
    },
    {
      filmName: "The French Dispatch", 
      description: "",
      releaseYear: "Released in 2021",
      //image: 
      usesAnimation: true,
      criterionCollection: false,
    },
  ];
  
  return(
    <>
    <h1>My Wes Anderson Blu-Ray and DVD Collection</h1>
    <p>Show films here</p>
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
            <filmRow
            key={film.image}
            odd={index % 2 === 0}
            filmName={film.filmName}
            description={film.filmDescription}
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
