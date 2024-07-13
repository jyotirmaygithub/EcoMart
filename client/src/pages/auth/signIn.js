import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Box from "@mui/material/Box";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../../components/copyRight";
import Loader from "../../layout/loader/Loader";
import { signUp } from "../../actions/userActions";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Signup() {
  const defaultTheme = createTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.userData
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    if (isAuthenticated) {
      toast.success("User Registered Successfully");
      navigate("/");
    }
  }, [isAuthenticated, loading, error, navigate]);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(
      newEmail !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)
    );
  };

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    setIsValidName(newName.length >= 4 && newName.length <= 20);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsValidPassword(event.target.value.length >= 8);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  let isSignInDisabled = !(
    email &&
    password &&
    isValidEmail &&
    confirmPassword &&
    name &&
    isValidName
  );

  function handleSignUpSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password do not match");
      return;
    }

    dispatch(signUp(name, email, password));
  }

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            component="form"
            onSubmit={handleSignUpSubmit}
            className="space-y-4"
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#F1C40F" }}>
              <LockOpenIcon
                sx={{
                  bgcolor: "#F1C40F",
                }}
              />
            </Avatar>
            <Typography variant="h5" component="h1" className="text-center">
              Sign Up for an Account!
            </Typography>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              className="mt-1"
              value={name}
              onChange={handleNameChange}
              error={!isValidName && name !== ""}
              helperText={
                !isValidName && name !== ""
                  ? "Name must be between 4 and 20 characters."
                  : ""
              }
            />

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              className="mt-1"
              value={email}
              onChange={handleEmailChange}
              error={!isValidEmail && email !== ""}
              helperText={
                !isValidEmail && email !== ""
                  ? "Please enter a valid email address."
                  : ""
              }
            />
            <TextField
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              fullWidth
              className="mt-1"
              error={!isValidPassword && password !== ""}
              helperText={
                !isValidPassword && password !== ""
                  ? "Password must be at least 8 characters."
                  : ""
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={handleShowPasswordClick}>
                      {showPassword ? (
                        <VisibilityOff sx={{ fontSize: 30 }} />
                      ) : (
                        <Visibility sx={{ fontSize: 30 }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={password}
              onChange={handlePasswordChange}
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              fullWidth
              className="mt-1"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={handleShowPasswordClick}>
                      {showPassword ? (
                        <VisibilityOff sx={{ fontSize: 30 }} />
                      ) : (
                        <Visibility sx={{ fontSize: 30 }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />

            <Typography variant="body2" className="mt-2">
              I acknowledge ecommerce will use my information in accordance
              with its{" "}
              <Link to="#" className="text-primary no-underline">
                Privacy Policy.
              </Link>
            </Typography>

            <Button
              variant="contained"
              fullWidth
              sx={{
                my: 3,
                bgcolor: "#F1C40F",
                borderRadius: "20px",
                "&:hover": {
                  bgcolor: "#F1C40F",
                },
              }}
              type="submit"
              disabled={isSignInDisabled || loading}
            >
              {loading ? <Loader size={30} color={"white"} /> : "CREATE ACCOUNT"}
            </Button>

            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: "1rem" }}
            >
              Already have an account?
              <Link
                to="/login"
                className="text-primary no-underline hover:underline"
              >
                Login
              </Link>
            </Typography>
          </Box>
          <Copyright sx={{ mt: 2, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Signup;
