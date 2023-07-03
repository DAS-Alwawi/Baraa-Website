import { Box } from "@mui/material";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ContactAnimation from "./ContactAnimation";
import ContactForm from "./ContactForm";
import KaiserslauternPic from "./KaiserslauternPic";

const ContactPage = () => {
  return (
    <Box
      className="relative h-full w-full"
      style={{ backgroundColor: "#6D4C72" }}
    >
      <Navigation logoColor="white" />

      <ContactForm />
      <KaiserslauternPic />
    </Box>
  );
};
export default ContactPage;
