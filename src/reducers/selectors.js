// normalizing state from an object into an array of objects for easy
// use of state in mapStateToProps

export const allNodes = state => {
    if (Object.keys(state).length === 0 && state.constructor === Object) {
      return [];
    } else {
      var keys = Object.keys(state);
      return keys.map(
        (key) => (
          state[key]
        ));
    }
};

export const allBots = state => {
  if (Object.keys(state).length === 0 && state.constructor === Object) {
    return [];
  } else {
    var keys = Object.keys(state);
    return keys.map(
      (key) => (
        state[key]
      ));
  }
};

export const allGrid = state => {
  if (Object.keys(state).length === 0 && state.constructor === Object) {
      let arr = new Array(20);
      for (let i = 0; i < arr.length; i++) {
        arr[i] = [];
      }
      return arr;
  } else {
    var keys = Object.keys(state);
    return keys.map(
      (key) => (
        state[key]
      ));
  }
};
