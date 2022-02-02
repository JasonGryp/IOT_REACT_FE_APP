import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { toggleMenuAction } from "../state/Actions/SidebarActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectSideBarToggle } from "../state/Selectors/sidebarSelectors";
import { useUserInfo } from "../hooks/useUserInfo";
import Cookies from "js-cookie";
import { logout } from "../state/Actions/sessionActions";

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const menuToggle = useSelector(selectSideBarToggle);
  const {username,email}=useUserInfo();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    setAnchorEl(null);
    Cookies.remove('user');
    dispatch(logout())
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenuAction());
    // console.log(menuToggle)
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        zIndex: 2,
        position: "relative",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={toggleMenuHandler}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>{username}</MenuItem>
                <MenuItem onClick={handleClose}>{email}</MenuItem>
                <MenuItem onClick={handleLogOut}>Log out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
