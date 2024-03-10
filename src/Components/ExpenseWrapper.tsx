import { ChangeEvent, FormEvent, useState } from "react";
import { Form } from "./Form";
import { ListItem } from "@mui/material";
import { ListItems } from "./ListItems";

export type Expense = {
  id: number
  source: string;
  amount: number;
  date: string | null ;
};
const EXPENSE_INPUTS = [
  {
    name: "source",
    id: "source",
    lable: "Expense Source",
  },
  {
    name: "amount",
    id: "amount",
    lable: "Expense Amount",
  },
];

export function ExpenseWrapper() {
  const [expenses, setExpenses] = useState<Expense[]>([]); //to collect the data and to store them in
  const [expense, setExpense] = useState<Expense>({
    id: Number(new Date()),
    source: "",
    amount: 0,
    date: new Date().toLocaleDateString()
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value}=e.target
    setExpense({
      ...expense,
      [name]:value,
    })
  };
  const handleChangeDate = (value: {$d:Date}) => {
    setExpense({
      ...expense,
      date: new Date(value.$d).toLocaleDateString(),
    })
  };

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    const newExpense = {
      id: Number(new Date()),
      source: expense.source,
      amount: Number(expense.amount),
      date: expense.date,
    };
    setExpenses([...expenses, newExpense]);
  };

  return (
    <>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleChangeDate={handleChangeDate}
        inputs={EXPENSE_INPUTS}
      />
      <ListItems items={expenses}/>
    </>
  )
}
