import React from "react";
import { Spell } from "../../../models/Spell";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button, DialogActions, TextField } from "@mui/material";

interface FormProps {
  spell: Spell | null;
  onValidate: () => void;
  onCancel: () => void;
}

interface FormValues {
  name: string;
  imageUrl: string;
}

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
});

function SpellDialog({ spell, onValidate, onCancel }: FormProps) {
  const initialValues: FormValues = {
    imageUrl: spell ? spell.imageUrl : "",
    name: spell ? spell.name : "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => onValidate(),
  });

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement> | undefined) => {
    formik.handleSubmit(e);

    if (formik.isValid) {
      onValidate();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Image URL"
        name="imageUrl"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.imageUrl}
        error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
        helperText={formik.touched.imageUrl && formik.errors.imageUrl}
      />
      <TextField
        fullWidth
        label="Name"
        name="name"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.name}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />

      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="submit">Save</Button>
      </DialogActions>
    </form>
  );
}

export default SpellDialog;
