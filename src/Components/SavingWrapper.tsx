import { ChangeEvent, useState } from "react";

import {
  Grid,
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";

type SavingWrapperProps = {
  setSavingsTarget: (key: number) => void;
  currentSaving: number;
  savingsTarget: number;
  progress: number;
};

export function SavingWrapper({
  setSavingsTarget,
  currentSaving,
  savingsTarget,
  progress,
}: SavingWrapperProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.target;
    setSavingsTarget(valueAsNumber);
  };
  return (
    <div>
      <form>
        <Grid container>
          <Grid item xs={12} marginBottom={2}>
            <TextField
              name="saving"
              id="saving"
              label="Set Target"
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid xs={12} marginBottom={2}>
            <Button type="reset" variant="outlined">
              Reset
            </Button>
          </Grid>
          <Grid item xs={12} marginBottom={2}>
            <Typography>Current Saving {currentSaving}</Typography>
          </Grid>
          <Grid item xs={12} marginBottom={2}>
            <Typography>Target {savingsTarget}</Typography>
          </Grid>
          <Grid item xs={12} marginBottom={2}>
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress variant="determinate" value={progress} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  color="text.secondary"
                >{`${Math.round(progress)}%`}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
