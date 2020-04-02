export default (state, action) => {
    switch (action.type) {
        case "DELETE_TRANSACTION":
            return {
                transactions: state.transactions.filter(
                    transaction => transaction.id !== action.payload,
                ),
            };
        default:
            return state;
    }
};
