export function convertCToF(celsius: number): number {
  return Math.ceil((celsius * 9) / 5 + 32)
}

export function convertFToC(Fahrenheit: number): number {
  return Math.ceil(((Fahrenheit - 32) * 5) / 9)
}
