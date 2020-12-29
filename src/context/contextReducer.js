const contexReducer = (state, action) => {
    let transactions;
    switch (action.type) {
        case 'ADD_TRANSACTION':
            transactions = [...state];
            return [...transactions, action.payload];    
        case 'DELETE_TRANSACTION':
            transactions = [...state];
        return transactions.filter(trn => trn.id !== action.payload)
    
        default:
            return state;
    }
    
}
export default contexReducer;