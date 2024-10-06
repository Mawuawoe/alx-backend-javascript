import { uploadPhoto, createUser } from './utils'; // Adjust the import path as necessary

export default async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto(); // Call the uploadPhoto function
    const userResponse = await createUser(); // Call the createUser function

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If either function fails, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}
