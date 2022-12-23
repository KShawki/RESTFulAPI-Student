import express from 'express'; 
import { createCourse, getCourse } from '../controller/course';

const router = express.Router; 

router.use('/create', createCourse); 
router.use('/list', getCourse); 

export default router; 