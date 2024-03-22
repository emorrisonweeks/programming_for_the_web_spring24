import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [beige, setBeige] = useState(true);
  const [white, setWhite] = useState(true);
  const [fawn, setFawn] = useState(true);
  const [black, setBlack] = useState(true);
  const [textInputs, setTextInputs] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    state:"",
    country:"",
  })
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log({firstName, lastName, state, country, beige, white, fawn, black})
  }
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  return (
    <>
     <h1>Alpaca Fan Club</h1>
     <form onSubmit={handleSubmit}>
     <fieldset>
          <legend>Personal Information</legend>
          <div>
            <label className="required" htmlFor="firstName">
              First Name:
            </label>
            <input
            id="firstName"
            type="text"
            name="firstName"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value)
            }}
            onBlur={() => {
              if(!firstName) {
                setFirstNameError("this field is required")
              }
            }}
            />
            {firstNameError && (
              <>
              <br />
              <span className="error">{firstNameError}</span>
              </>
            )}
          </div>
          <div>
            <label className="required" htmlFor="lastName">
              Last Name:
            </label>
            <input
            id="lastName"
            type="text"
            name="lastName"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value)
            }}
            onBlur={() => {
              if(!firstName) {
                setLastNameError("this field is required")
              }
            }}
            />
            {lastNameError && (
              <>
              <br />
              <span className="error">{lastNameError}</span>
              </>
            )}
          </div>
          <div>
            <label htmlFor="streetAddress">
              Street Address:
            </label>
            <input
            id="streetAddress"
            type="text"
            name="streetAddress"
            value={streetAddress}
            onChange={(event) => {
              setStreetAddress(event.target.value)
            }}
            />
          </div>
          <div>
            <label htmlFor="state">
              State or Province:
            </label>
            <input
            id="state"
            type="text"
            name="state"
            value={state}
            onChange={(event) => {
              setState(event.target.value)
            }}
            />
          </div>
          <div>
            <label htmlFor="country">
              Country:
            </label>
            <input
            id="country"
            type="text"
            name="country"
            value={country}
            onChange={(event) => {
              setCountry(event.target.value)
            }}
            />
          </div>
          </fieldset>
          <fieldset>
          <legend>Favorite Alpaca Colors</legend>
          <div>
            <label htmlFor="likesFawn">Fawn</label>
            <input
            type="checkbox"
            name="likesFawn"
            id="likesFawn"
            checked={fawn}
            onChange={
              () => {
                setFawn(!fawn)
              }
            }
            />
          </div>
          <div>
            <label htmlFor="likesBeige">Beige</label>
            <input
            type="checkbox"
            name="likesBeige"
            id="likesBeige"
            checked={beige}
            onChange={
              () => {
                setBeige(!beige)
              }
            }
            />
          </div>
          <div>
            <label htmlFor="likesWhite">White</label>
            <input
            type="checkbox"
            name="likesWhite"
            id="likesWhite"
            checked={white}
            onChange={
              () => {

                setWhite(!white)
              }
            }
            />
          </div>
          <div>
            <label htmlFor="likesBlack">Black</label>
            <input
            type="checkbox"
            name="likesBlack"
            id="likesBlack"
            checked={black}
            onChange={
              () => {
                setBlack(!black)
              }
            }
            />
          </div>

          </fieldset>
          <button type="submit"> Submit </button>
     </form>
    </>
  )

}

export default App


