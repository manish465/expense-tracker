import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);
    const totalAmount = amount
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    return (
        <React.Fragment>
            <h4>Your Balance</h4>
            <h1>${totalAmount}</h1>
        </React.Fragment>
    );
};

export default Balance;
