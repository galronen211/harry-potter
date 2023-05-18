import "./Housepage.css";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { selectAllHouses } from "../../store/slices/housesSlice";
import { useDispatch, useSelector } from "react-redux";
import StudentSelector from "../../components/student-selector/StudentSelector";
import { AppDispatch } from "../../store/store";
import {
  fetchStudents,
  selectAllStudents,
} from "../../store/slices/studentsSlice";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Pagination,
} from "@mui/material";
import FilterButton from "../../components/sort-button/SortButton";
import CardSearch from "../../components/card-search/CardSearch";
import { SortByValue, SortDirection } from "../../models/Sort";
import { Student } from "../../models/Student";
import StudentEditDialog from "../../components/student-edit-dialog/StudentEditDialog";

function Housepage() {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const [filterText, setFilterText] = useState("");
  const [sortDirection, setSortDirection] = useState<SortDirection>("ASC");
  const [sortValue, setSortValue] = useState<SortByValue>("name");
  const [selected, setSelected] = useState<Student>();

  const houseId = location.state;

  const students = useSelector(selectAllStudents);
  const houses = useSelector(selectAllHouses);
  const house = houses.find((house) => house.id === houseId);

  useEffect(() => {
    dispatch(fetchStudents(houseId));
  }, [houseId, dispatch]);

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
        ></CardHeader>
        <CardContent>
          <StudentSelector
            students={students}
            filterText={filterText}
            sortDirection={sortDirection}
            sortValue={sortValue}
            setSelected={setSelected}
          />
        </CardContent>
        <CardActions>
          <Pagination variant="outlined" color="primary" />
        </CardActions>
      </Card>
      <StudentEditDialog student={selected} setSelectedStudent={setSelected} houses={houses} />
    </div>
  );
}

export default Housepage;
