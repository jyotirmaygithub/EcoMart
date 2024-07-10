import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Avatar,
  Container,
  CssBaseline,
  IconButton,
  Box,
  Link as MuiLink, // Renamed to MuiLink to avoid conflict with react-router-dom Link
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../actions/userActions";
import Copyright from "../../components/copyRight";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast } from "react-toastify";
import CircularLoader from "../../layout/loader/Loader";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const defaultTheme = createTheme();

  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.userData
  );

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(
      newEmail !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)
    );
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const isSignInDisabled = !(email && password && isValidEmail);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    if (isAuthenticated) {
      toast.success("Login Successfully");
      navigate("/");
    }
  }, [dispatch, isAuthenticated, loading, error, navigate]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOpenIcon sx={{ fontSize: 40 }} />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in to Your Account
            </Typography>
            <Box component="form" onSubmit={handleLoginSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleShowPasswordClick}>
                      {showPassword ? (
                        <VisibilityOff sx={{ fontSize: 30 }} />
                      ) : (
                        <Visibility sx={{ fontSize: 30 }} />
                      )}
                    </IconButton>
                  ),
                }}
              />
              <Typography variant="body2" color="textSecondary" align="center" mt={2}>
                By signing in, you accept the Cricket Weapon{" "}
                <MuiLink
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    // Handle link to terms of use
                  }}
                >
                  Terms of Use
                </MuiLink>{" "}
                and acknowledge Cricket Weapon will use your information in accordance with its{" "}
                <MuiLink
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    // Handle link to privacy policy
                  }}
                >
                  Privacy Policy
                </MuiLink>
                .
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isSignInDisabled}
              >
                {loading ? <CircularLoader /> : "Sign In"}
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/signup" variant="body2" className="hover:underline">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 2, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
