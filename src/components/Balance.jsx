import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
    const { tranactions } = useContext(GlobalContext);
    const amount = tranactions.map(tranaction => tranaction.amount);
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
