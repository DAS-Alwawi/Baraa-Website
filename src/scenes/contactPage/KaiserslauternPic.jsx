import { Box } from "@mui/material";
const KaiserslauternPic = () => {
  return (
    <Box>
      <img
        className="absolute bottom-0 right-32 w-44 block  sm:w-5/12"
        src="/media/KaiserslauternMap.png"
        alt=""
        style={{
          transform: "rotate(-3deg)",
          borderRadius: "10px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.8)",
        }}
      />
      ;
    </Box>
  );
};
export default KaiserslauternPic;
