import { useFormik } from "formik";
import React, { useState } from "react";
import { Student, StudentGender } from "../../../models/Student";
import {
  Button,
  FormControl,
  FormGroup,
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

interface FormProps {
  student: Student | undefined;
  houses: House[];
}

interface FormValues {
  name: string | undefined;
  age: number | undefined;
  admissionDate: Dayjs;
  houseId: number | undefined;
  gender: StudentGender | undefined;
}

function StudentEditForm({ student, houses }: FormProps) {
  const initialValues: FormValues = {
    name: student?.name,
    age: student?.age,
    admissionDate: dayjs(student?.admissionDate),
    houseId: student?.houseId,
    gender: student?.gender,
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => console.log(values),
  });

  const selectionMenuItems = houses.map((house) => (
    <MenuItem value={house.id} key={house.id}>
      {house.name}
    </MenuItem>
  ));

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl fullWidth>
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          label="Age"
          type="number"
          name="age"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
      </FormControl>
      <FormControl fullWidth>
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
        >
          {selectionMenuItems}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Gender</InputLabel>
        <Select
          name="gender"
          onChange={formik.handleChange}
          value={formik.values.gender}
        >
          <MenuItem key={1} value='male'>Male</MenuItem>
          <MenuItem key={2} value='female'>Female</MenuItem>
        </Select>
      </FormControl>

      <Button type="submit">Save</Button>
    </form>
  );
}

export default StudentEditForm;
