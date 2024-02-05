import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, useNavigate } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { RiGraduationCapFill } from "react-icons/ri";
import { RiBarChartBoxFill } from "react-icons/ri";

// import { RiAccountBoxFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { Box, Collapse, List, Typography } from "@mui/material";
import { FaUser } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { BsBookHalf } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { MdReceipt } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";

import { AiFillBook } from "react-icons/ai";
import { MdChatBubbleOutline } from "react-icons/md";
import { MdLiveHelp } from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";
import { MdOutlineTune } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
// import Login from "../pages/Login";
// import StarBorder from "@mui/icons-material/StarBorder";
import InboxIcon from "@mui/icons-material/MoveToInbox";
const ListItems = () => {
  const [openA, setOpenA] = React.useState(false);

  const handleClickA = () => {
    setOpenA(!openA);
  };
  const [openM, setOpenM] = React.useState(false);

  const handleClickM = () => {
    setOpenM(!openM);
  };
  const [openC, setOpenC] = React.useState(false);

  const handleClickC = () => {
    setOpenC(!openC);
  };
  const [openP, setOpenP] = React.useState(false);

  const handleClickP = () => {
    setOpenP(!openP);
  };
  const [openCom, setOpenCom] = React.useState(false);

  const handleClickCom = () => {
    setOpenCom(!openCom);
  };
  const navigate = useNavigate();
  return (
    <div className="text-sm font-medium">
      <Box className="py-4 text-sm">
        <Typography variant="p" className="text-gray-300 px-3">
          APPLICATIONS
        </Typography>
        <ListItem
          button
          onClick={() => {
            navigate("/student");
          }}
        >
          <ListItemIcon>
            <FaUser className="text-2xl bg-blue-500 p-1 rounded-sm" />
          </ListItemIcon>
          <ListItemText className=" text-gray-300">Student</ListItemText>
        </ListItem>

        <ListItem
          button
          onClick={() => {
            navigate("/instructor");
          }}
        >
          <ListItemIcon>
            <RiGraduationCapFill className="text-xl text-gray-400" />
          </ListItemIcon>
          <ListItemText className=" text-gray-300">Instructor</ListItemText>
        </ListItem>
      </Box>
      <Box className="text-sm">
        <Typography variant="p" className="text-gray-300 px-3">
          ACCOUNT
        </Typography>
        <ListItemButton onClick={handleClickA}>
          <ListItemIcon>
            <FaRegUser className="text-xl text-gray-400" />
          </ListItemIcon>
          <ListItemText primary="Accounts" className="text-gray-300" />
          {openA ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openA} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            className="text-gray-300"
            sx={{
              pl: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              cursor: "pointer",
            }}
          >
            {" "}
            <Link to="/login">
              <ListItemText primary="Login" />
            </Link>
            <Link to="/signup">
              <ListItemText primary="Sign Up" />
            </Link>
            <Link to="/forgetpassword">
              <ListItemText primary="Forget Password" />
            </Link>
            <Link to="/editaccount">
              <ListItemText primary="Edit Account" />
            </Link>
            <Link to="/basicinfo">
              <ListItemText primary="Basic Information" />
            </Link>
            <Link to="/profileandprivacy">
              <ListItemText primary="Profile & Privacy" />
            </Link>
            <Link to="/subcription">
              <ListItemText primary="Subcription" />
            </Link>
            <Link to="/upgradeaccount">
              <ListItemText primary="Upgrade Account" />
            </Link>
            <Link to="/payinfo">
              <ListItemText primary="Payment Information" />
            </Link>
            <Link to="/payhistory">
              <ListItemText primary="Payment History" />
            </Link>
            <Link to="/studentinvoice">
              <ListItemText primary="Student Invoice" />
            </Link>
            <Link to="/instructioninvoice">
              <ListItemText primary="Instructor Invoice" />
            </Link>
            <Link to="/editinvoice">
              <ListItemText primary="Edit Invoice" />
            </Link>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClickM}>
          <ListItemIcon>
            <MdOutlineMessage className="text-xl text-gray-400" />
          </ListItemIcon>
          <ListItemText primary="Messages" className="text-gray-300" />
          {openM ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openM} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            className="text-gray-300 cursor-pointer"
            sx={{
              pl: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Link to="/conversation">
              <ListItemText primary="Conversation" />
            </Link>
            <Link to="/conversation2">
              <ListItemText primary="Conversation-2" />
            </Link>
          </List>
        </Collapse>
      </Box>
      <Box className=" mb-20">
        <Typography variant="p" className="px-3  text-gray-300 capitalize">
          student
        </Typography>
        <ListItem button>
          <ListItemIcon>
            <FaSearch className="text-xl text-gray-400" />
          </ListItemIcon>
          <Link to="/browsecourse">
            <ListItemText className="text-gray-300">Browse Course</ListItemText>
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BsBookHalf className="text-xl text-gray-400" />
          </ListItemIcon>
          <Link to="/viewcourse">
            <ListItemText className="text-gray-300">View Course</ListItemText>
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AiFillBook className="text-2xl text-gray-400" />
          </ListItemIcon>
          <ListItemText className="text-gray-300">Take Course</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HiOutlineDesktopComputer className="text-xl text-gray-400" />
          </ListItemIcon>
          <ListItemText className="text-gray-300">Take a Quiz</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <RiBarChartBoxFill className="text-xl text-gray-400" />
          </ListItemIcon>
          <ListItemText className="text-gray-300">Quiz Result</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <RiGraduationCapFill className="text-xl text-gray-400" />
          </ListItemIcon>
          <ListItemText className="text-gray-300">My Course</ListItemText>
        </ListItem>
        <ListItemButton onClick={handleClickC}>
          <ListItemIcon>
            <MdChatBubbleOutline className="text-xl text-gray-400" />
          </ListItemIcon>
          <ListItemText primary="Community" className="text-gray-300" />
          {openC ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openC} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            className="text-gray-300"
            sx={{
              pl: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <ListItemText primary="Forum" />
            <ListItemText primary="Discussion" />
            <ListItemText primary="Ask Question" />
            <ListItemText primary="Student Profile-Courses" />
            <ListItemText primary="Student Profile-Posts" />
            <ListItemText primary="Instructor Profile" />
          </List>
        </Collapse>
        <ListItem button>
          <ListItemIcon>
            <MdLiveHelp className="text-xl text-gray-400" />
          </ListItemIcon>
          <ListItemText className="text-gray-300">Help Center</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <IoMdUnlock className="text-xl text-gray-400" />
          </ListItemIcon>
          <ListItemText className="text-gray-300">Logout</ListItemText>
        </ListItem>
      </Box>
    </div>
  );
};

export default ListItems;
