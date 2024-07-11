import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useLocation } from "react-router-dom";

const steps = [
  { label: "Enter Shipping Address", status: "in process/shipping" },
  { label: "Make Payment", status: "in process/payment" },
  { label: "Order Confirmation", status: "process/success" },
];

export default function HorizontalLinearAlternativeLabelStepper() {
  const location = useLocation();

  // Determine the active step based on the location pathname or other logic
  let activeStep = 0;
  if (location.pathname === "/process/payment") {
    activeStep = 1;
  } else if (location.pathname === "/process/success") {
    activeStep = 2;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              icon={
                index === activeStep ? (
                  <CustomIcon
                    color={
                      step.status === "in process/shipping"
                        ? "blue"
                        : step.status === "in process/payment"
                        ? "orange"
                        : "green"
                    }
                  />
                ) : index < activeStep ? (
                  <CompletedIcon />
                ) : (
                  <DefaultIcon />
                )
              }
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

// Example custom icon components
function CustomIcon({ color }) {
  return (
    <div
      style={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        backgroundColor: color,
      }}
    />
  );
}

function CompletedIcon() {
  return (
    <div
      style={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        backgroundColor: "green",
      }}
    />
  );
}

function DefaultIcon() {
  return (
    <div
      style={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        backgroundColor: "gray",
      }}
    />
  );
}
