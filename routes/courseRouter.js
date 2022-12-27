import express from 'express'; 
import { createCourse, getCourse } from '../controller/course.js';
import path from 'path'; 

const courseRouter = express.Router(); 

courseRouter.get('/create', (req, res)=> {
  res.sendFile(path.resolve('public/addCourse.html'))
}); 
courseRouter.post('/create', createCourse); 

courseRouter.get('/', getCourse); 
courseRouter.get('/list', getCourse); 

export default courseRouter; 