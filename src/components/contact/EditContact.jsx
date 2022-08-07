import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { contactContext } from "../../ContactContext";
import { useNavigate } from "react-router-dom";

const EditContact = () => {
  const { contactToEdit, savedContact } = useContext(contactContext);

  console.log(contactToEdit);

  const [editContact, setEditContact] = useState(contactToEdit);

  useEffect(() => {
    setEditContact(contactToEdit);
  }, [contactToEdit]);

  const navigate = useNavigate();

  const handleInp = (e) => {
    let obj = {
      ...editContact,
      [e.target.name]: e.target.value,
    };
    setEditContact(obj);
  };

  return (
    <>
      {editContact ? (
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
          <h1>Edit Panel</h1>
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            name="name"
            className="inp-edit"
            onChange={handleInp}
            value={editContact.name}
          />
          <TextField
            id="outlined-basic"
            label="number"
            variant="outlined"
            name="number"
            className="inp-edit"
            onChange={handleInp}
            value={editContact.number}
          />
          <TextField
            id="outlined-basic"
            label="photo"
            variant="outlined"
            name="photo"
            className="inp-edit"
            onChange={handleInp}
            value={editContact.photo}
          />
          <Button
            variant="outlined"
            size="large"
            className="btn-edit"
            onClick={() => {
              savedContact(editContact);
              navigate("/");
            }}
          >
            SAVE
          </Button>
          <Button
            variant="outlined"
            size="large"
            className="btn2-edit"
            onClick={() => {
              savedContact(editContact);
              navigate("/");
            }}
          >
            Cancel
          </Button>
        </Box>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default EditContact;
