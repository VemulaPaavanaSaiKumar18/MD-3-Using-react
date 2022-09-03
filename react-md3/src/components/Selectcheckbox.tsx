import React from "react";
import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
} from "@mui/material";

export const Selectcheckbox = () => {
  const selectHanduler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel id="Select thinks to play cricket">
          TO PLAY CRICKET
        </FormLabel>
        <FormGroup aria-labelledby="Select thinks to play cricket">
          <FormControlLabel
            control={<Checkbox onChange={selectHanduler} />}
            label="BALL"
          />
          <FormControlLabel
            control={<Checkbox onChange={selectHanduler} />}
            label="BAT"
          />
          <FormControlLabel
            control={<Checkbox onChange={selectHanduler} />}
            label="STEMP"
          />
          <FormControlLabel
            control={<Checkbox onChange={selectHanduler} />}
            label="FOOT BALL"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};
