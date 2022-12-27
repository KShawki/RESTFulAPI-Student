import express from "express";
import {listOfCourses, joinCourses, listOfStudent } from "../controller/student.js";

const studentRouter = express.Router(); 

studentRouter.get('/', (req, res) => {
  res.send(`Hello, From Students`)
});



studentRouter.get("/listOfCourses", listOfCourses);
studentRouter.get("/listOfStudent", listOfStudent); 
studentRouter.post("/join", joinCourses); 

export default studentRouter; 