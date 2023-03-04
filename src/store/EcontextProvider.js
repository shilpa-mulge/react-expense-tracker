import React,{useState} from "react";
import Econtext from "./econtext";
const EcontextProvider = (props) => {
//Storing token, email to localStorage
const item = localStorage.getItem('token');
let intialToken = JSON.parse(item);
const now = new Date();
if (intialToken !== null && now.getTime() > intialToken.expiry) {
    localStorage.removeItem('token')
    intialToken.idToken = null;
    intialToken.emailId = null

}

const [token, setToken] = useState(intialToken ? intialToken.idToken : '');
const [email, setEmail] = useState(intialToken ? intialToken.emailId : '')
const userLoggedIn = !!token;
const loginHandler = (token, email) => {
    const item = {
        emailId: email,
        idToken: token,
        expiry: new Date().getTime() + 10 * 60000
    }
    setEmail(email)
    setToken(token)
    localStorage.setItem('token', JSON.stringify(item))
}

const logoutHandler = () => {
    setToken(null)
    localStorage.removeItem('token')
}
const eContext = {
    email: email,
    token: token,
    isLogedin: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
}
return (
    < Econtext.Provider value={eContext}>{props.children}</Econtext.Provider>
)

}
export default EcontextProvider;