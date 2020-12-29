import {useContext} from 'react'
import {ExpenseTrackerContext} from './context/context';

import {incomeCategories, expenseCategories, resetCategories} from './constants/categories';

const useTransactions = (type) => {
    resetCategories();
    const {transactions} = useContext(ExpenseTrackerContext);
    const categories = type === 'income' ? incomeCategories : expenseCategories;
    const filteredTransactions = transactions.filter(trn => trn.type === type);
    const total = filteredTransactions.reduce((acc, trn) => acc += trn.amount, 0);
    
    filteredTransactions.forEach(trn => {
        const category = categories.find(cat => cat.type === trn.category);
        
        if(category) {
            category.amount += trn.amount
        };
    })
    const filteredCategories = categories.filter(cat => cat.amount > 0);

    const chartData = {
        datasets: [{
            data: filteredCategories.map(cat => cat.amount),
            backgroundColor: filteredCategories.map(cat => cat.color)
        }],
        labels: filteredCategories.map(cat => cat.type)
    }

    return {total, chartData}
}

export default useTransactions;