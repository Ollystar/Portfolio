import { useState } from 'react'
import './App.css'
import Header from './static/Header'
import Footer from './static/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Projects from './pages/Portfolio'

function App() {

  return (
    <>
      <Header/>

      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
