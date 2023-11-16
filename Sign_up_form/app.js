const express= require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();
const PORT= 3000;

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/SignUpApp",{useNewUrlParser:true,useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });
  
  const User = mongoose.model('User', userSchema);
  
  
//   // Handle form submission
//   app.post('/submit', (req, res) => {
//     const { name, email, password } = req.body;
  
//     // Create a new user instance
//     const newUser = new User({
//       name,
//       email,
//       password,
//     });
  
//     // Save the user to the database
//     newUser.save((err) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Error saving to the database');
//       } else {
//         res.send('User successfully registered!');
//       }
//     });
//   });
  
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });


// *****************************************************************************************
  app.post('/submit', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Create a new user instance
      const newUser = new User({
        name,
        email,
        password,
      });
  
      // Save the user to the database
      await newUser.save();
      
      res.send('User successfully registered!');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error saving to the database');
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });