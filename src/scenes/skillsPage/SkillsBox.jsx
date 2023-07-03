import { Style } from "@mui/icons-material";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";

const SkillsBox = () => {
  return (
    <Box className="w-9/12 h-2/4 mx-auto flex flex-row justify-center">
      <Box
        className=" px-6 h-10/12 py-10"
        style={{ flex: 1, borderRadius: "30px", backgroundColor: "#6D4C72" }}
      >
        <Typography
          className="text-center "
          variant="h2"
          style={{ color: "white" }}
        >
          Designing
        </Typography>
        <img
          className="absolute left-96"
          src="/media/DesigningUnderline.svg"
          alt=""
        />
        <Typography
          className="text-center py-28"
          variant="h4"
          style={{ color: "white" }}
        >
          <strong>
            Mit meinen umfassenden Kenntnissen und Erfahrungen im Umgang mit
            Figma und Adobe XD bin ich in der Lage, erstklassige Designs für
            Websites und Anwendungen zu erstellen.
          </strong>
        </Typography>
      </Box>
      <Box
        className=" px-6 h-10/12"
        style={{ flex: 1, borderRadius: "30px", backgroundColor: "#C6BEC7" }}
      >
        <Typography
          className="text-center py-10 "
          variant="h2"
          style={{ color: "white" }}
        >
          Developing
        </Typography>
        <Typography
          className="text-center py-14"
          variant="h4"
          style={{ color: "white" }}
        >
          Ich verfüge über umfangreiche Kompetenzen in den Programmiersprachen
          Java, JavaScript, HTML, PHP, React, MySQL und F#, was es mir
          ermöglicht, vielseitige und maßgeschneiderte Lösungen zu entwickeln.
        </Typography>
      </Box>

      <Box
        className=" px-6  h-10/12"
        style={{ flex: 1, borderRadius: "30px", backgroundColor: "#6D4C72" }}
      >
        <Typography
          className="text-center py-10 "
          variant="h2"
          style={{ color: "white" }}
        >
          Languages
        </Typography>
        <Typography
          className="text-center py-14"
          variant="h4"
          style={{ color: "white" }}
        >
          Ich beherrsche fließend die Sprachen Deutsch, Arabisch und Englisch,
          was mir ermöglicht, reibungslose Kommunikation und effektive
          Zusammenarbeit in mehreren Sprachkontexten zu gewährleisten.
        </Typography>
      </Box>
    </Box>
  );
};
export default SkillsBox;
