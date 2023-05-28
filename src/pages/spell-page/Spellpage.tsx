import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormDialog from "../../components/form-dialog/FormDialog";
import SpellDialog from "../../components/forms/spells/SpellDialog";
import { Spell } from "../../models/Spell";
import {
  fetchSpells,
  getSpellsStatus,
  selectAllSpells,
} from "../../store/slices/spellsSlice";
import { AppDispatch } from "../../store/store";
import SpellCard from "./components/SpellCard";

interface SpellListProps {
  spells: Spell[];
  onEdit: (spell: Spell) => void;
  onDelete: (spell: Spell) => void;
}

const SpellList = ({ spells, onEdit, onDelete }: SpellListProps) => {
  return (
    <Grid container>
      {spells.map((spell) => {
        return (
          <Grid item xs={12} sm={12} md={6} lg={3} p={2}>
            <SpellCard spell={spell} onEdit={onEdit} onDelete={onDelete} />
          </Grid>
        );
      })}
    </Grid>
  );
};

function Spellpage() {
  const dispatch = useDispatch<AppDispatch>();
  const [opened, setOpened] = useState<boolean>(false);
  const [selected, setSelected] = useState<Spell | null>(null);

  const spells: Spell[] = useSelector(selectAllSpells);
  const spellsStatus = useSelector(getSpellsStatus);

  useEffect(() => {
    if (spellsStatus === "idle") {
      dispatch(fetchSpells());
    }
  }, [spellsStatus, dispatch]);

  const handleCancel = () => {
    setOpened(false);
    setSelected(null);
  };

  const handleEdit = (spell: Spell) => {
    setOpened(true);
    setSelected(spell);
  };

  const handleDelete = (spell: Spell) => {};

  const handleValidation = () => {
    handleCancel();
  }

  return (
    <>
      <SpellList spells={spells} onEdit={handleEdit} onDelete={handleDelete} />
      <FormDialog title="Edit Spell" open={opened} onCancel={handleCancel}>
        <SpellDialog spell={selected} onCancel={handleCancel} onValidate={handleValidation} />
      </FormDialog>
    </>
  );
}

export default Spellpage;
