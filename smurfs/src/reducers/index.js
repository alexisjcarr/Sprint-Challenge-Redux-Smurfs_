import * as actionType from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCHING_SMURFS_PENDING:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ""
      };
    case actionType.FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        error: "",
        smurfs: action.payload
      };
    case actionType.FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case actionType.ADD_SMURF_PENDING:
      return {
        ...state,
        addingSmurf: true,
        error: ""
      };
    case actionType.ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        error: ""
      };
    case action.ADD_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};
