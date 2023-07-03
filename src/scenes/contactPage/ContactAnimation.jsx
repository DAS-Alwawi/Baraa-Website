import React from "react";
import Lottie from "lottie-react";
import Contact from "./Contact.json";
import { Box, Container } from "@mui/material";

const ContactAnimation = () => (
  <Box
    sx={{
      "& path": {
        fill: "#6D4C72",
      },
    }}
    className=" right-1/4 top-52 absolute"
  >
    <Lottie animationData={Contact} loop={true} style={{ width: "350px" }} />
  </Box>
);

export default ContactAnimation;
