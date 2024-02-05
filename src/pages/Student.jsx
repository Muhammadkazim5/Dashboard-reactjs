import { Box, Typography } from "@mui/material";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";
const Student = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="mt-24 pr-10">
        <Box className="container">
          <div className="flex gap-2 pb-5">
            <p className="text-blue">Home</p>
            <p>/</p>
            <p>Dashboard</p>
          </div>
          <Typography
            variant="p"
            className=" text-3xl pt-5 font-medium text-gray-600"
          >
            Dashboard
          </Typography>
          <MainContent />
        </Box>
      </div>
    </div>
  );
};

export default Student;
