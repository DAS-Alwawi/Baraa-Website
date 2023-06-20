import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
const { Box, Button } = require("@mui/material");

const NavigationItem = (props) => {
  function handleClick() {}

  console.log(props);
  return (
    <NavLink to={props.route}>
      <Button variant="text" style={{ color: "#989898" }}>
        {props.name}
      </Button>
    </NavLink>
  );
};

export default NavigationItem;
