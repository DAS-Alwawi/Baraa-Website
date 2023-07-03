import { Box } from "@mui/material";
import NavigationItem from "./NavigationItem";
import SpeedDialTooltipOpen from "./SpeedDialMobile";
import MobileBottomNavigation from "./MobileBottomNavigation";
const navigationItems = [
  { name: "Home", route: "/" },

  { name: "Skills", route: "skills" },
  { name: "Contact", route: "contact" },
];
const Navigation = ({ logoColor = "#6d4c72" }) => {
  return (
    <>
      <Box
        className="flex flex-row gap-2 lg:gap-24 w-full relative"
        sx={{
          padding: "0 5vw",
        }}
      >
        <svg
          id="Komponente_2_1"
          data-name="Komponente 2 – 1"
          xmlns="http://www.w3.org/2000/svg"
          width="95px"
          height="129px"
          viewBox="0 0 95 129"
        >
          <text
            id="براء."
            transform="translate(0 84)"
            fill="gold"
            fontSize="61"
            className="arabicFont"
          >
            <tspan x="0" y="0">
              .
            </tspan>
            <tspan y="0" fill={logoColor}>
              براء
            </tspan>
          </text>
        </svg>
        <Box
          className="hidden sm:flex sm:flex-row sm:items-center px-4 py-5 sm:m-10 sm:justify-around sm:w-4/12 "
          style={{
            borderRadius: "60px",
            backgroundColor: logoColor,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
          }}
        >
          {navigationItems.map((item, index) => (
            <NavigationItem
              key={item.name}
              name={item.name}
              route={item.route}
            />
          ))}
        </Box>
        <SpeedDialTooltipOpen />
      </Box>
    </>
  );
};
export default Navigation;
