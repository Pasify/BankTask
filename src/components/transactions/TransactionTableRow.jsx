import { Chip, Typography } from "@material-tailwind/react";
import { format } from "date-fns";

const TransactionTableRow = ({ transaction }) => {
  const {
    transaction_id,
    transaction_date,
    amount,
    status,
    category,
    transaction_type,
  } = transaction;

  const formattedDate = format(new Date(transaction_date), "MMMM dd, yyyy");

  return (
    <tr>
      {" "}
      <td className="p-4">
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal capitalize"
        >
          {category}
        </Typography>
      </td>
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          ${amount.toFixed(2)}
        </Typography>
      </td>
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {formattedDate}
        </Typography>
      </td>
      <td className="p-4">
        <Chip
          className="w-[50%]"
          size="sm"
          variant="ghost"
          value={status}
          color={
            status === "completed"
              ? "green"
              : status === "pending"
              ? "amber"
              : "red"
          }
        />
      </td>
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-bold">
          {transaction_type}
        </Typography>
      </td>
    </tr>
  );
};
export default TransactionTableRow;
