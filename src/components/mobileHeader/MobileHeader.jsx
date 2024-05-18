import React from "react";
import logo from "/logos/logo.png";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import styles from "./MobileHeader.module.css";

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setMenuOpen((prevOpen) => !prevOpen);
    console.log("clicked");
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" />
      <Button
        ref={anchorRef}
        aria-controls={menuOpen ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <MenuIcon className={styles.menuIcon} />
      </Button>
      <Popper
        open={menuOpen}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: "1" }}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={menuOpen} id="menu-list-grow">
                  <MenuItem onClick={handleClose}>
                    Join as Design Expert
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    Partner with LAND Interiors
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default MobileHeader;
