import { useState } from "react";
import '../styles/resumestyle.css'
import { GeneralSection } from "./generalsection";
import { EducationSection } from "./educationsection";
import { ProffesionalSection } from "./ProffesionalSection";


export function Resume(){
    return(
        <>
        <GeneralSection/>
        <EducationSection/>
        <ProffesionalSection/>
        </>
    )
}



