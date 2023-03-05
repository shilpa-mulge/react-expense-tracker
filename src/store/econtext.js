import React from "react";

const Econtext = React.createContext({
    token: "",
    email: '',
    isLogedin: false,
    login: (token) => { },
    logout: () => { },
    expenses:[],
    addExpenses:(data)=>{},
  
})
export default Econtext;