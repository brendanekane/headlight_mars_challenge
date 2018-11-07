export const CREATE_GRID = 'CREATE_GRID';

// no need to make api call and then dispatch promise response because
// grid is created in mars_surface file; only need to dispatch action creator.

export const createGrid = grid => {
  return ({
    type: CREATE_GRID,
    grid
  });
};
