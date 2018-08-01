export const simpleApiStoreStates = (state, objectName, properties) => { //eslint-disable-line
  // strictly to be used only for simple api state
  /**
   * ex :
   * defaultState = {
   *   someProp : {
   *     loading:false;
   *     data: null | [] | 0
   *     error: null
   *   }
   *  }
   */
  const tempObject = {
    ...state[objectName],
  };
  Object.keys(tempObject).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(properties, key)) {
      tempObject[key] = properties[key];
    }
  });
  return {
    ...state,
    [objectName]: tempObject,
  };
};
