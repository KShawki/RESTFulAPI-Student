import express from 'express'; 
import { getUsers, createUser } from '../controller/users.js';

const userRouter = express.Router(); 

userRouter.get('/login', getUsers); 
userRouter.post('/signUp', createUser); 

export default userRouter; 