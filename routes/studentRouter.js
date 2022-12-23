import express from "express";
import {listOfCourses, joinCourses, listOfStudent } from "../controller/student.js";

const studentRouter = express.Router(); 

studentRouter.use("/listOfCourses", listOfCourses);
studentRouter.use("/listOfStudent", listOfStudent); 
studentRouter.use("/join", joinCourses); 

export default studentRouter; 