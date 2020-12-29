import React, {useState, useContext} from 'react'
import {Grid, MenuItem, TextField, InputLabel, Typography, FormControl, Select, Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';
import {incomeCategories, expenseCategories} from '../../../constants/categories';
import formatDate from '../../../utils/formatDate';

const initialState = {
    type: 'income',
    category: '',
    amount: '',
    date: formatDate(new Date())
}


const Form = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState)
    const {addTransaction} = useContext(ExpenseTrackerContext);

    const createTransaction = (e) => {
        e.preventDefault();
        const transcation = {...formData, amount: Number(formData.amount), id: uuidv4()}
        addTransaction(transcation);
        setFormData(initialState);
    }

    const selectedCategories = formData.type === 'expense' ? expenseCategories : incomeCategories;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant='subtitle2' gutterBottom>
                    ....
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                        <MenuItem value='expense'>Expense</MenuItem>
                        <MenuItem value='income'>Income</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                        {selectedCategories.map(cat => <MenuItem key={cat.type} value={cat.type}>{cat.type}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField label='Amount' type='number' fullWidth value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})}/>
            </Grid >
            <Grid item xs={6}>
                <TextField label='Date' type='date' fullWidth value={formData.date} onChange={(e) => setFormData({...formData, date: formatDate(e.target.value)})}/>
            </Grid >
            <Button variant='outlined' color='primary' fullWidth className={classes.button} onClick={createTransaction}>Create</Button>
        </Grid>
    )
}

export default Form
