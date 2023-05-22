import "./Housepage.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { selectAllHouses } from "../../store/slices/housesSlice";
import { useDispatch, useSelector } from "react-redux";
import StudentSelector from "../../components/student-selector/StudentSelector";
import { AppDispatch } from "../../store/store";
import {
  fetchStudents,
  selectAllStudents,
} from "../../store/slices/studentsSlice";
import {
  Alert,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Pagination,
  Snackbar,
} from "@mui/material";
import FilterButton from "../../components/sort-button/SortButton";
import CardSearch from "../../components/card-search/CardSearch";
import { SortByValue, SortDirection } from "../../models/Sort";
import { Student, StudentGender } from "../../models/Student";
import StudentEditForm from "../../components/forms/student/StudentEditForm";
import FormDialog from "../../components/form-dialog/FormDialog";

function Housepage() {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const [filterText, setFilterText] = useState("");
  const [sortDirection, setSortDirection] = useState<SortDirection>("ASC");
  const [sortValue, setSortValue] = useState<SortByValue>("name");
  const [selectedStudent, setSelectedStudent] = useState<Student>();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [dialogOpened, setDialogOpened] = useState(false);

  const houseId = location.state;

  const students = useSelector(selectAllStudents);
  const houses = useSelector(selectAllHouses);
  const house = houses.find((house) => house.id === houseId);

  useEffect(() => {
    dispatch(fetchStudents(houseId));
  }, [houseId, dispatch]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const handleCancel = () => {
    setDialogOpened(false);
  };

  const handleSubmit = () => {
    setDialogOpened(false);
    setSnackbarOpen(true);
  };

  const handleSelection = (student: Student) => {
    setSelectedStudent(student);
    setDialogOpened(true);
  };

  return (
    <div className="house-wrapper">
      <img
        className="house-background"
        src={house?.imageUrl}
        alt=""
        draggable="false"
      />

      <Card className="selector-container">
        <CardHeader
          title={house?.name}
          action={
            <div className="card-header-actions">
              <FilterButton
                sortDirection={sortDirection}
                sortValue={sortValue}
                setSortDirection={setSortDirection}
                setSortValue={setSortValue}
              />
              <CardSearch
                onChange={(event) => setFilterText(event.target.value)}
                value={filterText}
              />
            </div>
          }
        />
        <CardContent>
          <StudentSelector
            students={students}
            filterText={filterText}
            sortDirection={sortDirection}
            sortValue={sortValue}
            onSelect={handleSelection}
          />
        </CardContent>
        <CardActions>
          <Pagination variant="outlined" color="primary" />
        </CardActions>
      </Card>
      <FormDialog
        title="Edit Student Information"
        open={dialogOpened}
        onCancel={handleCancel}
      >
        <Avatar
          alt="Avatar"
          src={selectedStudent?.imageUrl}
          sx={{ height: "10rem", width: "10rem" }}
        />
        <StudentEditForm
          student={selectedStudent}
          houses={houses}
          onValidate={handleSubmit}
          onCancel={handleCancel}
        />
      </FormDialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Student saved successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Housepage;
