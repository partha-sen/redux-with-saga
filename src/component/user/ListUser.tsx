import IUser from "./UserType"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux'

import {slectUsers} from '../../store/user/User.slice'




const UserList: React.FC = () => {

    const users: IUser[] = useSelector(slectUsers);

    return (
        <div style={{paddingLeft:10, paddingRight:10, paddingTop:10}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                ID
                            </TableCell>
                            <TableCell align="right">
                                NAME
                            </TableCell>
                            <TableCell align="right">
                                STATE
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map((row, index) => (
                            <TableRow 
                              key = {index}
                                sx={{
                                    '&:last-child td, &:last-child th':
                                        { border: 0 }
                                }}>

                                <TableCell component="th" scope="row">
                                    {"" + row.id}
                                </TableCell>
                                <TableCell align="right">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {row.state}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}


export default UserList