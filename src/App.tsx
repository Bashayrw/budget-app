import { Grid } from "@mui/material";
import "./App.css";
import { ExpenseWrapper } from "./Components/ExpenseWrapper";
import { IncomeWrapper } from "./Components/IncomeWrapper";

function App () {
  return (
    <div className="App">
      <h1>Budget App</h1>
      <Grid container>
        <Grid item xs={6}>
        <IncomeWrapper/>
        </Grid>
        <Grid item xs={6}>
        <ExpenseWrapper/>
        </Grid>
      </Grid>
       
    </div>
  );
}

export default App;
