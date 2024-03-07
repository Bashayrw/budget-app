import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";

type Expense = {
  source: string;
  amount: number;
  date: string;
};

export function ExpenseWrapper() {
  const [expense, setExpense] = useState<Expense[]>([]); //to collect the data and to store them in
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(null);

  const handleChangeSource = (e) => {
    const value = e.target.value;
    setSource(value);
  };
  const handleChangeAmount = (e) => {
    const value = e.target.value;
    setAmount(value);
  };
  const handleChangeDate = (e) => {
    const value = e.target.value;
    setDate(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newExpense = {
      source: source,
      amount: amount,
      date: date,
    };
    setExpense([...expense, newExpense]);
  };

  return (
    <>
      <ExpenseForm
        handleChangeSource={handleChangeSource}
        handleSubmit={handleSubmit}
        handleChangeAmount={handleChangeAmount}
        handleChangeDate={handleChangeDate}
      />

      <ul>
        {expense.map((expense) => {
          return (
            <li>
              <p>{expense.source}</p>
              <p>{expense.amount}</p>
              <p>{expense.date}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
