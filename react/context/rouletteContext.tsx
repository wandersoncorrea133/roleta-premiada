import React, { createContext, useContext, useEffect, useState } from 'react'
import { UserAuthenticatorProps } from '../typings/UserAuthenticator'
import {random} from "../utils/random"

interface RotateProps {
  result: number | string
  popUp: boolean
  isAuthenticate: boolean

  handleRotate: () => void
  setResult: (result: number | string) => void
  setPopUp: (isVisible: boolean) => void
}

const RouletteContext = createContext<RotateProps>({} as RotateProps)

const RouletteProvider: React.FC = ({ children }) => {
  const [result,setResult] = useState<string | number>(0)
  const [popUp, setPopUp] = useState(false)
  const [isAuthenticate, setIsAuthenticate] = useState(false)

  useEffect(() => {
    window.__RENDER_8_SESSION__.sessionPromise.then((user: UserAuthenticatorProps) => {
      console.log(user, "aqui o usuario");

      if(user.response.namespaces.profile.isAuthenticated.value === "true") {
        setIsAuthenticate(true)
      }
    })

  }, [])

  function handleRotate() {
    const arr = [10,15,20,25]
    setResult(() => random(arr))

    setTimeout(() => {
      setPopUp(true)
    }, 2500)
  }


  return (
    <RouletteContext.Provider value={{handleRotate, result, setResult,popUp,setPopUp, isAuthenticate}}>
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
