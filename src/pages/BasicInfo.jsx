import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import React from "react";

const BasicInfo = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, paddingRight: 8, marginTop: 8 }}>
          <div className="flex gap-2 pb-5 pt-5">
            <p className="text-blue-400">Home</p>
            <p>/</p>
            <p>Dashboard</p>
          </div>
          Basic info page
        </Box>
      </Box>
    </div>
  );
};

export default BasicInfo;
