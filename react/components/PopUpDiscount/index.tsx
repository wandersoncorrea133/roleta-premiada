import React from "react";
import {useCssHandles} from "vtex.css-handles"

import { useRoulette } from "../../context/rouletteContext"

const CSS_HANDLES = ['pop-up--overlay', 'pop-up--container'] as const


export const PopUpDiscount: StorefrontFunctionComponent = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const { popUp, result, setPopUp, setResult } = useRoulette()

  if(popUp) {
    return (
      <>
        <div onClick={() => {
          setPopUp(false)
          setResult('')
        }} className={`${handles['pop-up--overlay']}`} />
        <div className={`${handles['pop-up--container']}`}>
          <span onClick={() => {
            setPopUp(false)
            setResult('')
          }}>x</span>

          <div>
            <p>Parabéns você ganhou <strong>{result}% de desconto!</strong></p>
            <button>Aproveite!</button>
          </div>
        </div>
      </>

    )
  }

  return null
}
