import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';
import React from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../actions/index';
import { Link } from 'react-router-dom';


const Todo = ({ setTodoId }) => {
    const todoList = useSelector((state) => state.allReducers.todoList);
    const dispatch = useDispatch();
    return (
        <>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }}>
                    <TableHead   >
                        <TableRow >
                            <TableCell component="th" scope="row">
                                Title
                            </TableCell>
                            <TableCell>Task</TableCell>
                            <TableCell>Due Date</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todoList.map((elem) => {
                            return (
                                <TableRow key={elem.id}>
                                    <TableCell component="th" scope="row">
                                        {elem.data.title}
                                    </TableCell>
                                    <TableCell >{elem.data.task}</TableCell>
                                    <TableCell >{elem.data.dueDate}</TableCell>
                                    <TableCell>
                                        <Link to="/">
                                            <BorderColorIcon onClick={() => setTodoId(elem.id)} />
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <DeleteOutlineIcon onClick={() => dispatch(deleteTodo(elem.id))} />
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Link to="/">
                <Box display="flex" justifyContent="center" alignItems="center" component={Paper} mt={2} minHeight="2rem" >
                    <AddIcon />
                    ADD TODO
                </Box>
            </Link>
        </>
    )
}

export default Todo