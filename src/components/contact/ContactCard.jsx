import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { contactContext } from "../../ContactContext";
import { Link } from "react-router-dom";

export default function ContactCard({ item }) {
  const { deleteContact, editContact } = useContext(contactContext);

  return (
    <Card
      className="card"
      sx={{
        maxWidth: 295,
        maxHeight: 450,
        display: "flex",
        // justifyContent: "center",
        flexWrap: "wrap",
        m: 7.6,
      }}
    >
      <CardMedia
        component="img"
        alt="The President"
        height="310 "
        image={item.photo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.number}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          className="btn-delete"
          onClick={() => {
            deleteContact(item.id);
          }}
        >
          Delete
        </Button>
        <Link to="/edit">
          <Button
            className="edit"
            size="small"
            onClick={() => {
              editContact(item.id);
            }}
          >
            Edit
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
