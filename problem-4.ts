type Circle = {
  shape: string;
  radius: number
}

type Rectangle = {
  shape: string;
  width: number;
  height: number;
}

type Shape = Circle | Rectangle;

type CalculateShapeArea = (shape: Shape) => number;

const calculateShapeArea = (shape: Circle | Rectangle): number => {
  if ("radius" in shape) return Number((Math.PI * shape?.radius * shape?.radius).toFixed(2))
  return Number((shape.width * shape.height).toExponential(3))
}
