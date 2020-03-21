import axios from "axios";
export const FETCH_START = "FETCH_START";
export const FETCH_FAIL = "FETCH_FAIL"; 
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSmurfs = () => dispatch => {
    dispatch({type:FETCH_START}); 
    axios.get("http://localhost:3333/smurfs").then(res=>{
        dispatch({type:FETCH_SUCCESS, payload:res.data})
    }).catch(err => dispatch({type:FETCH_FAIL, payload:err}))
};

export const addSmurf = smurf => dispatch => {
    dispatch({type:FETCH_START}); 
    axios.post(`http://localhost:3333/smurfs/`, smurf).then(res=>{
        dispatch({type:FETCH_SUCCESS, payload:res.data})
    }).catch(err => dispatch({type:FETCH_FAIL, payload:err}))
};

export const removeSmurf = id => dispatch => {
    dispatch({type:FETCH_START}); 
    axios.delete(`http://localhost:3333/smurfs/${id}`, id).then(res=>{
        dispatch({type:FETCH_SUCCESS, payload:res.data})
    }).catch(err => dispatch({type:FETCH_FAIL, payload:err}))
};

export const editSmurf = smurf => dispatch => {
    console.log("wanting to edit", smurf);
    dispatch({type:FETCH_START}); 
    axios.delete(`http://localhost:3333/smurfs/${smurf.id}`, smurf).then(res=>{
        dispatch({type:FETCH_SUCCESS, payload:res.data})
    }).catch(err => dispatch({type:FETCH_FAIL, payload:err}))
};
