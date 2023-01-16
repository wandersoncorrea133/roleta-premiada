import React, { createContext, useContext, useState } from 'react'
import {random} from "../utils/random"

interface RotateProps {
  result: number | string
  popUp: boolean

  handleRotate: () => void
  setResult: (result: number | string) => void
  setPopUp: (isVisible: boolean) => void
}

const RouletteContext = createContext<RotateProps>({} as RotateProps)

const RouletteProvider: React.FC = ({ children }) => {
  const [result,setResult] = useState<string | number>(0)
  const [popUp, setPopUp] = useState(false)

  function handleRotate() {
    const arr = [10,15,20,25]
    setResult(() => random(arr))

    setTimeout(() => {
      setPopUp(true)
    }, 2500)
  }


  return (
    <RouletteContext.Provider value={{handleRotate, result, setResult,popUp,setPopUp}}>
      {children}
    </RouletteContext.Provider>
  )
}

const useRoulette = () => {
  const context = useContext(RouletteContext)

  if(context === undefined) {
    throw new Error('useRoulette must be used within a RouletteProvider')
  }

  return context
}

export { RouletteProvider, useRoulette }
