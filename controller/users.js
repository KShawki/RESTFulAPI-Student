import { v4 as uuidv4 } from "uuid";
const hash = uuidv4();

export const users = [
  {
    ID: 1,
    name: "khaled shawki", 
    email: "k@gmail.com",
    password: "x"
  }
]; 

export const getUser = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  let user = req.body;
  users.push({ ...user, ID: hash });

  console.log(req.body);
  res.send(`User with name {${user.name}} was added!\n`);
};

