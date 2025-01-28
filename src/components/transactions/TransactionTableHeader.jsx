import {
  Button,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";

const TransactionTableHeader = () => (
  <CardHeader floated={false} shadow={false} className="rounded-none">
    <div className="mb-4 flex justify-start gap-8 md:flex-row md:items-center">
      <div className="text-start">
        <Typography variant="h3" color="blue-gray">
          Recent Transactions
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          These are details about the last transactions
        </Typography>
      </div>
    </div>
  </CardHeader>
);
export default TransactionTableHeader;
