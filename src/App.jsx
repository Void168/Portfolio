import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Work from './components/Work'
import Header from './components/Header'
import Banner from './components/Banner'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="bg-site bg-cover bg-fixed overflow-hidden h-[4500px]">
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
    </div>
  )
}

export default App
