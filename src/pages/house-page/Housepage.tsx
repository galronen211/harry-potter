import "./Housepage.css";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { selectAllHouses } from "../../store/slices/housesSlice";
import { useDispatch, useSelector } from "react-redux";
import StudentSelector from "../../components/student-selector/StudentSelector";
import { AppDispatch } from "../../store/store";
import SortIcon from "@mui/icons-material/Sort";
import {
  fetchStudents,
  getStudentsStatus,
  selectAllStudents,
} from "../../store/slices/studentsSlice";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Pagination,
  TextField,
} from "@mui/material";
import FilterButton from "../../components/sort-button/SortButton";
import CardSearch from "../../components/common/card-search/CardSearch";

function Housepage() {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const [filterText, setFilterText] = useState('');

  const houseId = location.state;

  const students = useSelector(selectAllStudents);
  const house = useSelector(selectAllHouses).find(
    (house) => house.id === houseId
  );

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
                <FilterButton />
              <CardSearch
                onChange={(event) => setFilterText(event.target.value)}
                value={filterText}
              />
            </div>
          }
        ></CardHeader>
        <CardContent>
          <StudentSelector students={students} filterText={filterText} />
        </CardContent>
        <CardActions>
          <Pagination variant="outlined" color="primary" />
        </CardActions>
      </Card>
    </div>
  );
}

export default Housepage;
