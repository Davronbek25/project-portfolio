import React from 'react'
import Info from './Components/Info'
import About from './Components/About'
import Interests from './Components/Interests'
import Footer from './Components/Footer'

export default function App() {
    return(
        <div id="app">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}