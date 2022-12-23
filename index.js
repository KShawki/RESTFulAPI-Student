import express from 'express';

import userRouter from './routes/userRouter';
import studentRouter from './routes/studentRouter';
import courseRouter from './routes/courseRouter';


const app = express(); 
const PORT = 3000; 

app.listen(PORT, () => {
  console.log(`Server Running on port http://localhost:${PORT} ..`); 
})

app.get("/", (req, res) => {
  res.sendFile("./index.html"); 
}); 

app.use('/students', studentRouter);
app.use('/courses', courseRouter);
app.use('/users', userRouter); 




