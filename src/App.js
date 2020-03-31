import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

class App extends Component {
    state = {
        balance: 0,
        transactionList: [],
    };

    addToList = (tag, amount) => {
        var transaction = { tag: tag, amount: amount };
        var transactionList = this.state.transactionList;
        transactionList.push(transaction);
        this.setState({ transactionList: transactionList });
        console.log(this.state.transactionList);
    };

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container">
                    <Balance balance={this.state.balance} />
                    <IncomeExpenses />
                    <TransactionList />
                    <AddTransaction add={this.addToList} />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
