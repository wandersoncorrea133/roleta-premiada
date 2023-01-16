import React from "react"
import { useCssHandles } from "vtex.css-handles"
import { useRoulette } from "../../context/rouletteContext"

const CSS_HANDLES = ['roulette-content', 'discount-container--content', 'discount-paragraph', 'discount-container--10','discount-container--15', 'discount-container--20', 'discount-container--25','chose-discount--10', 'chose-discount--15', 'chose-discount--20', 'chose-discount--25'] as const

function getResult(result: number | string) {
  console.log(result, "aqui o resultado da roleta")

  switch (result) {
    case 10:
      return 'chose-discount--10'

    case 15:
      return 'chose-discount--15'

    case 20:
      return 'chose-discount--20'

    case 25:
      return 'chose-discount--25'

    default:
    return ''
  }

}

export const Roulette: StorefrontFunctionComponent = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const { result } = useRoulette()


  return (
    <ul className={`${handles['roulette-content']} ${getResult(result) ?  handles[getResult(result)] : ''}`}>
      <li className={`${handles['discount-container--content']} ${handles['discount-container--10']}`}>
        <p className={`${handles['discount-paragraph']}`}>10% off</p>
      </li>
      <li className={`${handles['discount-container--content']} ${handles['discount-container--15']}`}>
        <p className={`${handles['discount-paragraph']}`}>15% off</p>
      </li>
      <li className={`${handles['discount-container--content']} ${handles['discount-container--20']}`}>
        <p className={`${handles['discount-paragraph']}`}>20% off</p>
      </li>
      <li className={`${handles['discount-container--content']} ${handles['discount-container--25']}`}>
        <p className={`${handles['discount-paragraph']}`}>25% off</p>
      </li>
    </ul>
  )
}
