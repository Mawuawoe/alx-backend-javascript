export default function getStudentsByLocation(arrObj, city) {
  return arrObj.filter((obj) => obj.location === city);
}
