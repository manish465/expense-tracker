import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
    const { tranactions } = useContext(GlobalContext);
    return (
        <React.Fragment>
            <h3>History</h3>
            <ul className="list">
                {tranactions.map(tranaction => (
                    <li className="minus" key={tranaction.id}>
                        {tranaction.text}
                        <span>{tranaction.amount}</span>
                        <button className="delete-btn">X</button>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
};

export default TransactionList;
