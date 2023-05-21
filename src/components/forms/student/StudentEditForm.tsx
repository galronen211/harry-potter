import { useFormik } from "formik";
import React, { useState } from "react";
import { Student, StudentGender } from "../../../models/Student";
import {
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { House } from "../../../models/House";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import * as yup from "yup";

interface FormProps {
  student: Student | undefined;
  houses: House[];
  onValidate: () => void;
}

interface FormValues {
  name: string | undefined;
  age: number | undefined;
  admissionDate: Dayjs;
  houseId: number | undefined;
  gender: StudentGender | undefined;
}

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  age: yup
    .number()
    .positive("Age must be greater than 0")
    .required("Age is required"),
  admissionDate: yup.date().required("Admission date is required"),
  houseId: yup.number().required("House is required"),
  gender: yup.string().required("Gender is required"),
});

function StudentEditForm({ student, houses, onValidate }: FormProps) {
  const initialValues: FormValues = {
    name: student?.name,
    age: student?.age,
    admissionDate: dayjs(student?.admissionDate),
    houseId: student?.houseId,
    gender: student?.gender,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => onValidate(),
  });

  const selectionMenuItems = houses.map((house) => (
    <MenuItem value={house.id} key={house.id}>
      {house.name}
    </MenuItem>
  ));

  return (
    <form onSubmit={formik.handleSubmit}>
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

      <TextField
        fullWidth
        label="Age"
        type="number"
        name="age"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.age}
        error={formik.touched.age && Boolean(formik.errors.age)}
        helperText={formik.touched.age && formik.errors.age}
      />

      <FormControl
        fullWidth
        error={
          formik.touched.admissionDate && Boolean(formik.errors.admissionDate)
        }
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Admission Date"
            onChange={(value) => formik.setFieldValue("admissionDate", value)}
            value={formik.values.admissionDate}
          />
        </LocalizationProvider>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>House</InputLabel>
        <Select
          name="houseId"
          onChange={formik.handleChange}
          value={formik.values.houseId}
          error={formik.touched.houseId && Boolean(formik.errors.houseId)}
        >
          {selectionMenuItems}
        </Select>
        <FormHelperText>
          {formik.touched.houseId && formik.errors.houseId}
        </FormHelperText>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Gender</InputLabel>
        <Select
          name="gender"
          onChange={formik.handleChange}
          value={formik.values.gender}
        >
          <MenuItem key={1} value="male">
            Male
          </MenuItem>
          <MenuItem key={2} value="female">
            Female
          </MenuItem>
        </Select>
      </FormControl>

      <Button type="submit">Save</Button>
    </form>
  );
}

export default StudentEditForm;
