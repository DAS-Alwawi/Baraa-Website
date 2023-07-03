import { Box, Typography } from "@mui/material";
import Navigation from "../../components/Navigation";
import SkillsBox from "./SkillsBox";

const SkillsPage = () => {
  return (
    <Box className="relative h-full w-full">
      <Navigation />
      <SkillsBox />
    </Box>
  );
};
export default SkillsPage;
