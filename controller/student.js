import express from "express";
import { Course } from './course.js';
import { users } from './users.js';

const router = express.Router(); 

export const CoursesEnrollment = [
  {
    CrsName: "Cloud",
    StudID : "20206018"
  }
]

// View the list of students
export const listOfCourses = (req, res) => {
  res.send(Course); 
};

// Join to Certain Course
export const joinCourses = (req, res) => {
  let EnrollmentInfo = req.body;
  CoursesEnrollment.push(EnrollmentInfo);
  res.send(`Course ${EnrollmentInfo.CrsName} Added to ${EnrollmentInfo.StudID} Successfully!`);
}

// list Of Students
export const listOfStudent = (req,res) => {
  res.send(users); 
}

export default router; 