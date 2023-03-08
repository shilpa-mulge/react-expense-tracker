import { createSlice } from "@reduxjs/toolkit";
const initailState={id:'',item:{}, expenses:[],Added:false, deleted:false, edited:false}
const ExpenceSlice=createSlice({
    name:'expense',
    initialState:initailState,
    reducers:{
        AddExpense(state,action){
            state.Added=true;
            state.edited=false;
            state.deleted=false;
            state.item={
                ExpenseName:action.payload.ExpenseName,
                money:action.payload.money,
                description:action.payload.description,
            }
            state.expenses.push({
                ExpenseName:action.payload.ExpenseName,
                money:action.payload.money,
                description:action.payload.description,
            })
            state.totalAmount=Number(state.totalAmount)+Number(action.payload.money);
        },
        RemoveExpense(state,action){
            state.id=action.payload;
            state.Added=false;
            state.deleted=true;
            state.edited=false;
            state.expenses = state.expenses.filter((item) => item.id !== action.payload);
            state.item={};
        },
        EditExpenses(state,action){
            state.edited=true;
            state.Added=false;
            state.deleted=false;
            state.id=action.payload.id;
            const existItemIndex = state.expenses.findIndex(item => item.id === action.payload.id)
            const existingItem = state.expenses[existItemIndex];
            const updateItem = { ...existingItem, ExpenseName:action.payload.ExpenseName, money:action.payload.money,description:action.payload.description,}
            state.expenses[existItemIndex]=updateItem;
            state.item={ ExpenseName:action.payload.ExpenseName, money:action.payload.money,description:action.payload.description}
        },
        ReplaceCart(state,action){
            state.expenses=[...action.payload];
        }
    }
})
export const ExpenseActions=ExpenceSlice.actions
export default ExpenceSlice.reducer;