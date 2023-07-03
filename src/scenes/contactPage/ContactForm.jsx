/*import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import { useState } from "react";
function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du den Code zum Absenden der Nachricht einfügen
    console.log({ fullName, email, message });
    setFullName("");
    setEmail("");
    setMessage("");
  };

  /* return (
    <Box className="absolute top-64 left-40  w-[700px] border-2 border-red-500">
      <TextField
        label="Full Name"
        variant="outlined"
        fullWidth
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <TextField
        label="E-mail"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit" variant="contained" fullWidth>
        Submit
      </Button>
    </Box>
  );*/
/* return (
    <Box
      className="absolute top-64 left-40 w-[700px] border-2 flex "
      style={{ borderColor: "#989898" }}
    >
      <Typography className="w-2/3 p-4">
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className=" mb-10"
          color="secondary"
          focused
        />

        <TextField
          label="E-mail"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-10"
          color="secondary"
          focused
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          color="secondary"
          focused
          s
        />
        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </Typography>
      <Typography className="w-1/3 p-4 mt-4">
        <Typography variant="h3" className="mt-9">
          Contact
        </Typography>
        <Typography className="mb-2">alwawi@das-innovations.de</Typography>
        <Typography className="mb-2">Based in</Typography>
        <Typography>Kaiserslautern, Germany</Typography>
      </Typography>
    </Box>
  );
}

export default ContactForm;*/
/*import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import { useState } from "react";

function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du den Code zum Absenden der Nachricht einfügen
    console.log({ fullName, email, message });
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box
      className="absolute top-64 left-40 w-[700px] border-2 flex"
      style={{ borderColor: "#989898" }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3">Contact</Typography>
          <Typography>alwawi@das-innovations.de</Typography>
          <Typography>Based in</Typography>

          <Typography>Kaiserslautern, Germany</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="E-mail"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactForm;*/
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import { useState } from "react";
import ContactInfo from "./ContactInfo";

function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du den Code zum Absenden der Nachricht einfügen
    console.log({ fullName, email, message });
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box
      className="relative top-40 left-0 lg:left-52 w-full lg:w-[800px]  grid grid-cols-1 lg:grid-cols-2 gap-5 bg-white rounded-xl py-3 px-5"
      //className="relative top-64 left-0 lg:left-40 w-full lg:w-[700px] border-2 grid grid-cols-1 lg:grid-cols-2 gap-5 bg-slate-300"
      style={{ borderColor: "#989898" }}
    >
      <Box className="flex gap-3 flex-col row-start-2 lg:row-start-1">
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextField
          label="E-mail"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          className=" col-span-2"
          style={{ backgroundColor: "#6D4C72" }}
        >
          Submit
        </Button>
      </Box>

      <ContactInfo />
    </Box>
  );
}

export default ContactForm;
