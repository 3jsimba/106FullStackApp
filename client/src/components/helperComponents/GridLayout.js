import { Grid, Stack } from "@mui/material";
import React from "react";

function GridLayout(props) {
  const { left, right } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={16} md={16}>
        {right}
      </Grid>
      <Grid item md={16} sx={{ display: { xs: "none", md: "block" } }}>
      {left}
      </Grid>
    </Grid>
  );
};

export default GridLayout;
