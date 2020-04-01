import React from "react";

const Transaction = ({ transaction }) => {
    console.log(transaction);
    return (
        <li className="minus">
            {transaction.text}
            <span>{transaction.amount}</span>
            <button className="delete-btn">X</button>
        </li>
    );
};

export default Transaction;
