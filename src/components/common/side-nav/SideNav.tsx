import './SideNav.css';
import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Button, Divider, List, ListItem, ListItemButton, ListItemText, ThemeProvider, createTheme } from '@mui/material';
import { House } from '../../../models/House';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import { Link } from 'react-router-dom';

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

export type SideNavProps = {
  sideNavOpened: boolean;
  setSideNavOpened: React.Dispatch<React.SetStateAction<boolean>>;
  links: House[];
}

function SideNav({sideNavOpened, setSideNavOpened, links}: SideNavProps) {
  const anchor = 'left';
  const closeValue = false;
  const title = 'Harry Potter';

  const drawerContent = (
    <>
      <span className='app-title'>{title}</span>
      <Divider></Divider>
      <List>
        {links.map(linkObject => 
          <ListItem key={linkObject.id}>
            <ListItemButton>
              <ListItemText>{linkObject.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        )}
      </List>
      <Divider></Divider>
      <List>
        <ListItem>
          <Link to='/spell'>
          <ListItemButton>
            <ListItemText>Spells</ListItemText>
          </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </>
  )

  return (
    <ThemeProvider theme={theme}>
      <Drawer
      anchor={anchor}
      open={sideNavOpened}
      onClose={() => setSideNavOpened(closeValue)}>
        {drawerContent}
      </Drawer>
    </ThemeProvider>
  )
}

export default SideNav