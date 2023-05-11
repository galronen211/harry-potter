import './Header.css';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';

export type HeaderProps = {
    setSideNavOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({setSideNavOpened}: HeaderProps) {
    const OPEN_VALUE = true;

  return (
    <div className='container'>
        <Button onClick={() => setSideNavOpened(OPEN_VALUE)}>
            <MenuIcon color='primary'></MenuIcon>
        </Button>
    </div>
  )
}

export default Header