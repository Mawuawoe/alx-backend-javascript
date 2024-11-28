const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    // get the data read into a list of string
    // store in an array
    // filter out only valid lines
    const lines = data.split('\n').filter((entry) => entry.trim() !== '');

    // remove the heading row
    const header = lines.shift();

    if (!header || lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    console.log(`Number of students: ${lines.length}`);

    // get students by thier specific field
    const fields = {};
    lines.forEach((line) => {
      const firstname = line.split(',')[0];
      const field = line.split(',')[3];

      if (!field || !firstname) return;

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    // get this data from the fields obj
    Object.entries(fields).forEach(([field, students]) => {
      console.log(
        `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`,
      );
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
