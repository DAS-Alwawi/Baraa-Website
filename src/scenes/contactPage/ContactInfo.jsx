import { TextField, Button, Box, Typography, Grid } from "@mui/material";
const ContactInfo = () => {
  return (
    <Box className="flex flex-col gap-3 py-3 text-center sm:text-left">
      <Typography variant="h4" style={{ Color: "#6D4C72" }}>
        Contact{" "}
      </Typography>

      <Typography variant="h4" style={{ color: "#6D4C72" }}>
        alwawi@das-innovations.de
      </Typography>

      <Typography variant="h4">Based in</Typography>

      <Typography variant="h4" style={{ color: "#6D4C72" }}>
        Kaiserslautern, Germany
      </Typography>
    </Box>
  );
};
export default ContactInfo;
