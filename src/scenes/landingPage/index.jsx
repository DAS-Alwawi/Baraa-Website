import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Navigation from "../../components/Navigation";
import NavigationItem from "../../components/NavigationItem";
import Footer from "../../components/Footer";
import Mainbox from "../../components/Mainbox";
import BackgroundSvgTopRight from "../../components/BackgroundSvgTopRight";
import BackgroundSvgName from "../../components/BackgroundSvgName";

const LandingPage = () => {
  return (
    <Box className="relativ h-full" sx={{ position: "relative" }}>
      <Navigation />

      <Box sx={{ width: "200px", height: "200px" }}>
        <img
          className="absolute right-96 bottom-32"
          src="/media/baraa.png"
          alt=""
          style={{
            width: "20vw",
          }}
        />
        <Mainbox></Mainbox>
      </Box>
      <Footer />
      <BackgroundSvgTopRight />
      <BackgroundSvgName />
    </Box>
  );
};
export default LandingPage;
