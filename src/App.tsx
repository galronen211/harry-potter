import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/common/header/Header";
import Homepage from "./pages/home-page/Homepage";
import SideNav from "./components/common/side-nav/SideNav";
import Housepage from "./pages/house-page/Housepage";
import {
  fetchHouses,
  getHousesStatus,
  selectAllHouses,
} from "./store/slices/housesSlice";
import { AppDispatch } from "./store/store";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Spellpage from "./pages/spell-page/Spellpage";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const houses = useSelector(selectAllHouses);
  const housesStatus = useSelector(getHousesStatus);

  const [sideNavOpened, setSideNavOpened] = useState(false);

  useEffect(() => {
    if (housesStatus === "idle") {
      dispatch(fetchHouses());
    }
  }, [housesStatus, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header setSideNavOpened={setSideNavOpened} />
      <SideNav
        sideNavOpened={sideNavOpened}
        setSideNavOpened={setSideNavOpened}
        links={houses}
      />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/house" element={<Housepage />}></Route>
        <Route path="/spell" element={<Spellpage />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
