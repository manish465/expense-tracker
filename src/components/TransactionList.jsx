import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
    const context = useContext(GlobalContext);
    console.log(context);
    return (
        <React.Fragment>
            <h3>History</h3>
            <ul className="list">
                <li className="minus">
                    Cash
                    <span>-$50</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default TransactionList;
