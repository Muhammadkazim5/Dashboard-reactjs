import { Box, Card, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../components/Sidebar";
// import Paper from "@mui/material/Paper";
import { FaArrowTrendUp } from "react-icons/fa6";
import Badge from "@mui/material/Badge";
import { MdReceipt } from "react-icons/md";
import { CgArrowsV } from "react-icons/cg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import InstructorChart from "../components/InstructorChart";
const Instructor = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, paddingRight: 8, marginTop: 8 }}>
          <div className="flex gap-2 pb-5 pt-5">
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
          <div className="my-10">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card className="">
                  <Box className="flex justify-between items-center p-3">
                    <Box className="flex flex-col">
                      <Typography variant="p">Earnings</Typography>
                      <Typography variant="p" className="text-slate-400">
                        LAST 7 DAYS
                      </Typography>
                    </Box>
                    <Box className="p-2 rounded-sm text-white bg-blue text-xl">
                      <FaArrowTrendUp />
                    </Box>
                  </Box>
                  <Divider />
                  <Box className="p-3">
                    <InstructorChart />
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card className="">
                  <Box className="flex justify-between items-center p-3">
                    <Box className="flex flex-col">
                      <Typography variant="p">Sales today</Typography>
                      <Typography variant="p" className="text-slate-400">
                        By Course
                      </Typography>
                    </Box>
                    <Box className="p-2 bg-blue text-white rounded-sm">
                      <Typography variant="p">Earnings</Typography>
                    </Box>
                  </Box>
                  <Divider />
                  <Box className="flex justify-between items-center px-5 py-4">
                    <Typography variant="p">Basic of Html</Typography>
                    <div className="rounded-full text-xs font-bold text-white bg-blue py-1 px-4">
                      <Badge badgeContent={4} />
                    </div>
                  </Box>
                  <Divider />
                  <Box className="flex justify-between items-center px-5 py-4">
                    <Typography variant="p">Angular in Steps</Typography>

                    <div className="rounded-full text-xs font-bold text-white bg-green py-1 px-4">
                      <Badge badgeContent={4} />
                    </div>
                  </Box>
                  <Divider />
                  <Box className="flex justify-between items-center  px-5 py-4">
                    <Typography variant="p">Bootstrap Foundations</Typography>

                    <div className="rounded-full text-xs font-bold text-white bg-yellow py-1 px-4">
                      <Badge badgeContent={4} />
                    </div>
                  </Box>
                  <Divider />
                  <Box className="flex justify-between items-center  px-5 py-4">
                    <Typography variant="p">GitHub Basics</Typography>
                    <div className="rounded-full text-xs font-bold text-white bg-red py-1 px-4">
                      <Badge badgeContent={4} />
                    </div>
                  </Box>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box className="flex flex-col">
                  <Card className="mt-6  p-5">
                    <Box
                      className="flex justify-between"
                      sx={{ alignItems: "center" }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="p">Transaction</Typography>
                        <Typography variant="p">LATEST TRANSECTION</Typography>
                      </Box>
                      <Box className="p-2 rounded-sm text-white bg-blue text-xl">
                        <MdReceipt />
                      </Box>
                    </Box>
                  </Card>
                  <Box className="flex gap-2 py-3">
                    <Box className="flex items-center">
                      <Typography>COURSE</Typography>
                      <CgArrowsV />
                    </Box>
                    <Box className="flex items-center">
                      <Typography>DOCUMENT</Typography>
                      <CgArrowsV />
                    </Box>
                    <Box className="flex items-center">
                      <Typography>AMMOUNT</Typography>
                      <CgArrowsV />
                    </Box>
                    <Box className="flex items-center">
                      <Typography>DATE</Typography>
                      <CgArrowsV />
                    </Box>
                  </Box>
                  <Card>
                    <Box className="flex items-center justify-between py-2 px-3 ">
                      <img
                        src="https://learnplus.demo.frontendmatter.com/assets/images/vuejs.png"
                        alt=""
                        className=" w-16"
                      />
                      <Box className="flex flex-col ">
                        <Typography variant="p">
                          Angular Routing In-Depth
                        </Typography>
                        <Typography variant="p">
                          Invoice #8734 - $89 USD
                        </Typography>
                      </Box>
                      <Typography variant="p">12 NOV 2018</Typography>
                    </Box>
                    <Box className="flex items-center justify-between py-2 px-3 ">
                      <img
                        src="https://learnplus.demo.frontendmatter.com/assets/images/vuejs.png"
                        alt=""
                        className=" w-16"
                      />
                      <Box className="flex flex-col">
                        <Typography variant="p">
                          Learn Angular Fundamentals
                        </Typography>
                        <Typography variant="p">
                          Invoice #8734 - $89 USD
                        </Typography>
                      </Box>
                      <Typography variant="p">12 NOV 2018</Typography>
                    </Box>
                    <Box className="flex items-center justify-between py-2 px-3 ">
                      <img
                        src="https://learnplus.demo.frontendmatter.com/assets/images/gulp.png"
                        alt=""
                        className=" w-16"
                      />
                      <Box className="flex flex-col">
                        <Typography variant="p">
                          Angular Unit Testing
                        </Typography>
                        <Typography variant="p">
                          Invoice #8734 - $89 USD
                        </Typography>
                      </Box>
                      <Typography variant="p">12 NOV 2018</Typography>
                    </Box>
                    <Box className="flex items-center justify-between py-2 px-3 ">
                      <img
                        src="https://learnplus.demo.frontendmatter.com/assets/images/github.png"
                        alt=""
                        className=" w-16"
                      />
                      <Box className="flex flex-col">
                        <Typography variant="p">
                          Introduction to TypeScript
                        </Typography>
                        <Typography variant="p">
                          Invoice #8734 - $89 USD
                        </Typography>
                      </Box>
                      <Typography variant="p">12 NOV 2018</Typography>
                    </Box>
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card className="mt-5">
                  <Box className="flex justify-between p-2 items-center">
                    <Box className="flex flex-col">
                      <Typography variant="p">Comments</Typography>
                      <Typography variant="p">LATEST COMMENTS</Typography>
                    </Box>
                    <Box className="flex flex-row gap-1 ">
                      <Box
                        className="p-2 "
                        sx={{ border: "1px solid #1976d2", color: "#1976d2" }}
                      >
                        <IoIosArrowBack />
                      </Box>
                      <Box
                        className="p-2"
                        sx={{ border: "1px solid #1976d2", color: "#1976d2" }}
                      >
                        <IoIosArrowForward />
                      </Box>
                    </Box>
                  </Box>
                  <Divider />
                </Card>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Instructor;
