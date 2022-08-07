import React, { useContext } from "react";
import { contactContext } from "../ContactContext";
import AddContact from "./contact/AddContact";
import ContactList from "./contact/ContactList";

const Home = () => {
  //   const [state, setState] = useState(true);
  //   setState(false);
  //   console.log(state);

  return (
    <div>
      <AddContact />
      <ContactList />
    </div>
  );
};

export default Home;
