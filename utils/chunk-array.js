/**
 * Cut an array in smaller chunks
 *
 * @param array the array to be chunked
 * @param int the length of each chunk
 * @return array
 */
const chunkArray = (array, chunkLength) => {
  const chunks = [];

  for(let i = 0, length = array.length; i < length; i += chunkLength) {
    chunks.push(array.slice(i, i + chunkLength));
  }

  return chunks;
};

export default chunkArray;
