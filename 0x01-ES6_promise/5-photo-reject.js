export default function uploadPhoto(filename) {
  // return a Promise rejecting with an Error
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
