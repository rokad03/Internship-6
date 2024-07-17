// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose"

// const app=express();
// app.use(express.json())
// app.use(express.urlencoded())
// app.use(cors())

// mongoose.connect("mongodb://127.0.0.1:27017/myLoginRegisterDB",{
//   useNewUrlParser: true,
//   useUnifiedTopology:true
// })

// const userSchema= new mongoose.Schema({
//   name:String,
//   email:String,
//   password:String

// })

// const User=new mongoose.model("User",userSchema)

// // Assuming you have Express.js, you can define a route like this
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find the user with the given email
//     const user = await User.findOne({ email: email });

//     if (user) {
//       if (password === user.password) {
//         res.status(200).send({ message: "Login Successful", user: user,success:"true"});
//       } else {
//         res.send({ message: "Password did not match" });
//       }
//     } else {
//       res.send({ message: "User Not Registered" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: 'Internal Server Error' });
//   }
// });

// app.post('/register', async (req, res) => {
//     const { name, email, password } = req.body;
  
//     try {
//       // Check if a user with the given email already exists
//       const existingUser = await User.findOne({ email: email });
  
//       if (existingUser) {
//         return res.status(400).send({ message: 'User Already Registered' });
//       }
  
//       // If the user doesn't exist, create a new user and save it
//       const newUser = new User({
//         name: name,
//         email: email,
//         password: password,
//       });
  
//       await newUser.save();
  
//       return res.status(201).send({ message: 'Successfully Registered' });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).send({ message: 'Internal Server Error' });
//     }
//   });











// Import bcrypt
import bcrypt from 'bcrypt';
import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app=express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/carrentalproject",{
  useNewUrlParser: true,
  useUnifiedTopology:true
})

const userSchema= new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  ip:String,
  city:String,
  country_name:String
})
const adminSchema= new mongoose.Schema({
  email:String,
  password:String

})

const User=new mongoose.model("User",userSchema)
const Admin=new mongoose.model("Admin",adminSchema)
// ... (other imports and middleware)

// Assuming you have Express.js, you can define a route like this
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user with the given email
    const user = await User.findOne({ email: email });

    if (user) {
      // Compare the provided password with the stored hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        res.send({ message: "Login Successful", user: user, success: true });
      } else {
        res.send({ message: "Password did not match" });
      }
    } else {
      res.send({ message: "User Not Registered" });
    }
  } catch (error) {
    console.error(error);
    res.send({ message: 'Internal Server Error' });
  }
});

app.post('/register', async (req, res) => {
  const { name, email, password,ip,city,country_name} = req.body;

  try {
    // Check if a user with the given email already exists
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.send({ message: 'User Already Registered' });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10); // You can configure the number of rounds

    // Create a new user with the hashed password
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
      ip: ip,
      city:city,
      country_name:country_name
       // Store the hashed password
    });

    await newUser.save();

    return res.send({ message: 'Successfully Registered' });
  } catch (error) {
    console.error(error);
    return res.send({ message: 'Internal Server Error' });
  }
});

// ... (rest of your code)
app.get("/getUsers",(req,res)=>{
  User.find()
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.post('/adminlogin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user with the given email
    const user = await Admin.findOne({ email: email });

    if (user) {
      // Compare the provided password with the stored hashed password
      

      if (password==user.password) {
        res.send({ message: "Login Successful", user: user, success: true });
      } else {
        res.send({ message: "Password did not match" });
      }
    } else {
      res.send({ message: "User Not Registered" });
    }
  } catch (error) {
    console.error(error);
    res.send({ message: 'Internal Server Error' });
  }
});

app.listen(3001,()=>{
    console.log("connected  at 3001")
});