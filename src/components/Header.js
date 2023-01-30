import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [anchorEl, setanchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const dropdownMenuHandler = (event) => {
        setanchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setanchorEl(null);
    };

    return <header className='header'>
        <div className='menu-left'>
            <div className='menu-item logo'></div>
        </div>
        <div className='menu-right'>
            <button className="menu-item-dropdown" onClick={dropdownMenuHandler}>
                <MenuIcon sx={{fontSize:40}}/>
            </button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem> <Link className="menu-item" to="/">Home</Link></MenuItem>
                <MenuItem><Link className="menu-item" to="/portfolio">Portfolio</Link></MenuItem>
                <MenuItem><Link className="menu-item" to="/bachelor-thesis">Bachelor thesis</Link></MenuItem>

            </Menu>
            <Link className='menu-item' to="/">Home</Link>
            <Link className='menu-item' to="/portfolio">Portfolio</Link>
            <Link className='menu-item' to="bachelor-thesis">Bachelor thesis</Link>
        </div>

    </header>
}

export default Header;