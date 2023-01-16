import React from "react";

import { useCssHandles } from "vtex.css-handles"
import { useRoulette } from "../../context/rouletteContext"

const CSS_HANDLES = ['button-roulette'] as const

export const RouletteButton: StorefrontFunctionComponent = () => {
  const handles = useCssHandles(CSS_HANDLES)

  const { handleRotate } = useRoulette()

  return <button onClick={ handleRotate } className={`${handles['button-roulette']}`} />
}
