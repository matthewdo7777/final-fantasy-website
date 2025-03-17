import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Character from './components/Character'
import Footer from './components/Footer'

const App = () => {
  return (
    //min-h-screen w-screen: makes it full screen
    //overflow-x-hidden: hides scroll bar
    <main className="relative min-h-screen w-screen overflow-x-hidden "> 
      <Navbar />
      <Home />
      <About />
      <Features />
      <Character />
      <Footer />
    </main>
  )
}

export default App