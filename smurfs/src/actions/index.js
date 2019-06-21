import axios from "axios";

const FETCHING_SMURFS_PENDING = "FETCHING_SMURFS_PENDING";
const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS_PENDING });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCHING_SMURFS_FAILURE });
    });
};
