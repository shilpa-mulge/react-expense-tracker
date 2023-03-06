import { createSlice } from "@reduxjs/toolkit";
const initailState={ expenses:[], totalExpenses:0}
const ExpenceSlice=createSlice({
    name:'expense',
    initialState:initailState,
    reducers:{
    addExpenses(state,action){
    state.expenses=[...action.payload]
        },
        updateExpenseamount(state,action){
            state.totalExpenses=action.payload;
        }
    }
})
export const ExpenseActions=ExpenceSlice.actions
export default ExpenceSlice.reducer;