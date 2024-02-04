import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
const PayHistory = () => {
  return (
    <div>
      <Box className="flex">
        <Sidebar />
        <Box className="flex-grow mt-16 pr-10">
          <div className="flex gap-2 pb-5 pt-5">
            <p className="text-blue-400">Home</p>
            <p>/</p>
            <p>Dashboard</p>
          </div>
          Pay History page \
        </Box>
      </Box>
    </div>
  );
};

export default PayHistory;
