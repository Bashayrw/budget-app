import { ChangeEvent, FormEvent, useState } from "react";
import { Dayjs } from "dayjs";

import { ListItem } from "@mui/material";

import { Form } from "./Form";
import { ListItems } from "./ListItems";

export type Income = {
  id: number;
  source: string;
  amount: number;
  date: string | null;
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

type IncomeWrapperProps = {
  incomes: Income[];
  setIncomes: (key: Income[]) => void;
  handleDelete: (key: number) => void;
};
export function IncomeWrapper({
  incomes,
  setIncomes,
  handleDelete,
}: IncomeWrapperProps) {
  //to collect the data and to store them in
  const [income, setIncome] = useState<Income>({
    id: Number(new Date()),
    source: "",
    amount: 0,
    date: new Date().toLocaleDateString(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIncome({
      ...income,
      [name]: value,
    });
  };

  const handleChangeDate = (value: Dayjs | null) => {
    if (value) {
      setIncome({
        ...income,
        date: value.toDate().toLocaleDateString(),
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
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
      <ListItems items={incomes} handleDelete={handleDelete} />
    </>
  );
}
