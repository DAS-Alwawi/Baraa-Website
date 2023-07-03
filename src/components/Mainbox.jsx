const { Box, Typography } = require("@mui/material");
const Mainbox = () => {
  return (
    <Box
      className="relative bottom-0"
      sx={{ height: "calc(100vh - 129px)", maxHeight: "100vw" }}
    >
      <img
        className="absolute bottom-0 right-56 w-44 block  sm:w-3/12"
        src="/media/baraa.png"
        alt=""
      />
      <img
        className="absolute left-16 top-40 w-56 sm:left-56 sm:top-52 sm:w-1/3 "
        src="/media/TITLE BARAA.svg"
        alt=""
        //style={{ width: "700px", height: "300px" }}
      />
      <Box>
        <Typography
          className="absolute sm:left-56 sm: bottom-52 text-center"
          variant="h3"
          color={"#989898"}
        >
          <strong>
            Experte für Wirtschaftsinformatik mit dem Fokus auf <br /> digitale
            Transformation
          </strong>
        </Typography>
        <img
          className="absolute left-64 bottom-14"
          src="/media/UnderlineLanding.svg"
        />
      </Box>
    </Box>
  );
};
export default Mainbox;
