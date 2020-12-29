import React from 'react'
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core'
import {Doughnut} from 'react-chartjs-2';

import useStyles from './styles';
import useTransactions from '../../useTransactions';

const Details = ({title}) => {
    const classes = useStyles();

    const {total, chartData} = useTransactions(title);
    // const amount = transactions.reduce((acc, trn) => {
    //     return {
    //         ...acc,
    //         expense: trn.type === 'Expense' ? acc.expense += trn.amount : acc.expense ,
    //         income: trn.type === 'Income' ? acc.income += trn.amount : acc.income
    //     }
    // },{
    //     expense: 0,
    //     income: 0
    // })

    return (
        <Card className={title === 'income' ? classes.income : classes.expense}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="h5">{total}</Typography>
                <Doughnut data={chartData}/>
            </CardContent>
        </Card>
    )
}

export default Details
