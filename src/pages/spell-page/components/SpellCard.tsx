import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React from "react";
import { Spell } from "../../../models/Spell";
import { Student } from "../../../models/Student";
import { SelectionObject } from "../../../models/SelectionObject";

interface SpellCardProps {
  spell: Spell;
  onEdit: (spell: Spell) => void;
  onDelete: (spell: Spell) => void;
}

function SpellCard({ spell, onEdit, onDelete }: SpellCardProps) {
  return (
    <Card sx={{ overflow: "visible" }}>
      <Box display="flex" justifyContent="space-between" pt={1} px={2}>
        <Box
          borderRadius="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          overflow="hidden"
          mt={-3}
        >
          <Avatar
            alt="logo"
            src={spell.imageUrl}
            sx={{ width: 100, height: 100, border: "white solid .15rem" }}
          ></Avatar>
        </Box>

        <Box textAlign="right" lineHeight={1.25}>
          <Typography fontWeight="light">Name</Typography>
          <Typography variant="h5" fontWeight="bold">
            {spell.name}
          </Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" pt={1} px={2}>
        <Box>
          <Typography variant='h5' fontWeight='bolder'>Users</Typography>
          <AvatarGroup max={4}>
            {spell.users.map((user) => (
              <Avatar alt={user.name[0]} src={user.imageUrl} />
            ))}
          </AvatarGroup>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" p={2}>
        <Box>
          <IconButton onClick={() => onDelete(spell)}>
            <DeleteOutlineOutlinedIcon color="error" />
          </IconButton>
        </Box>

        <Box>
          <Button startIcon={<EditOutlinedIcon />} variant='contained' onClick={() => onEdit(spell)}>Edit</Button>
        </Box>
      </Box>
    </Card>
  );
}

export default SpellCard;
