import React from "react";

const AddTransaction = () => {
    return (
        <React.Fragment>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                    </label>
                    <input type="number" placeholder="Enter Amount" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </React.Fragment>
    );
};

export default AddTransaction;
