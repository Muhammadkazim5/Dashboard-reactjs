import { Box, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";
import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdDashboard } from "react-icons/md";
import CourseCard from "../components/CourseCard";
import Paginations from "../components/Paginations";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
const BrowseCourse = () => {
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box className="flex">
        <Sidebar change={() => setDarkMode(!darkMode)} check={darkMode} />
        <Box sx={{ paddingRight: 8, marginTop: 8 }}>
          <Box className="container">
            <div className="flex gap-2 pb-5 pt-5">
              <p className="text-blue">Home</p>
              <p>/</p>
              <p>Courses</p>
            </div>
            <Box className="flex justify-between items-center py-5">
              <h2 className="text-2xl font-bold">Courses</h2>
              <p className="flex gap-1">
                <TfiMenuAlt className="text-xl" />
                <MdDashboard className="text-xl" />
              </p>
            </Box>
            <Grid container spacing={4} className=" mb-10">
              <Grid item xs={12} md={6}>
                <CourseCard
                  title="Learn VueJs"
                  rating="★★★★★☆"
                  img="https://learnplus.demo.frontendmatter.com/assets/images/vuejs.png"
                  heading="Advanced"
                  para="Let’s start with a quick tour of Vue’s data binding features. If you are more interested in ..."
                  btn="VueJs"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CourseCard
                  title="Github Webhooks for Beginners"
                  rating="★★★★★☆"
                  img="https://learnplus.demo.frontendmatter.com/assets/images/github.png"
                  heading="INTERMEDIATE"
                  para="Learn the basics of Github and become a power Github developer."
                  btn="GULP"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CourseCard
                  title="Npm & Gulp Advanced Workflow"
                  rating="★★★★☆☆"
                  img="https://learnplus.demo.frontendmatter.com/assets/images/nodejs.png"
                  heading="BEGINNER"
                  para="Developing static website with fast and advanced gulp setup by managing all parts..."
                  btn="GULP"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CourseCard
                  title="Gulp & Slush Workflows"
                  rating="★★★☆☆☆"
                  img="https://learnplus.demo.frontendmatter.com/assets/images/gulp.png"
                  heading="Advanced"
                  para="Let’s start with a quick tour of Vue’s data binding features. If you are more interested in ..."
                  btn="VueJs"
                />
              </Grid>
            </Grid>
            <Box className="flex justify-center mb-8">
              <Paginations />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default BrowseCourse;
