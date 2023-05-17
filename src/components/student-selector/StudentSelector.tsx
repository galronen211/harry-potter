import "./StudentSelector.css";
import React from "react";
import { Student } from "../../models/Student";
import { Card, CardHeader, Grid, Pagination } from "@mui/material";
import { SortByValue, SortDirection } from "../../models/Sort";

interface StudentSelectorProps {
  students: Student[];
  filterText: string;
  sortDirection: SortDirection;
  sortValue: SortByValue;
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

const sort = (
  direction: SortDirection,
  sortByValue: SortByValue,
  array: Array<any>
) => {
  const sortCoefficient = direction === "ASC" ? 1 : -1;

  return array.sort((first, second) => {
    let compareValue = 0;

    if (first[sortByValue] < second[sortByValue]) {
      compareValue = -1;
    } else if (first[sortByValue] > second[sortByValue]) {
      compareValue = 1;
    }

    return sortCoefficient * compareValue;
  });
};

const filter = (students: Student[], filterText: string) => {
  return [...students].filter((student) =>
    student.name.toLowerCase().includes(filterText.toLowerCase())
  );
};

function StudentSelector({
  students,
  filterText,
  sortDirection,
  sortValue,
}: StudentSelectorProps) {
  const sortedStudents = sort(
    sortDirection,
    sortValue,
    filter(students, filterText)
  );

  const studentGridList = sortedStudents.map((student) => studentCard(student));

  return (
    <div className="student-selector">
      <Grid container spacing={10}>
        {studentGridList}
      </Grid>
    </div>
  );
}

export default StudentSelector;
