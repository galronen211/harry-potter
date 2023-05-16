import "./SortButton.css";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputLabel,
  MenuItem,
  Popover,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import React, { useState } from "react";
import { SortByVaule, SortDirection } from "../../models/Sort";

function FilterButton() {
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("ASC");
  const [sortValue, setSortValue] = useState<SortByVaule>("name");

  const reverseDirection = (direction: SortDirection) =>
    direction === "ASC" ? "DESC" : "ASC";

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const handleSortDirectionSelection = (event: SelectChangeEvent) =>
    setSortDirection(event.target.value as SortDirection);

  const handleSortBySelection = (event: SelectChangeEvent) =>
    setSortValue(event.target.value as SortByVaule);

  const opened = Boolean(anchor);

  return (
    <>
      <IconButton onClick={handleClick}>
        <SortIcon />
      </IconButton>
      <Popover
        open={opened}
        onClose={handleClose}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        className="popover"
      >
        <Typography className="popover-title" style={{ fontWeight: 'bold', fontSize: '120%', marginBottom: '1rem' }}>Sort</Typography>
        <FormGroup>
          <FormControl sx={{marginBottom: '1rem'}}>
            <InputLabel id="direction-label">Direction</InputLabel>
            <Select
              labelId="direction-label"
              value={sortDirection}
              label="Direction"
              onChange={handleSortDirectionSelection}
            >
              <MenuItem value={"ASC"}>
                <ArrowUpwardIcon />
                Ascending
              </MenuItem>
              <MenuItem value={"DESC"}>
                <ArrowDownwardIcon />
                Descending
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="sort-by-label">Sort By</InputLabel>
            <Select
              labelId="sort-by-label"
              value={sortValue}
              label="Sort By"
              onChange={handleSortBySelection}
            >
              <MenuItem value={"name"}>Name</MenuItem>
              <MenuItem value={"age"}>Age</MenuItem>
            </Select>
          </FormControl>
        </FormGroup>
      </Popover>
    </>
  );
}

export default FilterButton;
