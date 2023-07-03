/*import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import InfoIcon from "@mui/icons-material/Info";
const navigationItems = [
  { name: "Home", route: "/", icon: <HomeIcon /> },
  { name: "About", route: "about", icon: <InfoIcon /> },
  { name: "Skills", route: "skills", icon: <AutoAwesomeIcon /> },
  { name: "Contact", route: "contact", icon: <ContactPageIcon /> },
];

export default function MobileBottomNavigation() {
  const [value, setValue] = React.useState(0);

  function createNavigationItem(item, index) {
    return (
      <NavLink to={item.route}>
        <BottomNavigationAction label={item.name} icon={item.icon} />
      </NavLink>
    );
  }

  return (
    <Box className="sm:hidden w-full fixed top-0">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {""}
        {navigationItems.map(createNavigationItem)}
      </BottomNavigation>
    </Box>
  );
}*/
