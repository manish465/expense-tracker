import React, { useState } from "react";

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    return (
        <React.Fragment>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        value={text}
                        onChange={event => setText(event.target.value)}
                        placeholder="Enter text"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={event => setAmount(event.target.value)}
                        placeholder="Enter Amount"
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </React.Fragment>
    );
};

export default AddTransaction;
