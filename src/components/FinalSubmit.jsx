import { useState } from "react"
import { Inputval } from "./general"

export function FinalSubmit({submit}){
    const [isFinalSubmit , setFinalSubmit] = useState(false)
    function finalHandle(){
        setFinalSubmit(true)
    }

    
    return(
        <>
    {!isFinalSubmit && ( <button onClick={finalHandle}>{submit}</button>)}
    {isFinalSubmit && <h2>done</h2>}
    <Inputval val="Name" isFinalSubmit={isFinalSubmit} />
      <Inputval val="Email" isFinalSubmit={isFinalSubmit} />
      <Inputval val="Phone Number" isFinalSubmit={isFinalSubmit} />
      <Inputval val="Phone Number" isFinalSubmit={isFinalSubmit} />
    </>
    )

}