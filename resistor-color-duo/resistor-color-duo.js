const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const decodedValue = (arr) => {
  if (!arr[0] || !arr[1]) throw new Error("Only one resistor");
  const resistorOne =
    COLORS.indexOf(arr[0]) != -1 ? String(COLORS.indexOf(arr[0])) : null;
  const resistorTwo =
    COLORS.indexOf(arr[1]) != -1 ? String(COLORS.indexOf(arr[1])) : null;
  if (!resistorOne || !resistorTwo) throw new Error("Resistor not found");
  return Number(resistorOne + resistorTwo);
};
