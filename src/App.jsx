
import './App.css'
import {BrowserRouter, Route, Routes}from "react-router-dom"
import Home from "./pages/Home"
import {About} from "./pages/About.jsx"
import { Skills } from './pages/Skills.jsx'
import { Project } from './pages/Project.jsx'
import { Contact } from './pages/Contact.jsx'



function App() {

9791107851
  return (
   <main>
    <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Skills" element={<Skills/>}/>
      <Route path="/Projects" element={<Project/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>

   </main>
   
  )
}

export default App
