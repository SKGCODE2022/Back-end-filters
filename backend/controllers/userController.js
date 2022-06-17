// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')
// const asyncHandler = require('express-async-handler')
// const User = require('../models/userModel')


// // description: Register new user
// // route: /api/users
// const registerUser = asyncHandler(async (req, res) =>
// {
//     const {name, email, password} = req.body
//     if(!name || !email || !password)
//     {
//         res.status(400)
//         throw new Error('Please add all fields')
//     }

//     //check if user exists
//     const userExists = await User.findOne({email})

//     if(userExists)
//     {
//         res.status(400)
//         throw new Error('User already exists')
//     }

//     //hash password
//     const salt = await bcrypt.genSalt(10)
//     const hashedPassword = await bcrypt.hash(password, salt)

//     //create user

//     const user  = await User.create 
//     ({
//         name,
//         email,
//         password: hashedPassword
//     })

//     if(user)
//     {
//         res.status(201).json
//         ({
//             _id: user.id,
//             name: user.name,
//             email: user.email
//         })
//     }
//     else 
//     {
//         res.status(400)
//         throw new Error ('Invalid user data')
//     }
    
//     res.json({message: 'Register User'})
// })

// const verifyJWT = (req, res, next) =>
// {
//     const token = req.headers['x-access-token']
//     if (!token)
//     {
//         res.send('Token is needed')
//     }
//     else {jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => 
//     {
//         if(err) {res.json(auth = false, {message: 'Authentication failed'})}
//         else{req._id = decoded}.id;
//         next();
//     })
//     }
// }

// // description: Authenticate new user
// // route: /api/users/login
// // const loginUser = asyncHandler(async (req, res) =>
// // {
// //     const {email, password} = req.body
// //     res.json({message: 'Login User'})
// // })

// const loginUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body

// //   Check for user email
//   const user = await User.findOne({ email })

//   if (user && (await bcrypt.compare(password, user.password))) {
//     res.json({
//       _id: user.id,
//       name: user.name,
//       email: user.email,
//       token: generateToken(user._id),
//     })
//   } else {
//     res.status(400)
//     throw new Error('Invalid credentials')
//   }
// })

// // description: Get User data
// // route: /api/users/userdata
// const getUserData = asyncHandler(async (req, res) =>
// {
//     res.json({message: 'User Data Display'})
// })

// // Generate JWT
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: '30d',
//   })
// }

// module.exports = 
// {
//     registerUser, 
//     loginUser,
//     getUserData,
// }

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if user exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check for user email
  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

// @desc    Get user data
// @route   GET /api/users/userData
// @access  Private
const getUserData = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id)
  res.status(200).json({
    id: _id,
    name,
    email,
    
  })

})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  registerUser,
  loginUser,
  getUserData,
}