import "./keyboard.scss"

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps = {
  activeLetters: string[]
  inactiveLetters: string[]
  disable?: boolean
  addGuessedLetter: (letter: string) => void
}

export default function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter, disable = false }: KeyboardProps) {
  return (
    <div className="keyboard-wrapper">
      <div className="keyboard">
        {KEYS.map(key => {
          const isCorrect = activeLetters.includes(key)
          const isDisable = inactiveLetters.includes(key) || activeLetters.includes(key)
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={isCorrect ? "letter-button active" : "letter-button inactive"}
              key={key}
              disabled={isDisable || disable}
            >
              {key}
            </button>
          )
        })}
      </div>
    </div>
  )
}
