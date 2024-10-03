export default function appendToEachArrayValue(array, appendString) {
  const rarray = [];

  for (const idx of array) {
    const element = appendString + idx;
    rarray.push(element);
  }

  return rarray;
}
