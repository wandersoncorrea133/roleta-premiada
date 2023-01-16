import React from "react"
import { useCssHandles } from "vtex.css-handles"
import { Roulette } from "../Roulette"
import { RouletteButton } from "../RouletteButton"
import { PopUpDiscount } from "../PopUpDiscount"
import { RouletteProvider } from "../../context/rouletteContext"

const CSS_HANDLES = ['roleta-premiada'] as const

export const PrizeRoulette: StorefrontFunctionComponent = () => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <RouletteProvider>
      <div className={`${handles['roleta-premiada']}`}>
        <Roulette />
        <RouletteButton />
      </div>
      <PopUpDiscount />
    </RouletteProvider>
  )
}
