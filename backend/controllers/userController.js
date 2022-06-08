// description: Register new user
// route: /api/users
const registerUser = (req, res) =>
{
    res.json({message: 'Register User'})
}

// description: Authenticate new user
// route: /api/users/login
const loginUser = (req, res) =>
{
    res.json({message: 'Login User'})
}

// description: Get User data
// route: /api/users/userdata
const getUserData = (req, res) =>
{
    res.json({message: 'User Data Display'})
}


module.exports = 
{
    registerUser, 
    loginUser,
    getUserData,
}