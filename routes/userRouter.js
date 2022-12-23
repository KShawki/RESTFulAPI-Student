import express from 'express'; 
import { getUsers, createUser } from '../controller/users.js';

const userRouter = express.Router(); 

userRouter.use('/login', getUsers); 
userRouter.use('/signUp', createUser); 

export default userRouter; 