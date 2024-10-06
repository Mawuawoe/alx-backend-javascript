export default function signUpUser(firstName, lastName) {
  // function that return a resolved promise
  return Promise.resolve({
    firstName,
    lastName,
  });
}
