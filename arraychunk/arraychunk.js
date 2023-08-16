const chunk = (array, size) => {
  const chunked = [];
  for (let el of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([el]);
    } else {
      last.push(el);
    }
  }

  return chunked;
};

module.exports = chunk;
