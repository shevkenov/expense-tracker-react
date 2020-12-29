import React, {createContext, useReducer} from 'react'

import contextReducer from './contextReducer';

const initialState = []; 
export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    const deleteTransaction = (id) => dispatch({type: 'DELETE_TRANSACTION', payload: id})
    const addTransaction = (trn) => dispatch({type: 'ADD_TRANSACTION', payload: trn})
    
    return (
        <ExpenseTrackerContext.Provider value={{deleteTransaction, addTransaction, transactions}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}