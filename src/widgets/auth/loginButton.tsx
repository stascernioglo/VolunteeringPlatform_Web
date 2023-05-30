import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const LoginButton = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Link className = "account-btn" to = "login">
                LOGIN
            </Link>
            <Link className = "account-btn" to = "signup">
                SIGN UP
            </Link>
        </Box>
    )
};

export {LoginButton}