import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fname || !lname || !email || !phone) {
      alert("please Enter crediantials");
    } else {
      const user = {
        fname: fname,
        lname: lname,
        email: email,
        phone: phone
      };
      const updatedData = [...data, user];
      setData(localStorage.setItem("users", JSON.stringify(updatedData)));
      setFname("");
      setLname("");
      setEmail("");
      setPhone("");
      navigate("/home");
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "25ch",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          marginLeft: "20rem"
        }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        onChange={(e) => setFname(e.target.value)}
        value={fname}
      />
      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        onChange={(e) => setLname(e.target.value)}
        value={lname}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <TextField
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
      <Button type="submit" variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
}
