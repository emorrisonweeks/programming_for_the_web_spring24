import "./styles.css"
function App() {
  const isKenOld = "no";

  return (
    <>
    <h1 className={isKenOld === "yes" ? "blue" : "red"}> CSS Demo </h1>
    <p style = {{color: "green"}}>This is some random</p>
    </>
  )
}

export default App
 "o"