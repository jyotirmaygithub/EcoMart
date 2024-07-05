import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Checkbox,
  TextField,
  FormControlLabel,
  Grid,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Box from "@mui/material/Box";
import Loader from "../../layout/loader/Loader"
import { Link, useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Copyright from "../../components/copyRight";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {signUp} from "../../actions/userActions"

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

  // const [loading, setLoading] = useState(false);

  const [areCheckboxesChecked, setAreCheckboxesChecked] = useState({
    checkbox1: false,
    checkbox2: false,
  });

  const { loading, isAuthenticated, error } = useSelector((state) => state.userData);


  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    if (isAuthenticated) {
      toast.success("User Registered Successfully");
      navigate("/account");
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

  const handleCheckboxChange = (checkboxName) => (event) => {
    setAreCheckboxesChecked((prevState) => ({
      ...prevState,
      [checkboxName]: event.target.checked,
    }));
  };

  let isSignInDisabled = !(
    email &&
    password &&
    isValidEmail &&
    confirmPassword &&
    name &&
    isValidName &&
    areCheckboxesChecked.checkbox1 &&
    areCheckboxesChecked.checkbox2
  );

  function handleSignUpSubmit(e) {
    e.preventDefault();
    // setLoading(true);
    console.log(email, "" , name, " " , password)

    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password do not match");
      // setLoading(false);
      return;
    }

    dispatch(signUp(name,email,password));
    // setLoading(false);
  }

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            className="space-y-4"
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar className="m-1 bg-secondary">
              <LockOutlinedIcon />
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
                      {showPassword ? <VisibilityOff /> : <Visibility />}
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
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <Grid
              container
              className="mt-2"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I Accept The ecommerce Terms & Conditions"
                  className="mt-1"
                  checked={areCheckboxesChecked.checkbox1}
                  onChange={handleCheckboxChange("checkbox1")}
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I Accept The ecommerce Terms Of Use"
                  className="mt-1"
                  checked={areCheckboxesChecked.checkbox2}
                  onChange={handleCheckboxChange("checkbox2")}
                />
              </Grid>
            </Grid>

            <Typography variant="body2" className="mt-2">
              I acknowledge ecommerce will use my information in accordance
              with its{" "}
              <Link href="#" className="text-primary no-underline">
                Privacy Policy.
              </Link>
            </Typography>

            <Button
              variant="contained"
              className="mt-3 w-full"
              onClick={handleSignUpSubmit}
              disabled={isSignInDisabled || loading}
            >
             {loading ? <Loader widht={2} /> : <>CREATE ACCOUNT</>}
            </Button>

            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: "1rem" }}
            >
              Already have an account?
              <Link to="/login" className="text-primary no-underline">
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
