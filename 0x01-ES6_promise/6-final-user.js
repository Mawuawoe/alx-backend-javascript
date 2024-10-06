import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

// uploadPhoto is a function that returns a promise that rejects
// signUpUser return a promise that resolves

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    uploadPhoto(fileName),
    signUpUser(firstName, lastName),
  ])
    .then((resultsA) => {
      const rAarray = [];
      resultsA.forEach((element) => {
        if (element.status === 'fulfilled') {
          rAarray.push({
            status: element.status,
            value: element.value,
          });
        } else if (element.status === 'rejected') {
          rAarray.push({
            status: element.status,
            value: element.reason,
          });
        }
      });
      return rAarray;
    });
}
