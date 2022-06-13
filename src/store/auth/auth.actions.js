import axios from "axios";

// Auth Actions here
  export const login=(ele)=>(dispatch)=>{
    dispatch({type:AUTH_SIGN_IN_LOADING});
    axios.post("https://reqres.in/api/login",{
        useremail:ele.email,
        userpassword:ele.password,
    }).then((res)=>{
        return dispatch({type:AUTH_SIGN_IN_SUCCESS,payload:res.data})
    }).catch((err)=>{
        dispatch({type:AUTH_SIGN_IN_ERROR})
    })


 }
 export const logout=()=>{
    dispatch({type:AUTH_SIGN_OUT});

 }