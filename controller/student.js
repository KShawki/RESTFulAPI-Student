import express from "express";
import Course from './course';

const router = express.Router(); 

export const Student = [
  {
    name: "khaled shawki", 
    email: "k@gmail.com",
    password: "123"
  }
]; 

// Log in a student
router.post('/', (req, res) => {
  const { email, password } = req.body;
  // db.loginStudent(email, password)
  //   .then(student => res.json(student))
  //   .catch(err => res.status(401).send(err));
});

// View the list of students
export const listOfCourses = (req, res) => {
  res.send(Student); 
};

export default router; 