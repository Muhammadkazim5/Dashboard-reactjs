import { Box, Button, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import Sidebar from "../components/Sidebar";
import CourseCard from "../components/CourseCard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
const ViewCourse = () => {
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="flex">
        <Sidebar change={() => setDarkMode(!darkMode)} check={darkMode} />
        <div className="flex-grow mt-20 pr-8">
          <Box className="container">
            <div className="flex gap-2 pb-5 pt-5">
              <p className="text-blue">Home</p>
              <p>/</p>
              <p className="text-blue">Courses</p>
              <p>/</p>
              <p>THE MVC ARCHITECTURAL PATTERN</p>
            </div>
            <Box className=" py-5">
              <h2 className="text-2xl font-bold">
                The MVC architectural pattern
              </h2>
            </Box>
            <section className="main">
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <Card>
                    <video controls className="w-full">
                      <source
                        src="https://www.google.com/search?sca_esv=c8032146a3e65808&sxsrf=ACQVn0_aSuO1zWNPrt4GKbYbQKRJ7nD9dg:1707132515100&q=invision&tbm=vid&source=lnms&sa=X&sqi=2&ved=2ahUKEwjehJaZjJSEAxXf7rsIHZX0D5sQ0pQJegQICBAB&biw=1366&bih=607&dpr=1#"
                        type="video/mp4"
                      />
                    </video>
                    <CardContent className="p-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cum dicta eius enim inventoreus optio ratione veritatis.
                      Beatae deserunt illum ipsam magniima mollitia officiis
                      quia tempora!
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card className="flex flex-col p-8">
                    <Button
                      variant="contained"
                      className="flex flex-col"
                      color="success"
                    >
                      <span>Get ALL Course</span>
                      <span> $9 / month</span>
                    </Button>
                    <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                      <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                        OR
                      </p>
                    </div>
                    <Button variant="outlined" className="flex flex-col">
                      <span> Purchase Course</span>
                      <span> $25 USD</span>
                    </Button>
                  </Card>
                </Grid>
              </Grid>
            </section>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ViewCourse;
