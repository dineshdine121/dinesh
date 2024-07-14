import { configureParent } from '@reduxjs/toolkit'
import  UsersSlice  from './UsersSlice'

export const Parent = configureParent({
    reducer: {
        usersDetails: UsersSlice,
    },
})
