import React from "react"
import "./hangmanword.scss"

type Props = {
  wordToGuess: string
  guessedLetters: string[]
  reveal?: boolean
}

export default function HangmanWord({ wordToGuess, guessedLetters, reveal = false }: Props) {
  return (
    <div className="word-wrapper">
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} className="letter-word">
          <span
            style={{
              visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}
