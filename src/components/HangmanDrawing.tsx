import React from "react"
import "./hangmandrawing.scss"

const HEAD = <div className="head"></div>

const BODY = <div className="body"></div>

const RIGHTARM = <div className="right-arm"></div>

const LEFTARM = <div className="left-arm"></div>

const LEFTLEG = <div className="left-leg"></div>
const RIGHTLEG = <div className="right-leg"></div>

const BODY_PARTS = [HEAD, BODY, RIGHTARM, LEFTARM, LEFTLEG, RIGHTLEG]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <section className="drawing-section">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="quad-style"></div>
      <div className="third-style"></div>
      <div className="second-style"></div>
      <div className="some-style"></div>
    </section>
  )
}
