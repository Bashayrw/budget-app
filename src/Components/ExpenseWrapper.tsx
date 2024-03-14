import { ChangeEvent, FormEvent, useState } from "react";
import { Dayjs } from "dayjs";

import { ListItem } from "@mui/material";

import { Form } from "./Form";
import { ListItems } from "./ListItems";

export type Expense = {
  id: number;
  source: string;
  amount: number;
  date: string | null;
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
type ExpenseWrapperProps = {
  expenses: Expense[];
  setExpenses: (key: Expense[]) => void;
  handleDelete: any;
};

export function ExpenseWrapper({
  expenses,
  setExpenses,
  handleDelete,
}: ExpenseWrapperProps) {
  //to collect the data and to store them in
  const [expense, setExpense] = useState<Expense>({
    id: Number(new Date()),
    source: "",
    amount: 0,
    date: new Date().toLocaleDateString(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setExpense({
      ...expense,
      [name]: value,
    });
  };
  const handleChangeDate = (value: Dayjs | null) => {
    if (value) {
      setExpense({
        ...expense,
        date: value.toDate().toLocaleDateString(),
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
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
      <ListItems items={expenses} handleDelete={handleDelete} />
    </>
  );
}
