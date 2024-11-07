import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Inputval } from './components/general'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id='container'>
    <h1>general information</h1>
    <div id='general'>
      
    <Inputval val = "Name"/>
    <Inputval val = "Email"/>
    <Inputval val = "Phone Number"/>
    </div>
    </div>
  </StrictMode>,
)
