import "./StudentEditDialog.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";

interface FormDialogProps {
  children: React.ReactNode;
  title: string;
  open: boolean;
  onCancel: () => void;
}

function FormDialog({
  children,
  title,
  open,
  onCancel,
}: FormDialogProps) {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default FormDialog;
