import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([
    uploadPhoto(),
    createUser(),
  ])
    .then((resultArray) => {
      const uploadResult = resultArray[0]; // Result from uploadPhoto
      const userResult = resultArray[1]; // Result from createUser

      console.log(uploadResult.body, userResult.firstName, userResult.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
