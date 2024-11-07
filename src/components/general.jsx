import { useState } from "react";
import '../styles/general.css'

export function Inputval({val}) {
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
      {SubmittedVal && <> <h2>{SubmittedVal} <button onClick={handleEdit} id="edit">edit</button> </h2> </>}
      {!SubmittedVal && (
        <>
          <label htmlFor="val">{val}</label>
          <input id={val} value={inputVal} onChange={handleChange} type="text" />
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </>
  );
}
