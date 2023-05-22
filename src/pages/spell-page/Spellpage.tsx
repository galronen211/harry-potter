import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import SpellCard from "./components/SpellCard";


function Spellpage() {


  const spells = [
    {
      id: 0,
      name: "asdf",
      users: [{
        "id": 1,
        "name": "Draco Malfoy",
        "imageUrl": "https://static.wikia.nocookie.net/harrypotter/images/7/7e/Draco_Malfoy_TDH.png",
    },]
    },
    {
      id: 1,
      name: "asdaaaaf",
      users: []
    },
    {
      id: 2,
      name: "asaaaaadf",
      users: []
    },
  ];

  return (
    <Grid>
        <SpellCard spell={spells[0]} />
    </Grid>
  );
}

export default Spellpage;
