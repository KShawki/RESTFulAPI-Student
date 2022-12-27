import express from 'express'; 
import path from 'path'
import { getUsers, createUser, users } from '../controller/users.js';

const userRouter = express.Router(); 

userRouter.get('/', (_req, res) => {
  res.send(users); 
}); 

userRouter.get('/login', (_req, res) => {
  res.sendFile(path.resolve('public/login.html'))
}); 

userRouter.post('/login', (_req, res) => {
  res.send(`You're Logged in`)
}); 

userRouter.get('/signUp', (_req, res) => {
  res.sendFile(path.resolve('public/signUp.html'))
}); 

userRouter.post('/signUp', createUser); 

export default userRouter; 