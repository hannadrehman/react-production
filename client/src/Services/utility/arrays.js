export const transformArrayToArrayOfArraysRamdomly = (data, rows) => {
  try {
    const rowsToBeCreated = rows || 5;
    if (data && data.length > 0) {
      const limit = Math.ceil(data.length / rowsToBeCreated);
      const matrix = [];
      let inner = 0;
      for (let i = 0; i < rowsToBeCreated; i += 1) {
        matrix.push([]);
      }
      data.forEach((current, index) => {
        if (index < limit) {
          matrix[inner].push(current);
          if (index === limit - 1) {
            inner += 1;
          }
        } else {
          const newIndex = index % limit;
          matrix[inner].push(current);
          if (newIndex === limit - 1) {
            inner += 1;
          }
        }
      });
      return matrix;
    }
    return [];
  } catch (e) {
    throw e;
  }
};

export const findInArrayOfArrays = 1;
