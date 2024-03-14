import { Button } from "@mui/material";
import { Expense } from "./ExpenseWrapper";
import { Income } from "./IncomeWrapper";

type ListItemProps = {
  items: Expense[] | Income[];
  handleDelete: (key: number) => void;
};

export function ListItems({ items, handleDelete }: ListItemProps) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.source}</p>
            <p>{item.amount}</p>
            <p>{item.date}</p>
            <Button color="error" onClick={() => handleDelete(item.id)}>
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
