import React from "react";
import {
  TextField,
  Button,
  Grid,
} from "@mui/material";
import Status from "../../utils/CheckoutSteps";
import ProcessingLoader from "../../layout/loader/processing";
import { saveShippingInfo } from "../../actions/shippingAction";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.shipping);

  const [address, setAddress] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [pinCode, setPinCode] = React.useState("");
  const [state, setState] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [phoneNo, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [setSaveAddress] = React.useState(false);
  const [setSameBillingDelivery] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = React.useState(true);
  const [isPhoneNoValid, setIsPhoneNoValid] = React.useState(true);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handlePincodeChange = (event) => {
    setPinCode(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handlePhoneChange = (event) => {
    const newPhoneNo = event.target.value;
    setPhone(newPhoneNo);
    setIsPhoneNoValid(newPhoneNo !== "" && newPhoneNo.length === 10);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(
      newEmail === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      email === "" ||
      firstName === "" ||
      lastName === "" ||
      address === "" ||
      city === "" ||
      state === "" ||
      country === "" ||
      pinCode === "" ||
      phoneNo === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    if (phoneNo && phoneNo.length !== 10) {
      toast.error("Phone Number should be 10 digits Long");
      return;
    }

    dispatch(
      saveShippingInfo({
        address,
        city,
        state,
        country,
        pinCode,
        phoneNo,
        email,
        firstName,
        lastName,
      })
    );

    if (!loading) {
      navigation("/process/payment");
    }
  };

  return (
    <>
      {loading ? (
        <ProcessingLoader />
      ) : (
        <div className="my-32 space-y-10">
          <Status />
          <div className="shippingPage">
            <div className="shippingPage__container">
              <div className="shippingPage__container__left">
                <div className="w-full md:w-3/5 mx-auto"> {/* Adjusted width for smaller screens */}
                  <form onSubmit={handleSubmit}>
                    <p className="text-2xl mb-5 font-bold self-start">
                      SHIPPING ADDRESS
                    </p>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="First Name"
                          variant="outlined"
                          fullWidth
                          value={firstName}
                          onChange={handleFirstNameChange}
                          className="outlinedInput"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Last Name"
                          variant="outlined"
                          fullWidth
                          value={lastName}
                          onChange={handleLastNameChange}
                          className="outlinedInput"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Address"
                          variant="outlined"
                          fullWidth
                          value={address}
                          onChange={handleAddressChange}
                          className="outlinedInput"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="City"
                          variant="outlined"
                          fullWidth
                          value={city}
                          onChange={handleCityChange}
                          className="outlinedInput"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Pincode"
                          variant="outlined"
                          fullWidth
                          value={pinCode}
                          onChange={handlePincodeChange}
                          className="outlinedInput"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="State"
                          variant="outlined"
                          fullWidth
                          value={state}
                          onChange={handleStateChange}
                          className="outlinedInput"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label="Country"
                          variant="outlined"
                          fullWidth
                          value={country}
                          onChange={handleCountryChange}
                          className="outlinedInput"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          label="Phone"
                          variant="outlined"
                          fullWidth
                          value={phoneNo}
                          onChange={handlePhoneChange}
                          className="outlinedInput"
                          error={!isPhoneNoValid && phoneNo !== ""}
                          helperText={
                            !isPhoneNoValid &&
                            phoneNo &&
                            "Please enter a valid phone number."
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Email"
                          variant="outlined"
                          fullWidth
                          value={email}
                          onChange={handleEmailChange}
                          className="outlinedInput"
                          error={!isValidEmail && email !== ""}
                          helperText={
                            !isValidEmail &&
                            email &&
                            "Please enter a valid email address."
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-checkbox"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          My billing and delivery information are the same.
                        </label>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            bgcolor: "#F1C40F",
                            borderRadius: "20px",
                            "&:hover": {
                              bgcolor: "#F1C40F",
                            },
                            textTransform: "none",
                          }}
                        >
                          Proceed to payment
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Shipping;
