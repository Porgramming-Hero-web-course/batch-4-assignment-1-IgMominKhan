type SumArray = (numbers: number[]) => number;

const sumArray: SumArray = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }

  console.log(sum)
  return sum
}

sumArray([1, 2, 3, 3, 4])
