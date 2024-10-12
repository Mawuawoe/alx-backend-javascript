/**
 * Returns a list of students.
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
function getListStudents() {
  return [
    { firstName: 'Guillaume', id: 1, location: 'San Francisco' },
    { firstName: 'James', id: 2, location: 'Columbia' },
    { firstName: 'Serana', id: 5, location: 'San Francisco' },
  ];
}

module.exports = getListStudents;
