import express from 'express';

// import modules
import userRouter from './routes/userRouter.js';
import studentRouter from './routes/studentRouter.js';
import courseRouter from './routes/courseRouter.js';


const app = express(); 
const PORT = 3000; 

app.listen(PORT, () => {
  console.log(`Server Running on port http://localhost:${PORT} ..`); 
})

app.get("/", (req, res) => {
  // res.sendFile("./index.html"); 
  res.send("Hello, Welcome!")
}); 

app.use('/students', studentRouter);
app.use('/courses', courseRouter);
app.use('/users', userRouter); 




