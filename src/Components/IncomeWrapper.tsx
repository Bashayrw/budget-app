import { ChangeEvent, FormEvent, useState } from "react";
import { Form } from "./Form";
import { ListItem } from "@mui/material";
import { ListItems } from "./ListItems";

export type Income = {
  id: number
  source: string;
  amount: number;
  date: string | null ;
};
const INCOME_INPUTS = [
  {
    name: "source",
    id: "source",
    lable: "Income Source",
  },
  {
    name: "amount",
    id: "amount",
    lable: "Income Amount",
  },
];

export function IncomeWrapper() {
  const [incomes, setIncomes] = useState<Income[]>([]); //to collect the data and to store them in
  console.log("incomes:", incomes)
  const [income, setIncome] = useState<Income>({
    id: Number(new Date()),
    source: "",
    amount: 0,
    date: new Date().toLocaleDateString()
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value}=e.target
    setIncome({
      ...income,
      [name]:value,
    })
  };
  const handleChangeDate = (value: {$d:Date}) => {
    setIncome({
      ...income,
      date: new Date(value.$d).toLocaleDateString(),
    })
  };

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    const newIncome = {
      id: Number(new Date()),
      source: income.source,
      amount: Number(income.amount),
      date: income.date,
    };
    setIncomes([...incomes, newIncome]);
  };

  return (
    <>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleChangeDate={handleChangeDate}
        inputs={INCOME_INPUTS}
      />
      <ListItems items={incomes}/>

    </>
  );
}
