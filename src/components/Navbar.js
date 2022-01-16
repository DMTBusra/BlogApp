import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../helpers/firebase";
import { AuthContext } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import "./Navbar.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/images/indir.png";
import Link from "@mui/material/Link";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogin = () => {
    navigate("/login");
    setAnchorEl(null);
  };
  const handleRegister = () => {
    navigate("/register");
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
    setAnchorEl(null);
  };
  const handleNew = () => {
    navigate("/newblog");
    setAnchorEl(null);
  };
  const handleProfile = () => {
    navigate("/profile");
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
      <Link href="/">
        <img style={{ width: "45px" }} src={logo} alt="logo" />
      </Link>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {currentUser ? (
          <div>
            <MenuItem onClick={handleProfile} name="profile">
              Profile
            </MenuItem>
            <MenuItem onClick={handleNew} name="newblog">
              New
            </MenuItem>
            <MenuItem onClick={handleLogout} name="logout">
              Logout
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem onClick={handleLogin} name="login">
              Login
            </MenuItem>
            <MenuItem onClick={handleRegister} name="register">
              Register
            </MenuItem>
          </div>
        )}
      </Menu>
      <Link href="/" id="title">
        <h1>
          <span>───</span> Blog App <span>───</span>
        </h1>
      </Link>

      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <BsPersonCircle id="icon" />
      </Button>
    </div>
  );
};

export default Navbar;
