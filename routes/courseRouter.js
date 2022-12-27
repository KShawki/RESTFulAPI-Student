import express from 'express'; 
import { createCourse, getCourse } from '../controller/course.js';

const courseRouter = express.Router(); 

courseRouter.get('/create', createCourse); 
courseRouter.get('/list', getCourse); 

export default courseRouter; 