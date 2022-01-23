import React from 'react'
import { GlobalContext } from '../Context/GlobalState';
import { useContext } from 'react';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map((transaction)=>{
        return(
            transaction.amount
        )
    })

    const total = amounts.reduce((acc, item)=>(acc += item), 0).toFixed(2)
    const sign = total < 0? '-' : '+'

    return (
        <>
            <h4>Your Balance</h4>
            <h1>{sign} &#8377; {Math.abs(total)}</h1>
        </>
    );
}

export default Balance
