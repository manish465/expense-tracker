import React from "react";

const AddTransaction = props => {
    var tag = "manish";
    var amount = 788;

    const getText = event => {
        tag = event.target.value;
    };
    const getAmount = event => {
        amount = event.target.value;
    };
    const handelSubmit = event => {
        event.preventDefault();
    };

    return (
        <React.Fragment>
            <h3>Add New Transaction</h3>
            <form onSubmit={handelSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        onChange={getText}
                        placeholder="Enter text"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                    </label>
                    <input
                        type="number"
                        onChange={getAmount}
                        placeholder="Enter Amount"
                    />
                </div>
                <button className="btn" onClick={() => props.add(tag, amount)}>
                    Add Transaction
                </button>
            </form>
        </React.Fragment>
    );
};

export default AddTransaction;
