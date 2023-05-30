import axios from "axios";

const login = async (username: string, password: string) => {
  const response = await axios
        .post("https://localhost:7091/api/account/login", {
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