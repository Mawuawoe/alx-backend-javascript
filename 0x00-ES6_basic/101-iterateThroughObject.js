export default function iterateThroughObject(reportWithIterator) {
  let rstring = '';
  const len = reportWithIterator.length;

  for (let x = 0; x < len - 1; x += 1) {
    rstring += `${reportWithIterator[x]} | `;
  }

  return rstring + reportWithIterator[len - 1];
}
