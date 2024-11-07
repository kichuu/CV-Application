import { useState } from "react";
import '../styles/general.css'
import { FinalSubmit } from "./FinalSubmit";

export function Inputval({val , isFinalSubmit}) {
  const [inputVal, setInputVal] = useState("");
  const [SubmittedVal, setSubmittedVal] = useState("");


  function handleChange(e) {
    setInputVal(e.target.value);
  }

  function handleSubmit() {
    setSubmittedVal(inputVal);
  }

  function handleEdit(){
    setSubmittedVal()
  }

  return (
    <>
      {SubmittedVal ? (
        <>
          <h2>{val} : {SubmittedVal}</h2>
          {!isFinalSubmit && <button onClick={handleEdit} id="edit">Edit</button>}
        </>
      ) : (
        <>
          <label htmlFor={val}>{val}</label>
          <input 
            id={val} 
            value={inputVal} 
            onChange={handleChange} 
            disabled={isFinalSubmit} 
            type="text"
          />
          <button 
            disabled={isFinalSubmit} 
            onClick={handleSubmit}
          >
            Submit
          </button>
        </>
      )}
    </>
  );
}


