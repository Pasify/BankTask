import { useState } from "react";

import { Card, Typography, CardBody } from "@material-tailwind/react";
import Pagination from "../components/Pagination";
import TransactionTableRow from "../components/transactions/TransactiontableRow";
import TransactionTableHeader from "../components/transactions/TransactionTableHeader";

const TABLE_HEAD = ["Category", "Amount", "Date", "Status", "Type"];

const TransactionTableBody = ({ transactions }) => (
  <tbody>
    {transactions.map((transaction, index) => (
      <TransactionTableRow
        key={transaction.transaction_id}
        transaction={transaction}
        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
      />
    ))}
  </tbody>
);

function Transactions({ transactions }) {
  // pagination functionality start
  //   if theres time, extract pagination logic to custom hook
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(5);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  function handlePagination(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function moveToPreviousPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function moveToNextPage() {
    if (currentPage !== Math.ceil(transactions.length / transactionsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }
  // pagination functionality end

  return (
    <Card className="h-full w-full p-4">
      <TransactionTableHeader />
      <CardBody className="px-0">
        <table className="w-full min-w-max table-auto text-left border-collapse">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-t border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <TransactionTableBody transactions={currentTransactions} />
        </table>
      </CardBody>
      <Pagination
        studentPerPage={transactionsPerPage}
        length={transactions.length}
        handlePagination={handlePagination}
        currentPage={currentPage}
        moveToPreviousPage={moveToPreviousPage}
        moveToNextPage={moveToNextPage}
      />
    </Card>
  );
}
export default Transactions;
