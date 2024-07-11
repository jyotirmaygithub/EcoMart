import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularIndeterminate({size, color}) {
  return <CircularProgress size={size} sx={{ color: color}} />;
}
