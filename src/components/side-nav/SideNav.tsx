import './SideNav.css';
import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { House } from '../../models/House';

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
        ) }
      </List>
    </>
  )

  return (
    <Drawer
    anchor={anchor}
    open={sideNavOpened}
    onClose={() => setSideNavOpened(closeValue)}>
      {drawerContent}
    </Drawer>
  )
}

export default SideNav