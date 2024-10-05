export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve('Operation Successful');
    } else {
      reject(new Error('Operation failed'));
    }
  });
}
