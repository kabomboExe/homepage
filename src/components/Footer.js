import React from 'react';
import "./Footer.css";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const Footer = () => {
    return <footer className='footer'>
        Made with{" "}
        <FavoriteRoundedIcon
            sx={{ color: "#ff0000", paddingLeft: 0.5, paddingRight: 0.5 }}
        />{" "}
        by<a className="name-tag" href="https://github.com/kabomboExe">Kai F.</a>
    </footer>

}

export default Footer;