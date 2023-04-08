import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Work from './components/Work'
import Header from './components/Header'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {
  return (
    <div className="bg-site bg-cover bg-no-repeat overflow-hidden">
      <header>
        <Header />
        <Banner />
        <Navbar />
      </header>
      <main>
        <About />
        <Services />
        <Work />
        <Contact />
        <div className="h-[4000px]"></div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
