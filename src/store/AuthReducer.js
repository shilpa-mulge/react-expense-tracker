import { createSlice } from "@reduxjs/toolkit";

const item = localStorage.getItem('token');
let intialToken = JSON.parse(item);
const now = new Date();
if (intialToken !== null && now.getTime() > intialToken.expiry) {
    localStorage.removeItem('token')
    intialToken.idToken = null;
    intialToken.emailId = null

}
const initailState={ token: "",
email: '',
isLogedin:false,}
const AuthSlice=createSlice({
    name:'auth',
    initialState:initailState,
    reducers:{
        login (state, action) { 
            const data = {
                emailId:action.payload.emailid,
                idToken:action.payload.token,
                expiry: new Date().getTime() + 10 * 60000
            }
            state.token=action.payload.token;
            state.email=action.payload.emailid;
            localStorage.setItem('token', JSON.stringify(data))
state.isLogedin=true
        },
        logout(state)  { 
            state.token=null;
            localStorage.removeItem('token');
            state.isLogedin=false
        },
    }
})

export const authAction=AuthSlice.actions;
export default AuthSlice.reducer;