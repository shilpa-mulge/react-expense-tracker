import React,{ useCallback, useEffect, useState} from "react";
import Econtext from "./econtext";
import axios from "axios";
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
const [email, setEmail] = useState(intialToken ? intialToken.emailId : '');
const [expenses, setExpenses]=useState([])
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
const expensesHandler=useCallback(async()=>{
    let expenses=[];
        try{
            const response=await axios.get("https://expense-tracker-b91f4-default-rtdb.firebaseio.com/expenses.json")
              
    for(const key in response.data){
        expenses.push({
            id:response.data[key].name,
            Expensename:response.data[key].ExpenseName,
            money:response.data[key].money
        })
    }   
    setExpenses(expenses)
            }
            catch(error){
            alert(error.response.data.error.message);
            }
            
    },[])
    useEffect(()=>{
expensesHandler();
    },[expensesHandler])


const eContext = {
    email: email,
    token: token,
    isLogedin: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    expenses:expenses,
    addExpenses:expensesHandler
}
return (
    < Econtext.Provider value={eContext}>{props.children}</Econtext.Provider>
)

}
export default EcontextProvider;