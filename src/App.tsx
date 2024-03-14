import { FormEvent, useState } from "react";

import { Grid, Typography } from "@mui/material";
import "./App.css";
import { Expense, ExpenseWrapper } from "./Components/ExpenseWrapper";
import { Income, IncomeWrapper } from "./Components/IncomeWrapper";
import { SavingWrapper } from "./Components/SavingWrapper";
import { TransferAccountWapper } from "./Components/TransferAccountWrapper";
import { error, log } from "console";

function App() {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [savingsTarget, setSavingsTarget] = useState(0);
  const [transferAccount, setTransferAccount] = useState(0);
  const [currentSaving, setCurrentSavings] = useState(0);
  const [transferError, setTransferErorr] = useState("");

  const handleDelete = (id: Number) => {
    const updatedIncomes = incomes.filter((income) => {
      console.log("deleting", id);
      return income.id !== id;
    });
    const updatedExpenses = expenses.filter((expense) => {
      console.log("deleting", id);
      return expense.id !== id;
    });
    console.log(updatedIncomes);
    setIncomes(updatedIncomes);
    setExpenses(updatedExpenses);
  };

  const progress = (currentSaving / savingsTarget) * 100 || 0;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (transferAccount <= balance) {
      setCurrentSavings((prevState) => {
        return prevState + transferAccount;
      });
      setTransferErorr("");
    } else {
      setTransferErorr("not enough money!");
    }
    setTransferAccount(0);
  };

  //way 1 to add the number of the total income
  let totalIncome = 0;
  incomes.forEach((income) => {
    totalIncome += income.amount;
  });
  //way 2 to add the number of the total expense
  const totalExpenses = expenses.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const balance = totalIncome - totalExpenses - currentSaving;
  return (
    <div className="App">
      <h1>Budget App</h1>
      <Grid container>
        <Grid item xs={12} md={4}>
          <IncomeWrapper
            incomes={incomes}
            setIncomes={setIncomes}
            handleDelete={handleDelete}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ExpenseWrapper
            expenses={expenses}
            setExpenses={setExpenses}
            handleDelete={handleDelete}
          />
        </Grid>
        <Grid items xs={12} md={4}>
          <SavingWrapper
            setSavingsTarget={setSavingsTarget}
            currentSaving={currentSaving}
            savingsTarget={savingsTarget}
            progress={progress}
          />
        </Grid>
      </Grid>
      <Typography marginBottom={2}>the balance:{balance}</Typography>
      <TransferAccountWapper
        setTransferAccount={setTransferAccount}
        handleSubmit={handleSubmit}
        transferAccount={transferAccount}
      />
      {transferError && <Typography color="error">{transferError}</Typography>}
    </div>
  );
}

export default App;
