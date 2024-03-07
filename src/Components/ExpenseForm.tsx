import { Button } from "./Button";

type ExpenseForProps = {
  handleChangeSource: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  handleChangeAmount: React.ChangeEventHandler<HTMLInputElement>;
  handleChangeDate: React.ChangeEventHandler<HTMLInputElement>;
};

export function ExpenseForm({
  handleChangeSource,
  handleSubmit,
  handleChangeAmount,
  handleChangeDate,
}: ExpenseForProps) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="resource">Expense Source</label>
        <input
          type="text"
          name="Resource"
          id="Resource"
          placeholder="what is the resource"
          onChange={handleChangeSource}
        />
      </div>

      <div>
        <label htmlFor="amount">Expense Amount</label>
        <input
          type="text"
          name="Amount"
          id="Amount"
          placeholder="Your Amount"
          onChange={handleChangeAmount}
        />
      </div>

      <div>
        <label htmlFor="date">Date of Expense</label>
        <input
          type="date"
          name="Date"
          id="Date"
          title="Date"
          onChange={handleChangeDate}
        />
      </div>
      <Button name="Add expense" />
    </form>
  );
}
