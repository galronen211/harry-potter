import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from './components/header/Header';
import Homepage from './pages/home-page/Homepage';
import SideNav from './components/side-nav/SideNav';
import Housepage from './pages/house-page/Housepage';

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'black',
          color: 'white',
          padding: 20,
          textAlign: 'center',
          alignItems: 'center'
        }
      }
    }
  }
});

function App() {
  const [sideNavOpened, setSideNavOpened] = useState(false);

  const houses = [
    {
      id: 1,
      name: 'Slytherin',
      imageUrl: 'https://w7.pngwing.com/pngs/160/467/png-transparent-harry-potter-hogwarts-crest-harry-potter-hogwarts-mystery-harry-potter-hogwarts-mystery-sorting-hat-fictional-universe-of-harry-potter-harry-potter-shield-helga-hufflepuff-potter.png'
    },
    {
      id: 2,
      name: 'Griffindor',
      imageUrl: 'https://w7.pngwing.com/pngs/160/467/png-transparent-harry-potter-hogwarts-crest-harry-potter-hogwarts-mystery-harry-potter-hogwarts-mystery-sorting-hat-fictional-universe-of-harry-potter-harry-potter-shield-helga-hufflepuff-potter.png'
    },
    {
      id: 3,
      name: 'Hufflepuff',
      imageUrl: 'https://w7.pngwing.com/pngs/160/467/png-transparent-harry-potter-hogwarts-crest-harry-potter-hogwarts-mystery-harry-potter-hogwarts-mystery-sorting-hat-fictional-universe-of-harry-potter-harry-potter-shield-helga-hufflepuff-potter.png'
    },
    {
      id: 4,
      name: 'Ravenclaw',
      imageUrl: 'https://w7.pngwing.com/pngs/160/467/png-transparent-harry-potter-hogwarts-crest-harry-potter-hogwarts-mystery-harry-potter-hogwarts-mystery-sorting-hat-fictional-universe-of-harry-potter-harry-potter-shield-helga-hufflepuff-potter.png'
    }
  ];

  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <Header setSideNavOpened={setSideNavOpened} />
        <SideNav sideNavOpened={sideNavOpened} setSideNavOpened={setSideNavOpened} links={houses}/>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/house' element={<Housepage />}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
