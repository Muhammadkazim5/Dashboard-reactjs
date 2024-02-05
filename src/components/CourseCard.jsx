import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import React from "react";

const CourseCard = (props) => {
  return (
    <Card className="w-full h-full">
      <CardActionArea>
        <CardContent className="flex justify-center items-center flex-col">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-2xl font-extrabold"
          >
            {props.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className=" text-yellow"
          >
            {props.rating}
          </Typography>
        </CardContent>
        <img src={props.img} alt="" height="140" />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            className=" capitalize py-2"
          >
            {props.heading}
          </Typography>
          <Typography variant="body2" color="text.secondary" className=" py-2">
            {props.para}
          </Typography>

          <Button variant="contained">{props.btn}</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CourseCard;
