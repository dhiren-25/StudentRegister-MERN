// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB.
mongoose.connect(process.env.MONGO)
.then(() => console.log('MongoDB Connected...'))
.catch((e) => console.log(e));

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  rollNo: String,
  phoneNum: String,
  address: String,
  gender: String,
  branch: String,
});

const Student = mongoose.model('Student', studentSchema);

// Create a new student
// app.post('/api/students', async (req, res) => {
//   try {
//     const student = new Student(req.body);
//     await student.save();
//     res.send(student);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

app.post('/api/addStudent', async(req,res) => {
  try{
  const { firstName,lastName , email , rollNo,
  phoneNum, address , gender , branch } = req.body;

  //create a new student 
  const newStudent = new Student({
    firstName,
    lastName,
    email,
    rollNo,
    phoneNum,
    address,
    gender,
    branch,
  });

  //save the student to the database
  await newStudent.save();
  res.status(201).json({success : true, message:'Student added Succesfully !'});
  }catch (error) {
    console.error(error);
    res.status(500).json({success : false, message:' Server Error !' });
  }
});

// Get all students
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Update a student

// Update a student by ID
app.put('/api/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // This option returns the modified document
    );

    if (!student) {
      res.status(404).send('Student not found');
    }

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Get a single student by ID
app.get('/api/student/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      res.status(404).send('Student not found');
    }
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete a student
app.delete('/api/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      res.status(404).send('Student not found');
    }
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(process.env.MONGO);
});


// const mongoose = require("mongoose")

// const dbUrl = "mongodb+srv://dhiren25:Dhiren25@cluster0.kf0w7y8.mongodb.net/?retryWrites=true&w=majority";

// const connectionParams = {
//   useNewUrlParser : true,
//   useUnifiedTopology: true,
// };

// mongoose.connect(dbUrl,connectionParams).then(() => {
//   console.info("Connect to DB");
// })
// .catch((e) => {
//   console.log("Error", e);
// });