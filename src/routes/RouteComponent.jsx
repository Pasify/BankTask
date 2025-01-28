import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import Transactions from "../pages/Transactions";
import transactionData from "../data/MOCK_DATA .json";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "transactions",
    element: <Transactions transactions={transactionData} />,
  },
];
const router = createBrowserRouter(routes);
export default router;
