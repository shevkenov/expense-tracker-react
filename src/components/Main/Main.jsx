import React from 'react'
import {Card, CardHeader, CardContent, Divider, Typography, Grid} from '@material-ui/core';

import useStyle from './styles';
import Form from './Form/Form';
import List from './List/List';
import useTransactions from '../../useTransactions';

const Main = () => {
    const classes = useStyle();
    const {total: incomeAmount} = useTransactions('income');
    const {total: expenseAmount} = useTransactions('expense');
    const amount = incomeAmount - expenseAmount;
    

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense tracker" /* subheader="Power by speecly" *//>
            <CardContent>
                <Typography variant="h5" align="center">Total balance ${amount}</Typography>
                {/* <Typography variant="subtitle1" style={{lineHeight:"1.5em", marginTop:"20px"}}>Try saying: add 100$ to .....</Typography> */}
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
