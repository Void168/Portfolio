import About from './components/About'
import Contact from './components/Contact'
import Work from './components/Work'
import Header from './components/Header'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import AirPlane from './components/AirPlane'
import Clock from './components/Clock/Clock'
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <AppProvider>
      <div className="bg-site bg-cover bg-fixed overflow-hidden">
        <Clock />
        <header>
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
    </AppProvider>
  )
}

export default App
