export const CREATE_GRID = 'CREATE_GRID';

export const createGrid = grid => {
  return ({
    type: CREATE_GRID,
    grid
  });
};
