import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
    const { tranactions } = useContext(GlobalContext);
    console.log(tranactions);
    return (
        <React.Fragment>
            <h3>History</h3>
            <ul className="list">
                {tranactions.map(transaction => (
                    <Transaction
                        key={transaction.id}
                        transaction={transaction}
                    />
                ))}
            </ul>
        </React.Fragment>
    );
};

export default TransactionList;
