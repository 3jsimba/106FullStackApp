
import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function GoBack() {

  return (
    <Typography sx={{ mb: 2 }}>
      <Link to="/"> &lt;&lt; Go Back</Link>
    </Typography>
  );
};

export default GoBack;
