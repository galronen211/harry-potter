import "./StudentSelector.css";
import React from "react";
import { Student } from "../../models/Student";
import { Card, CardHeader, Grid, Pagination } from "@mui/material";

interface StudentSelectorProps {
  students: Student[];
  filterText: string;
}

const studentCard = (student: Student) => {
  return (
    <Grid
      key={student.id}
      item
      container
      md
      flexDirection="column"
      alignItems="center"
    >
      <div className="selector-wrapper">
        <img src={student.imageUrl} alt="" className="selector-media" />
        <span className="selector-title">{student.name}</span>
        <span className="selector-subtitle">age: {student.age}</span>
      </div>
    </Grid>
  );
};

function StudentSelector({ students, filterText }: StudentSelectorProps) {
  const studentGridList = students.map(
    (student) =>
      student.name.toLowerCase().includes(filterText.toLowerCase()) &&
      studentCard(student)
  );

  return (
    <div className="student-selector">
      <Grid container spacing={10}>
        {studentGridList}
      </Grid>
    </div>
  );
}

export default StudentSelector;
