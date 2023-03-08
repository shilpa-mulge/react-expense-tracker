import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import ExpenseReducer from "./ExpenseReducer";
import ThemeReducer from "./ThemeReducer";
import UiReducer from './UiSlice'
const store=configureStore({
    reducer:{auth:AuthReducer, expenses:ExpenseReducer, theme:ThemeReducer, ui:UiReducer}
})
export default store;