import React from "react";

const Econtext = React.createContext({
    token: "",
    email: '',
    isLogedin: false,
    login: (token) => { },
    logout: () => { },
})
export default Econtext;