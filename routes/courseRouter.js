import express from 'express'; 
import { createCourse, getCourse } from '../controller/course.js';

const courseRouter = express.Router; 

courseRouter.use('/create', createCourse); 
courseRouter.use('/list', getCourse); 

export default courseRouter; 