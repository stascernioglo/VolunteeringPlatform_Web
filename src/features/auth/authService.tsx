import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || 'https://localhost:7091';

const login = async (username: string, password: string) => {
  const response = await axios
        .post(`${apiUrl}/api/account/login`, {
            username,
            password,
        });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data.accessToken));
    }
    return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    return null;
};

const authService = {
  login,
  logout,
  getCurrentUser,
};

export default authService;