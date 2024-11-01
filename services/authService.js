const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET;

const registerUser = async (username, password) => {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        throw new Error('Username already exists');
    }

    const user = new User({ username, password });
    await user.save();
    return user;
};

const loginUser = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    return token;
};

const logoutUser = () => {
    return { message: 'Logged out successfully' };
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
};
