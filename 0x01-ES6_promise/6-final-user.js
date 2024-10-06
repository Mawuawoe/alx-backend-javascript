import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

// uploadPhoto is a function that returns a promise that rejects
// signUpUser return a promise that resolves

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ])
    .then((results) => results.map((result) => {
      if (result.status === 'fulfilled') {
        return {
          status: result.status,
          value: result.value,
        };
      }
      return {
        status: result.status,
        value: result.reason.toString(),
      };
    }));
}
