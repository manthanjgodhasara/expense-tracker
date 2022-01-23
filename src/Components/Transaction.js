import React from 'react'
import { GlobalContext } from "../Context/GlobalState";
import { useContext } from "react";

const Transaction = ({id, text, amount}) => {
    const sign = amount < 0 ? '-' : '+' ;
    const {deleteTransaction} = useContext(GlobalContext)

    return (
      <li className={amount < 0 ? 'minus': 'plus'}>
        {text}{" "}
        <span>
          {sign} &#8377;{Math.abs(amount)}
        </span>
        <button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
      </li>
    );
}

export default Transaction