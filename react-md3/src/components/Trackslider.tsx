import React from "react";
import { Box, Slider } from "@mui/material";

export const Trackslider = () => {
  let sliderHandler = (event: any) => {
    console.log(event.target.value);
  };
  return (
    <Box width="300px">
      <Slider
        onChange={sliderHandler}
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
    </Box>
  );
};
