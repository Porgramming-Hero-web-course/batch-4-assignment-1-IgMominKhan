type RemoveDuplicates = (numbers: number[]) => number[];

const removeDuplicates: RemoveDuplicates = (numbers) => {
  const uniqueArray: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    const currentElement = numbers[i];
    if (uniqueArray.includes(currentElement)) {
      continue
    } else {
      uniqueArray[uniqueArray.length] = currentElement;
    }
  }
  return uniqueArray
}
