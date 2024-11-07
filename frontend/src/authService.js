// src/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth/'; // Update with your API URL

const login = async (username, password) => {
    const response = await axios.post(`${API_URL}login/`, {
        username,
        password,
    });
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const logout = async () => {
    await axios.post(`${API_URL}logout/`);
    localStorage.removeItem('user');
};

const register = async (username, password1, password2) => {
    const response = await axios.post(`${API_URL}registration/`, {
        username,
        password1,
        password2,
    });
    return response.data;
};

const getCurrentUser  = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export default {
    login,
    logout,
    register,
    getCurrentUser ,
};