import { Box } from "@mui/material";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ContactAnimation from "./ContactAnimation";

const ContactPage = () => {
  return (
    <Box className="relativ h-full" sx={{ position: "relative" }}>
      <Navigation />
      <ContactAnimation />

      <Footer />
    </Box>
  );
};
export default ContactPage;
