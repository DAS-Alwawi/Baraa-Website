import { Box } from "@mui/material";
import NavigationItem from "./NavigationItem";
const navigationItems = [
  { name: "Home", route: "/" },
  { name: "About", route: "about" },
  { name: "Skills", route: "skills" },
  { name: "Contact", route: "contact" },
];
const Navigation = () => {
  return (
    <Box
      className="flex flex-row gap-24 "
      sx={{
        padding: "0 5vw",
      }}
    >
      <svg
        id="Komponente_2_1"
        data-name="Komponente 2 – 1"
        xmlns="http://www.w3.org/2000/svg"
        width="95"
        height="129"
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
          <tspan y="0" fill="#6d4c72">
            براء
          </tspan>
        </text>
      </svg>
      <Box className="flex flex-row items-center m-10 justify-between w-7/12 ">
        {navigationItems.map((item, index) => (
          <NavigationItem key={item.name} name={item.name} route={item.route} />
        ))}
      </Box>
    </Box>
  );
};
export default Navigation;
