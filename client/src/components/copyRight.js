import React from 'react'
import Typography from "@mui/material/Typography";

export default function copyright(props) {
  return (
    <div>
        <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        EcoMart {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  )
}
