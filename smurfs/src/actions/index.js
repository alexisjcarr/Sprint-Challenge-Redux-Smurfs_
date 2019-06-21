import axios from "axios";

/* GET SMURFS */

export const FETCHING_SMURFS_PENDING = "FETCHING_SMURFS_PENDING";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";

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
      dispatch({
        type: FETCHING_SMURFS_FAILURE,
        payload: "You smurfed up! No smurfs, fam :C"
      });
    });
};

/* POST SMURF */

export const ADD_SMURF_PENDING = "ADD_SMURF_PENDING";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_PENDING });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: ADD_SMURF_FAILURE,
        payload: "You smurfed up! Can't add Smurf :C"
      });
    });
};

/* DELETE SMURF */

export const DELETE_SMURF_PENDING = "DELETE_SMURF_PENDING";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_PENDING });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: DELETE_SMURF_FAILURE,
        payload: "You smurfed up! Can't delete Smurf :C"
      });
    });
};
