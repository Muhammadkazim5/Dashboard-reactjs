import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import { MdCreditCard } from "react-icons/md";
import DropdownMenu from "./DropdownMenu";
import { FaArrowTrendUp } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { RiBubbleChartFill } from "react-icons/ri";
import { MdKeyboardVoice } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
// import InputSlider from "../components/InputSlider";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import RedarCharts from "./RedarCharts";
// import styled from "styled-components";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const MainContent = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, paddingRight: 8, marginTop: 8 }}
        >
          <Box className="container pt-5">
            <div className="flex gap-2 pb-5">
              <p className="text-blue-400">Home</p>
              <p>/</p>
              <p>Dashboard</p>
            </div>
            <Typography
              variant="p"
              className=" text-3xl pt-5 font-medium text-gray-600"
            >
              Dashboard
            </Typography>
            <Box
              className="container w-auto flex justify-between items-center p-3 mt-4"
              sx={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                borderLeft: "5px solid green",
              }}
            >
              <div className="flex items-center gap-2">
                <MdCreditCard className="text-lg" />
                <Typography>
                  <span className="text-slate-500">
                    Your subscription ends on{" "}
                  </span>{" "}
                  25 February 2015
                </Typography>
              </div>
              <Button variant="contained" color="success">
                Upgrate
              </Button>
            </Box>
          </Box>
          <div className="container mt-8">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Card className="h-full">
                  <div className="flex justify-between items-center p-3">
                    <Box className="flex gap-2 items-center">
                      <h1 className="text-blue-500 text-3xl font-bold">116</h1>
                      <Box className="flex flex-col">
                        <Typography
                          variant="p"
                          className="text-medium text-2xl text-gray-700"
                        >
                          Angular
                        </Typography>
                        <Typography variant="p" className="text-slate-500">
                          BEST SCORE
                        </Typography>
                      </Box>
                    </Box>
                    <DropdownMenu />
                  </div>
                  <Divider />
                  <Box className="flex justify-center items-center mt-8">
                    <RedarCharts />
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card className="p-4">
                  <div className="flex justify-between items-center p-3">
                    <Box className="flex gap-3 items-center">
                      <h1 className="text-blue-500 text-3xl font-bold">445</h1>
                      <Box className="flex flex-col">
                        <Typography
                          variant="p"
                          className="text-medium text-2xl text-gray-700"
                        >
                          Experience IQ
                        </Typography>
                        <Typography variant="p" className="text-slate-500">
                          4 DAYS STREAK THIS WEEK
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="p-3 bg-blue-500 text-white rounded-sm">
                      <FaArrowTrendUp />
                    </Box>
                  </div>
                  <Divider />
                  <Typography variant="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium quaerat, natus nobis numquam commodi maxime
                    praesentium soluta quis rem fuga unde doloribus magni eaque
                    ex
                  </Typography>
                </Card>
                <Card className="mt-5">
                  <div className="flex flex-col p-4">
                    <Typography variant="h5">Rewards</Typography>
                    <Typography variant="p">
                      YOUR LATEST ACHIEVEMENTS
                    </Typography>
                  </div>
                  <Divider />
                  <Box className="flex justify-center py-8 gap-5">
                    <p className="p-3 bg-blue-600 text-white rounded-full">
                      <AiFillLike />
                    </p>
                    <p className="p-3 bg-red-600 text-white rounded-full">
                      <FaStar />
                    </p>
                    <p className="p-3 bg-green-600 text-white rounded-full">
                      <RiBubbleChartFill />
                    </p>
                    <p className="p-3 bg-yellow-600 text-white rounded-full">
                      <MdKeyboardVoice />
                    </p>
                    <p className="p-3 bg-blue-400 text-white rounded-full">
                      <MdEventAvailable />
                    </p>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </div>
          {/* NEXT CART */}
          <Box className="container py-8">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Card>
                  <Box>
                    <Box className="flex justify-between items-center p-3">
                      <Box className="flex flex-col">
                        <Typography variant="h6">COURSES</Typography>
                        <Typography variant="p" className="text-slate-500">
                          YOUR RECENT COURSES
                        </Typography>
                      </Box>
                      <Button variant="contained">My Courses</Button>
                    </Box>
                  </Box>
                  <Divider />
                  <CardContent className="">
                    <div className="flex justify-between items-center p-3">
                      <Box className="flex gap-2">
                        <img
                          src="https://learnplus.demo.frontendmatter.com/assets/images/gulp.png"
                          alt=""
                          className=" w-16"
                        />
                        <div className="flex flex-col">
                          <Typography variant="p">
                            Learn Vue.js Fundamentals
                          </Typography>
                          <div className="flex items-center gap-x-3 whitespace-nowrap">
                            <div
                              className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                              role="progressbar"
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <div
                                className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                                style={{ width: "25%" }}
                              ></div>
                            </div>
                            <div className="w-10 text-end">
                              <span className="text-sm text-gray-800 dark:text-white">
                                25%
                              </span>
                            </div>
                          </div>
                        </div>
                      </Box>
                      <CiMenuKebab />
                    </div>
                    <Divider />
                    <div className="flex justify-between items-center p-3">
                      <Box className="flex gap-2">
                        <img
                          src="https://learnplus.demo.frontendmatter.com/assets/images/nodejs.png"
                          alt=""
                          className=" w-16"
                        />
                        <div className="flex flex-col">
                          <Typography variant="p">Angular in Steps</Typography>
                          <div className="flex items-center gap-x-3 whitespace-nowrap">
                            <div
                              className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                              role="progressbar"
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <div
                                className="flex flex-col justify-center rounded-full overflow-hidden bg-green-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-green-500"
                                style={{ width: "80%" }}
                              ></div>
                            </div>
                            <div className="w-10 text-end">
                              <span className="text-sm text-gray-800 dark:text-white">
                                80%
                              </span>
                            </div>
                          </div>
                        </div>
                      </Box>
                      <CiMenuKebab />
                    </div>
                    <Divider />
                    <div className="flex justify-between items-center p-3">
                      <Box className="flex gap-2">
                        <img
                          src="https://learnplus.demo.frontendmatter.com/assets/images/vuejs.png"
                          alt=""
                          className=" w-16"
                        />
                        <div className="flex flex-col">
                          <Typography variant="p">
                            Bootstrap Foundations
                          </Typography>
                          <div className="flex items-center gap-x-3 whitespace-nowrap">
                            <div
                              className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
                              role="progressbar"
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <div
                                className="flex flex-col justify-center rounded-full overflow-hidden bg-yellow-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-yellow-500"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                            <div className="w-10 text-end">
                              <span className="text-sm text-gray-800 dark:text-white">
                                100%
                              </span>
                            </div>
                          </div>
                        </div>
                      </Box>
                      <CiMenuKebab />
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                  <Box className="flex justify-between p-3 items-center">
                    <Box className="flex flex-col">
                      <Typography variant="h5">Forum Activity</Typography>
                      <Typography variant="p" className="text-slate-500">
                        LATEST FORUM TOPICS & REPLIES
                      </Typography>
                    </Box>
                    <div className="p-3 bg-blue-500 rounded-sm text-white">
                      <IoIosArrowForward />
                    </div>
                  </Box>
                  <Divider />
                  <Box className="flex justify-between p-3">
                    <Box className="flex gap-2">
                      <Box
                        className="p-4 flex justify-center rounded-full"
                        sx={{ border: "1px solid gray", position: "relative" }}
                      >
                        <MdDescription className="text-2xl" />
                        <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
                          <img
                            src="https://learnplus.demo.frontendmatter.com/assets/images/people/50/guy-6.jpg"
                            alt=""
                            className="w-5 rounded-full"
                          />
                        </Box>
                      </Box>
                      <Box className="flex flex-col">
                        <Typography variant="p">Luci Bryant</Typography>
                        <Typography variant="p">
                          Am I learning the right way?
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="p">5 min ago</Typography>
                  </Box>
                  <Divider />
                  <Box className="flex justify-between p-3">
                    <Box className="flex gap-2">
                      <Box
                        className="p-4 flex justify-center rounded-full"
                        sx={{ border: "1px solid gray", position: "relative" }}
                      >
                        <MdDescription className="text-2xl" />
                        <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
                          <img
                            src="https://learnplus.demo.frontendmatter.com/assets/images/people/50/guy-2.jpg"
                            alt=""
                            className="w-5 rounded-full"
                          />
                        </Box>
                      </Box>
                      <Box className="flex flex-col">
                        <Typography variant="p">Magnus Goldsmith</Typography>
                        <Typography variant="p">
                          Can someone help me with the
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="p">5 min ago</Typography>
                  </Box>
                  <Divider />
                  <Box className="flex justify-between p-3">
                    <Box className="flex gap-2">
                      <Box
                        className="p-4 flex justify-center rounded-full"
                        sx={{ border: "1px solid gray", position: "relative" }}
                      >
                        <MdDescription className="text-2xl" />
                        <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
                          <img
                            src="https://learnplus.demo.frontendmatter.com/assets/images/people/50/woman-1.jpg"
                            alt=""
                            className="w-5 rounded-full"
                          />
                        </Box>
                      </Box>
                      <Box className="flex flex-col">
                        <Typography variant="p">Katelyn Rankin</Typography>
                        <Typography variant="p">
                          I think this is the right way?
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="p">5 min ago</Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
          {/* //cart bottom */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card className="">
                <Box>
                  <Box className="flex justify-between items-center p-3">
                    <Box className="flex flex-col">
                      <Typography variant="h6">Quizzes</Typography>
                      <Typography variant="p" className="text-slate-500">
                        YOUR PERFORMANCE
                      </Typography>
                    </Box>
                    <Button variant="contained">Quiz results</Button>
                  </Box>
                </Box>
                <Divider />
                <CardContent className="">
                  <div className="flex justify-between items-center p-3">
                    <Box className="flex gap-2">
                      <div className="flex flex-col">
                        <Typography variant="p">
                          Title of quiz goes here?
                        </Typography>
                        <Typography variant="p">
                          COURSE{" "}
                          <span className="text-blue-400 text-lg">
                            Basics of HTML
                          </span>
                        </Typography>
                      </div>
                    </Box>
                    <Box className="flex gap-2 items-center">
                      <Typography variant="p">Good</Typography>
                      <Typography variant="h4">5.8</Typography>
                    </Box>
                  </div>
                  <Divider />
                  <div className="flex justify-between items-center p-3">
                    <Box className="flex gap-2">
                      <div className="flex flex-col">
                        <Typography variant="p">
                          Directives & Routing
                        </Typography>
                        <Typography variant="p">
                          COURSE{" "}
                          <span className="text-blue-400 text-lg">
                            Angular in Steps
                          </span>
                        </Typography>
                      </div>
                    </Box>
                    <Box className="flex gap-2 items-center">
                      <Typography variant="p">Good</Typography>
                      <Typography variant="h4" className="text-green-500">
                        5.8
                      </Typography>
                    </Box>
                  </div>
                  <Divider />
                  <div className="flex justify-between items-center p-3">
                    <Box className="flex gap-2">
                      <div className="flex flex-col">
                        <Typography variant="p">Responsive & Retina</Typography>
                        <Typography variant="p">
                          COURSE{" "}
                          <span className="text-blue-400 text-lg">
                            Bootstrap Foundations
                          </span>
                        </Typography>
                      </div>
                    </Box>
                    <Box className="flex gap-2 items-center">
                      <Typography variant="p">Good</Typography>
                      <Typography variant="h4" className="text-red-500">
                        5.8
                      </Typography>
                    </Box>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default MainContent;
