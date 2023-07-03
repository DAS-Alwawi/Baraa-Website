import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Navigation from "../../components/Navigation";
import NavigationItem from "../../components/NavigationItem";
import Footer from "../../components/Footer";
import Mainbox from "../../components/Mainbox";
import BackgroundSvgTopRight from "../../components/BackgroundSvgTopRight";
import BackgroundSvgName from "../../components/BackgroundSvgName";
import SpeedDialTooltipOpen from "../../components/SpeedDialMobile";
import TextHomepage from "../../components/TextHomepage";

const LandingPage = () => {
  return (
    <Box className="relativ h-full" sx={{ position: "relative" }}>
      <Navigation />

      <Mainbox></Mainbox>

      <BackgroundSvgTopRight />
      <BackgroundSvgName />
      <SpeedDialTooltipOpen />
      <TextHomepage />
    </Box>
  );
};
export default LandingPage;
