const authService = require('../services/authService');

const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await authService.registerUser(username, password);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await authService.loginUser(username, password);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const logout = (req, res) => {
    const response = authService.logoutUser();
    res.status(200).json(response);
};

module.exports = {
    register,
    login,
    logout,
};
