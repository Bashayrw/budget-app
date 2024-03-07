import { ChangeEvent, useState } from "react";
import { IncomeForm } from "./IncomeForm";

type Income = {
  source: string;
  amount: number;
  date: string;
};

export function IncomeWrapper() {
  const [income, setIncome] = useState<Income[]>([]); //to collect the data and to store them in
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(null);

  const handleChangeSource = (e: any) => {
    const value = e.target.value;
    setSource(value);
  };
  const handleChangeAmount = (e: any) => {
    const value = e.target.value;
    setAmount(value);
  };
  const handleChangeDate = (e: any) => {
    const value = e.target.value;
    setDate(value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newIncome = {
      source: source,
      amount: amount,
      date: date,
    };
    setIncome([...income, newIncome]);
  };

  return (
    <>
      <IncomeForm
        handleChangeSource={handleChangeSource}
        handleSubmit={handleSubmit}
        handleChangeAmount={handleChangeAmount}
        handleChangeDate={handleChangeDate}
      />

      <ul>
        {income.map((income) => {
          return (
            <li>
              <p>{income.source}</p>
              <p>{income.amount}</p>
              <p>{income.date}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
