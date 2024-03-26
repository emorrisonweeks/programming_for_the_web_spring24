import{useState} from "react";
import PropTypes from "prop-types";
import "./NewWesForm.css";
import "clsx"


export function NewWesForm({addCardFn}) {
    //this is the initial data, which will hep us reset when needed
    const initialCardSetting = {
        name: "", 
        description: "",
        year: "",
        image: "",
        usesAnimation: false,
        criterionCollection: false,
    };
    //set control for adding new items
    const [newCard, setNewCard] = useState(initialCardSetting);
    //for validation
    const [errorObj, setErrorObj] = useState({
        name:"", 
        image: "",
    });
    //validating form
    function validateForm(newCard){
        let valid = true;
        if(!newCard.name){
            //set error Obj film name prop to error message
            setErrorObj((prevErrorObj)=>{
                return{
                    ...prevErrorObj,
                    name: "The film name is required."
                }
            })
            valid = false;
        }
        if(!newCard.image){
            //set error Obj image prop to error message
            setErrorObj((prevErrorObj)=>{
                return{
                    ...prevErrorObj,
                    image: "The film image is required."
                }
            })
            valid = false;
        }
        return valid;  
    }

    //set new data in form
    function changeHandler(event) {

        if(event.target.criterionCollection === "criterionCollection"){
        setNewCard((prevCard) => {
            return {
                ...prevCard,
                [event.target.criterionCollection]: event.target.value
            }
        })
    } else {
        setNewCard((prevItemCard) => {
            return {
                ...prevItemCard,
                [event.target.name]: event.target.value
            }
        })
        }
    }

    //handle submit functionality
    function submitHandler(event){
        event.preventDefault();
        console.log({newCard});
        if(validateForm(newCard)){
            //send card to App
            addCardFn(setNewCard)
            //reset values
            setNewCard(initialCardSetting)
        }
    }
    return (
        <>
        <form className="new-wes-form-wrapper" onSubmit={submitHandler}>
            <h2 className="form_title">
                Add a film to the Wes Anderson collection! 
            </h2>
            <fieldset>
                <legend className="fieldset-heading">Film Details</legend>
                <div
                className={{"form-group": true, "error": errorObj.name}}>
                    <label htmlFor="name">
                        Film Name</label>
                        <input 
                        type="text" 
                        name="name"
                        id="name" 
                        value={newCard.name}
                        onChange={changeHandler}
                        onBlur={()=> {
                            if (newCard.name) {
                                setErrorObj
                                ((prevErrorObj)=> {
                                    return {
                                        ...prevErrorObj,
                                        name:""
                                    }
                                }
                                
                            )} 
                            
                        }}
                        />
                        {errorObj.name && (
                            <>
                                <br />
                                <small>{errorObj.name}</small>
                            </>
                        )}
                </div>
                <div
                className="form-group">
                    <label htmlFor="description">Film Description</label>
                    <input 
                    type="text" 
                    name="description"
                    id="description" 
                    value={newCard.description}
                    onChange={changeHandler}
                    />
                    
                </div>

                <div
                className="form-group">
                    <label htmlFor="year">Release Year</label>
                    <input 
                    type="year" 
                    name="year"
                    id="year" 
                    value={newCard.year}
                    onChange={changeHandler}
                    />
                </div>
                <div
               className={{"form-group": true, "error": errorObj.image}}>
                    <label htmlFor="image">Image URL</label>
                    <input 
                    type="text" 
                    name="image"
                    id="image" 
                    value={newCard.image}
                    onChange={changeHandler}
                    onBlur={()=> {
                        if (newCard.image) {
                            setErrorObj
                            ((prevErrorObj)=> {
                                return {
                                    ...prevErrorObj,
                                    image:""
                                }
                            }
                            
                            )} 
                        
                    }}
                    />
                        {errorObj.image && (
                            <>
                                <br />
                                <small>{errorObj.image}</small>
                            </>
                        )}
                </div>
            </fieldset>
            <fieldset>
            <legend className="fieldset-heading">
                Check if True
            </legend>
            <div className="form-group radio-group">
                <label htmlFor="criterionCollection">
                    This film is part of the Criterion Collection.
                <input
                type ="checkbox"
                name="criterionCollection"
                id="criterionCollection"
                onChange={changeHandler}
                checked={newCard.criterionCollection}
                />
                </label>
            </div>
            </fieldset>
            
            <button type="submit" disabled={errorObj.name || errorObj.image}>
                Add Film
            </button>    
        </form> 
        </>
    )
}

NewWesForm.propTypes = {
    addCardFn: PropTypes.func.isRequired
}