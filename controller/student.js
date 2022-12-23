import express from "express";

const router = express.Router(); 

export const Student = [
  {
    name: "khaled shawki", 
    email: "k@gmail.com",
    password: "habiba"
  }
]; 

// Log in a student
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.loginStudent(email, password)
    .then(student => res.json(student))
    .catch(err => res.status(401).send(err));
});

// View the list of students
router.get('/', (req, res) => {
  db.getStudents()
    .then(students => res.json(students))
    .catch(err => res.status(500).send(err));
});

export default router; 