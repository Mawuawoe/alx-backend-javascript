export default function loadBalancer(chinaDownload, USDownload) {
  // Return the promise that resolves first
  return Promise.any([
    chinaDownload,
    USDownload])
    .then((result) => result);
}
