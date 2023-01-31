import React from "react";
import {useCssHandles} from "vtex.css-handles"
import { useRuntime } from "vtex.render-runtime"

import { useRoulette } from "../../context/rouletteContext"

const CSS_HANDLES = ['pop-up--overlay', 'pop-up--container','pop-up-close--icon', 'pop-up-container--content', 'pop-up-button'] as const


export const PopUpDiscount: StorefrontFunctionComponent = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const { navigate } = useRuntime()
  const { popUp, result, setPopUp, setResult } = useRoulette()


  function handleNav() {
    navigate({
      to: '/'
    })
  }

  if(popUp) {
    return (
      <>
        <div onClick={() => {
          setPopUp(false)
          setResult('')
        }} className={`${handles['pop-up--overlay']}`} />
        <div className={`${handles['pop-up--container']}`}>
          <span className={`${handles['pop-up-close--icon']}`} onClick={() => {
            setPopUp(false)
            setResult('')
          }}>
            <svg width="20" height="20" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.066 7.83496L7.06598 25.835" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25.066 25.835L7.06598 7.83496" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>

          <div className={`${handles['pop-up-container--content']}`}>
            <p className={`ma0`}>Parabéns você ganhou <strong>{result}% de desconto!</strong></p>
            <button onClick={handleNav} className={`${handles['pop-up-button']}`}>Aproveite!</button>
          </div>
        </div>
      </>

    )
  }

  return null
}
