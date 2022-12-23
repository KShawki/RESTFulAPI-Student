import express from 'express'; 
import { getUsers, createUser } from '../controller/users';

const router = express.Router(); 

router.use('/login', getUsers); 
router.use('/signUp', createUser); 

export default router; 