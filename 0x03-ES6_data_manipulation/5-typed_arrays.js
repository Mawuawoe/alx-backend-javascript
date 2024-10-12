export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);
  // Create a new Int8Array view of the buffer
  const int8Array = new Int8Array(buffer);

  // Check if the position is within the valid range
  if (position < 0 || position >= int8Array.length) {
    throw new Error('Position outside range');
  }

  // Set the value at the specified position
  int8Array[position] = value;

  // Return the Int8Array
  return int8Array;
}
