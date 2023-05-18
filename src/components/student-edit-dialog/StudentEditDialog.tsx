import './StudentEditDialog.css';
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Theme,
  makeStyles,
} from "@mui/material";
import React from "react";
import { Student } from "../../models/Student";
import { useFormik } from 'formik';
import StudentEditForm from '../forms/student/StudentEditForm';
import { House } from '../../models/House';

interface StudentEditDialogProps {
    student: Student | undefined;
    setSelectedStudent: React.Dispatch<React.SetStateAction<Student | undefined>>;
    houses: House[];
}

function StudentEditDialog({student, setSelectedStudent, houses}: StudentEditDialogProps) {

    const opened = student !== undefined;

    const handleClose = () => {
        setSelectedStudent(undefined);
    }

  return (
    <Dialog open={opened} onClose={handleClose}>
      <DialogTitle>Edit Student Details</DialogTitle>
      <DialogContent>
        <Avatar
          alt="Avatar"
          src={student?.imageUrl}
          sx={{ height: '10rem', width: '10rem' }}
        />
        <DialogContentText>
          <StudentEditForm student={student} houses={houses} />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default StudentEditDialog;
