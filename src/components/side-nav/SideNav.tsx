import React from 'react'
import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material';

export type SideNavProps = {
  sideNavOpened: boolean;
  setSideNavOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

function SideNav({sideNavOpened, setSideNavOpened}: SideNavProps) {
  const anchor = 'left';
  const closeValue = false;

  return (
    <Drawer
    anchor={anchor}
    open={sideNavOpened}
    onClose={() => setSideNavOpened(closeValue)}>
      <Button></Button>
    </Drawer>
  )
}

export default SideNav