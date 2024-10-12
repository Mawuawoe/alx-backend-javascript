export default function cleanSet(set, startString) {
    // Create an array from the set and filter values that start with startString
    const result = [...set]
        .filter(value => typeof value === 'string' && value.startsWith(startString))
        .map(value => value.slice(startString.length)); // Append the rest of the string

    // Join the filtered values with '-' and return the result
    return result.join('-');
}
