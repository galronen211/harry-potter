import {
  Alert,
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormDialog from "../../components/form-dialog/FormDialog";
import SpellForm from "../../components/forms/spells/SpellForm";
import { Spell } from "../../models/Spell";
import {
  fetchSpells,
  getSpellsStatus,
  selectAllSpells,
} from "../../store/slices/spellsSlice";
import { AppDispatch } from "../../store/store";
import CreationCard from "./components/CreationCard";
import SpellCard from "./components/SpellCard";
import {
  SnackbarProvider,
  VariantType,
  useSnackbar,
  closeSnackbar,
} from "notistack";
import CloseIcon from "@mui/icons-material/Close";

const EDIT_SUCCESS_MESSAGE = "Spell edited successfully!";
const CREATION_SUCCESS_MESSAGE = "Spell created successfully!";

interface SpellListProps {
  spells: Spell[];
  onEdit: (spell: Spell) => void;
  onDelete: (spell: Spell) => void;
  onCreate: () => void;
}

const SpellList = ({ spells, onEdit, onDelete, onCreate }: SpellListProps) => {
  return (
    <Grid container>
      {spells.map((spell) => {
        return (
          <Grid item xs={12} sm={12} md={6} lg={3} p={2} key={spell.id}>
            <SpellCard spell={spell} onEdit={onEdit} onDelete={onDelete} />
          </Grid>
        );
      })}

      <Grid item xs={12} sm={12} md={6} lg={3} p={2} key={-1}>
        <CreationCard onClick={onCreate} />
      </Grid>
    </Grid>
  );
};

function Spellpage() {
  const dispatch = useDispatch<AppDispatch>();
  const { enqueueSnackbar } = useSnackbar();
  const [opened, setOpened] = useState<boolean>(false);
  const [selected, setSelected] = useState<Spell | null>(null);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const spells: Spell[] = useSelector(selectAllSpells);
  const spellsStatus = useSelector(getSpellsStatus);

  useEffect(() => {
    if (spellsStatus === "idle") {
      dispatch(fetchSpells());
    }
  }, [spellsStatus, dispatch]);

  const successSnackbar = (message: string) => {
    enqueueSnackbar(message, {
      variant: "success",
      action: (snackbarId) => (
        <IconButton size="small" onClick={() => closeSnackbar(snackbarId)}>
          <CloseIcon fontSize="inherit" />
        </IconButton>
      ),
    });
  };

  const handleCancel = () => {
    setOpened(false);
    setSelected(null);
  };

  const handleEdit = (spell: Spell) => {
    setOpened(true);
    setSelected(spell);
    setSnackbarMessage(EDIT_SUCCESS_MESSAGE);
  };

  const handleDelete = (spell: Spell) => {};

  const handleValidation = () => {
    handleCancel();

    successSnackbar(snackbarMessage);
  };

  const handleCreation = () => {
    setOpened(true);
    setSnackbarMessage(CREATION_SUCCESS_MESSAGE);
  };

  return (
    <>
      <SpellList
        spells={spells}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onCreate={handleCreation}
      />

      <FormDialog
        title={`${selected ? "Edit" : "Create"} Spell`}
        open={opened}
        onCancel={handleCancel}
      >
        <SpellForm
          spell={selected}
          onCancel={handleCancel}
          onValidate={handleValidation}
        />
      </FormDialog>
    </>
  );
}

export default Spellpage;
