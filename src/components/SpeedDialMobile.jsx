import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import NavigationItem from "./NavigationItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const navigationItems = [
  { name: "Home", route: "/" },
  { name: "About", route: "about" },
  { name: "Skills", route: "skills" },
  { name: "Contact", route: "contact" },
];

const StyledButton = styled(Button)({
  background: "transparent",
  "&:hover": {
    background: "transparent",
  },
});

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = (actionName) => {
    setOpen(!open);
  };

  return (
    <Box className="sm:hidden">
      <Backdrop
        open={open}
        sx={{ zIndex: "50", backdropFilter: open ? "blur(5px)" : "none" }}
      />
      <SpeedDial
        ariaLabel="SpeedDial tooltip"
        sx={{
          position: "absolute",
          top: 40,
          right: 25,
          alignItems: "end",
          " >button": { backgroundColor: "#6D4C72" },
          "& span": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: open ? "rotate(45deg)" : "rotate(0)",
            transition: "transform 0.5s",
          },
          ":hover svg": {
            transform: "rotate(0deg)",
          },
        }}
        icon={<SpeedDialIcon style={{ color: "#FFD700" }} />} //#FFD700 6D4C72
        direction="down"
        onClick={handleClick}
      >
        {open && // Render the buttons only if the menu is open
          navigationItems.map((item, index) => (
            <NavigationItem
              key={item.name}
              name={item.name}
              route={item.route}
            />
          ))}
      </SpeedDial>
    </Box>
  );
}
