import React, {createContext, useReducer} from "react";

import appReducer from "./appReducer"

const initialState = {
    transactions:  [],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    const deleteTransaction = (id) => {
        dispatch({type: 'delete', payload: id})
    }

    const addTransaction = (transaction) => {
        dispatch({type: 'add', payload: transaction})
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions, 
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}