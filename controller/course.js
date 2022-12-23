export const Course = [
  {
    CrsCode: "SCS454",
    name: "Cloud Computing",
    instructor: "Dr. Fatma Omarah", 
    TA: "Ashraf Mohey"
  }
]

export const createCourse = (req, res) => {
  const course = req.body; 
  Course.push(course); 
};

export const getCourse = (req, res) => {
  res.send(Course); 
};