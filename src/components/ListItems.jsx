import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { RiGraduationCapFill } from "react-icons/ri";
// import { RiAccountBoxFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { Box, Collapse, List, Typography } from "@mui/material";
import { FaUser } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { BsBookHalf } from "react-icons/bs";
import { MdReceipt } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdChatBubbleOutline } from "react-icons/md";
import { MdLiveHelp } from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";
import { MdOutlineTune } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
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
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openA} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className="text-gray-300">
            <ListItemButton
              sx={{
                pl: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <ListItemText primary="Login" />
              <ListItemText primary="Sign Up" />
              <ListItemText primary="Forget Password" />
              <ListItemText primary="Edit Account" />
              <ListItemText primary="Basic Information" />
              <ListItemText primary="Profile & Privacy" />
              <ListItemText primary="Subcription" />
              <ListItemText primary="Upgrade Account" />
              <ListItemText primary="Payment Information" />
              <ListItemText primary="Payment Information" />
              <ListItemText primary="Payment History" />
              <ListItemText primary="Student Invoice" />
              <ListItemText primary="Instructor Invoice" />
              <ListItemText primary="Edit Invoice" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClickM}>
          <ListItemIcon>
            <MdOutlineMessage className="text-xl text-gray-400" />
          </ListItemIcon>
          <ListItemText primary="Messages" className="text-gray-300" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openM} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className="text-gray-300">
            <ListItemButton
              sx={{
                pl: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <ListItemText primary="Conversation" />
              <ListItemText primary="Conversation-2" />
            </ListItemButton>
          </List>
        </Collapse>
      </Box>
      <Box>
        <Typography variant="p" className="px-3  text-gray-300">
          INSTRUCTOR
        </Typography>
        <ListItem button>
          <ListItemIcon>
            <BsBookHalf className="text-xl text-gray-400" />
          </ListItemIcon>
          <ListItemText className="text-gray-300">Course Manager</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BsFillQuestionCircleFill className="text-xl text-gray-400" />
          </ListItemIcon>
          <ListItemText className="text-gray-300">Quiz Manager</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FaArrowTrendUp className="text-xl text-gray-400" />
          </ListItemIcon>
          <ListItemText className="text-gray-300">Earnings</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MdReceipt className="text-xl text-gray-400" />
          </ListItemIcon>
          <ListItemText className="text-gray-300">Statment</ListItemText>
        </ListItem>
        <ListItemButton onClick={handleClickC}>
          <ListItemIcon>
            <MdChatBubbleOutline className="text-xl text-gray-400" />
          </ListItemIcon>
          <ListItemText primary="Community" className="text-gray-300" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openC} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className="text-gray-300">
            <ListItemButton
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
            </ListItemButton>
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
      <Box>
        <Typography variant="p" className="px-3 text-gray-300">
          Components
        </Typography>
        <ListItemButton onClick={handleClickCom}>
          <ListItemIcon>
            <MdOutlineTune className="text-xl text-gray-400" />
          </ListItemIcon>
          <ListItemText primary="Components" className="text-gray-300" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openCom} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className="text-gray-300">
            <ListItemButton
              sx={{
                pl: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <ListItemText primary="Avatars" />
              <ListItemText primary="Forms" />
              <ListItemText primary="Loaders" />
              <ListItemText primary="Tables" />
              <ListItemText primary="Cards" />
              <ListItemText primary="Tabs" />
              <ListItemText primary="Icons" />
              <ListItemText primary="Buttons" />
              <ListItemText primary="Alerts" />
              <ListItemText primary="Badges" />
              <ListItemText primary="Progress Bars" />
              <ListItemText primary="Pagination" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClickP}>
          <ListItemIcon>
            <FaFolder className="text-xl text-gray-400" />
          </ListItemIcon>
          <ListItemText primary="Plugins" className="text-gray-300" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openP} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className="text-gray-300">
            <ListItemButton
              sx={{
                pl: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <ListItemText primary="Charts" />
              <ListItemText primary="Drag & Drop" />
              <ListItemText primary="Calendar" />
              <ListItemText primary="Nestable" />
              <ListItemText primary="Tree" />
              <ListItemText primary="Vector Maps" />
              <ListItemText primary="Sweet Alert" />
            </ListItemButton>
          </List>
        </Collapse>
      </Box>
      <Box sx={{ marginBottom: 6 }}>
        <Typography variant="p" className="text-gray-300 px-3">
          LAYOUT
        </Typography>
        <ListItem button>
          <ListItemIcon>
            <MdDashboard className="text-2xl bg-blue-500 p-1 rounded-sm" />
          </ListItemIcon>
          <ListItemText className="text-gray-300">Fluid Layout</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MdDashboard className="text-xl text-gray-400" />
          </ListItemIcon>
          <ListItemText className="text-gray-300">Fixed Layout</ListItemText>
        </ListItem>
      </Box>
    </div>
  );
};

export default ListItems;
