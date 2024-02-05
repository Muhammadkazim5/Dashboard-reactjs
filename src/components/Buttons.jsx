import { Button } from "@mui/material";
import React from "react";

const Buttons = (props) => {
  return (
    <>
      <Button variant="contained" className="w-full rounded">
        {props.name}
      </Button>
    </>
  );
};

export default Buttons;
