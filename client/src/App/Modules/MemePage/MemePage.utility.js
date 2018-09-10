export const findMemeInMatrix = (matrix, identifier) => {
  try {
    if (matrix.length && identifier) {
      for (let i = 0; i < matrix.length; i += 1) {
        const arr = matrix[i];
        const elem = arr.find(e => e.id.toString() === identifier.toString());
        if (elem) {
          return elem;
        }
      }
    }
    return null;
  } catch (e) {
    return null;
  }
};

export const a = 1;
