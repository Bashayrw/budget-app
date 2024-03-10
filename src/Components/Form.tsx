//import { Button } from "./Button";
import { Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormEvent } from "react";

type Input= {
  name: string,
    id: string,
    lable: string,
}
type FormProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => void;
  handleChangeDate: (value: { $d: Date }) => void;
  inputs: Input[];
};


export function Form({
  handleChange,
  handleSubmit,
  handleChangeDate,
  inputs,
}: FormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        {inputs.map((input) => {
          return (
            <Grid item xs={12} key={input.id}>
              <TextField
                name={input.name}
                id={input.id}
                label={input.lable}
                onChange={handleChange}
              />
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker onChange={handleChangeDate} />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" type="submit">
            Add income
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

{
  /* <label htmlFor="date">Date of Income</label>
     <input
       type="date"
       name="Date"
       id="Date"
       title="Date"
       onChange={handleChangeDate}
     /> */
}
