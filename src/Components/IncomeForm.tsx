import { Button } from "./Button";

type IncomeForProps = {
  handleChangeSource: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  handleChangeAmount: React.ChangeEventHandler<HTMLInputElement>;
  handleChangeDate: React.ChangeEventHandler<HTMLInputElement>;
};

export function IncomeForm({
  handleChangeSource,
  handleSubmit,
  handleChangeAmount,
  handleChangeDate,
}: IncomeForProps) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="resource">Income Source</label>
        <input
          type="text"
          name="Resource"
          id="Resource"
          placeholder="what is the resource"
          onChange={handleChangeSource}
        />
      </div>

      <div>
        <label htmlFor="amount">Income Amount</label>
        <input
          type="text"
          name="Amount"
          id="Amount"
          placeholder="Your Amount"
          onChange={handleChangeAmount}
        />
      </div>

      <div>
        <label htmlFor="date">Date of Income</label>
        <input
          type="date"
          name="Date"
          id="Date"
          title="Date"
          onChange={handleChangeDate}
        />
      </div>
      <Button name="Add income" />
    </form>
  );
}
