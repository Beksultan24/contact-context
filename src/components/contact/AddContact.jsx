import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { contactContext } from "../../ContactContext";

const AddContact = () => {
  const { addContact } = useContext(contactContext);

  const [contact, setContact] = useState({
    name: "",
    number: "",
    photo: "",
  });

  const handleInp = (e) => {
    let obj = {
      ...contact,
      [e.target.name]: e.target.value,
    };
    setContact(obj);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "35%",
        margin: "0 auto",
        marginTop: "100px",
      }}
    >
      <h1>ADMIN PANEL</h1>

      <TextField
        className="inp"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
        onChange={handleInp}
        value={contact.name || ""}
      />
      <TextField
        className="inp"
        id="outlined-basic"
        label="Number"
        variant="outlined"
        name="number"
        onChange={handleInp}
        value={contact.number || ""}
      />
      <TextField
        className="inp"
        id="outlined-basic"
        label="Photo"
        variant="outlined"
        name="photo"
        onChange={handleInp}
        value={contact.photo || ""}
      />
      <Button
        className="btn"
        variant="outlined"
        size="large"
        onClick={() => {
          addContact(contact);
          setContact({ name: "", number: "", photo: "" });
        }}
      >
        Add Contact
      </Button>
    </Box>
  );
};

export default AddContact;
