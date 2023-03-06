import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import ExpenseReducer from "./ExpenseReducer";
const store=configureStore({
    reducer:{auth:AuthReducer, expenses:ExpenseReducer}
})
export default store;