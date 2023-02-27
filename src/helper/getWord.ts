import words from "../wordList.json"

export const getWord = () => {
  return words[Math.floor(Math.random() * words.length)]
}
