import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Work from './components/Work'
import Header from './components/Header'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import AirPlane from './components/AirPlane'

function App() {
  return (
    <div className="bg-site bg-cover bg-fixed overflow-hidden">
      <header>
        <Header />
        <Banner />
        <Navbar />
      </header>
      <main>
        <About />
        <Work />
        <Contact />
        <div></div>
      </main>
      <footer></footer>
      <AirPlane />
    </div>
  )
}

export default App
