import IUser from "./UserType"

import { useForm, Controller, SubmitHandler } from "react-hook-form"
import Input from "@mui/material/Input"
import { useDispatch } from 'react-redux'
import { addUser } from "../../store/user/User.slice"


const UserList: React.FC = () => {

    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<IUser> = (data) => {
        dispatch(addUser(data));
        console.log(data)
    }

    const { control, handleSubmit } = useForm<IUser>()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="id"
                control={control}
                render={({ field }) => <Input {...field} placeholder = "ID"  sx ={{m:2}}/>}
            />
            <Controller
                name="name"
                control={control}
                render={({ field }) => <Input {...field} placeholder = "NAME" sx ={{m:2}}/>}
            />
            <Controller                 name="state"
                control={control}
                render={({ field }) => <Input {...field} placeholder = "STATE" sx ={{m:2}}/>}
            />
             <input type="submit" value="add"/>
        </form>
    )
}


export default UserList