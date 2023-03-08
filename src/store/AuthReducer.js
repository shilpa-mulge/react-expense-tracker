import { createSlice } from "@reduxjs/toolkit";

let item = localStorage.getItem('token');
let intialToken = JSON.parse(item);
const now = new Date();
if (intialToken !== null && now.getTime() > intialToken.expiry) {
    localStorage.removeItem('token')
    intialToken.idToken = null;
    intialToken.emailId = null

}

const initailState={ token: "",
email: '',
isLogedin:item!==null?true:false,IsemailVarified:false}
const AuthSlice=createSlice({
    name:'auth',
    initialState:initailState,
    reducers:{
        login (state, action) { 
             item = {
                emailId:action.payload.emailid,
                idToken:action.payload.token,
                expiry: new Date().getTime() + 10 * 60000
            }
            state.token=action.payload.token;
            state.email=action.payload.emailid;
            localStorage.setItem('token', JSON.stringify(item))
            state.isLogedin=item!==null?true:false
        },
        logout(state)  { 
            state.token=null;
            localStorage.removeItem('token');
            item=null;
            state.isLogedin=item!==null?true:false
        },
        verification(state){
            state.IsemailVarified=true
        }
    }
})

export const authAction=AuthSlice.actions;
export default AuthSlice.reducer;