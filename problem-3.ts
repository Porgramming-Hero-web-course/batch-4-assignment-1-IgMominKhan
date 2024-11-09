type CountWordOccurrences = (sentence: string, word: string) => number

const countWordOccurrences: CountWordOccurrences = (sentence, word) => {
  const reg = new RegExp(`${word}`, "ig")
  const matches = sentence.match(reg) || [];
  return matches.length
}


const sentence = "I Love You I love l you i lovE yoU"
console.log(countWordOccurrences(sentence, "love"))
