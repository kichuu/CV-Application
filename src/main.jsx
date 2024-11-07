import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Inputval } from './components/general'
import { FinalSubmit } from './components/FinalSubmit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id='container'>
    <h1>General Information</h1>
    <div id='general'>
    {/* <Inputval val = "Name"/>
    <Inputval val = "Email"/>
    <Inputval val = "Phone Number"/> */}
    </div>
    <FinalSubmit submit="Final Submit"/>
    </div>
  </StrictMode>,
)
