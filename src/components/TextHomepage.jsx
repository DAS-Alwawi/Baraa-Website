/*import { Box, Typography } from "@mui/material";

const TextHomepage = () => {
  return (
    <Box className="sm:hidden -z-20 top-12 h-32 w-3/4 mx-auto relative ">
      <Typography
        variant="h5"
        style={{ color: "#6D4C72" }}
        textAlign={"center"}
      >
        Als Wirtschaftsinformatik-Experte verbinde ich Technologie und Business,
        um Unternehmen erfolgreich in der digitalen Ära zu begleiten. Gemeinsam
        finden wir innovative Wege zur Transformation Ihres Unternehmens.
      </Typography>
      <img
        className=" left-12 top-40 w-56 mx-auto"
        src="/media/BgTextHomepage.svg"
        alt=""
      />
    </Box>
  );
};
export default TextHomepage;*/
import { Box, Typography } from "@mui/material";

const TextHomepage = () => {
  return (
    <Box
      className="sm:hidden   mx-1 relative py-20 px-10 bg-contain bg-center"
      sx={{
        backgroundImage: "url(/media/PinselPNG.png)",
        backgroundSize: "130%",
      }}
    >
      <Typography variant="h5" style={{ color: "#6D4C72" }} textAlign="center">
        Als <strong>Wirtschaftsinformatik-Experte</strong> verbinde ich
        <strong> Technologie</strong> und <strong>Business</strong>, um
        Unternehmen erfolgreich in der{" "}
        <strong>digitalen Transformation </strong>
        Ära zu begleiten.
      </Typography>
    </Box>
  );
};

export default TextHomepage;
/*<Box
className="sm:hidden   mx-auto relative py-20 bg-contain bg-no-repeat bg-center"
sx={{ backgroundImage: "url(/media/PinselPNG.svg)" }}
>*/
