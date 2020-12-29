import React, { useContext } from 'react'
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons'

import {ExpenseTrackerContext} from '../../../context/context';
import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const {transactions, deleteTransaction} = useContext(ExpenseTrackerContext);
    
    return (
        <MUIList className={classes.list} dense={false}>
            {transactions.map(trn => (
                <Slide direction='down' key={trn.id} in mountOnEnter unmountOnExit>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={trn.type === 'income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={trn.category} secondary={`$${trn.amount} - ${trn.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge='end' aria-label='delete' onClick={() => deleteTransaction(trn.id)}>
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}        
        </MUIList>
    )
}

export default List
