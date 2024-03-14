import {
  Grid,
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

type TransferAccountProps = {
  setTransferAccount: (key: number) => void;
  handleSubmit: (key:FormEvent) => void
  transferAccount: number
};

export function TransferAccountWapper({ setTransferAccount, handleSubmit, transferAccount }: TransferAccountProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber } = e.target;
    setTransferAccount(valueAsNumber);
  };

  return (
    <div>
      <form onClick={handleSubmit}>
        <Grid container>
          <Grid item xs={12} marginBottom={2}>
            <TextField
              name="saving"
              id="saving"
              label="Transfer to Saving Account"
              onChange={handleChange}
              value={transferAccount}
              type="number"
            />
          </Grid>
          <Grid xs={12} marginBottom={2}>
            <Button type="reset" variant="outlined">
              Transfer
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
