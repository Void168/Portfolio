import { createContext, useState } from 'react'

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
  const [play, setPlay] = useState(false)
  const handleRunAnimate = () => {
    setPlay(true)
    setTimeout(() => {
      setPlay(false)
    }, 500)
  }
  return (
    <AppContext.Provider value={{ handleRunAnimate, play }}>
      {children}
    </AppContext.Provider>
  )
}
