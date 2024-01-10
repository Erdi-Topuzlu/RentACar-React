import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
//import { Link } from "@mui/material";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

const linkStyle = {
  color: "#000000",
  textDecoration: "none",
  border: "1px solid black",
  padding: "6px",
};

function Header() {
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          sx={{ flex: 1 }}
        >
          <img
            style={{ marginTop: "5px" }}
            width={150}
            src="../../../public/assets/logo/logo.png"
          />
        </Typography>

        <IconButton>
          <SearchIcon />
        </IconButton>
        <Link to={"/SignIn"}>
          <Button variant="outlined" size="small">
            Sign in
          </Button>
        </Link>

        <Link to={"/SignUp"}>
          <Button variant="outlined" size="small" style={{ marginLeft: "5px" }}>
            Sign up
          </Button>
        </Link>
      </Toolbar>
      <Toolbar 
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        <Link
          to={"/"}
          style={linkStyle}
          color="inherit"
          variant="body2"
          sx={{ p: 1, flexShrink: 0 }}
        >
          Homepage
        </Link>

        <Link
          to={"/"}
          style={linkStyle}
          color="inherit"
          variant="body2"
          sx={{ p: 1, flexShrink: 0 }}
        >
          Vehicles
        </Link>
        <Link
          to={"/"}
          style={linkStyle}
          color="inherit"
          variant="body2"
          sx={{ p: 1, flexShrink: 0 }}
        >
          About
        </Link>
        <Link
          to="#about"
          style={linkStyle}
          color="inherit"
          variant="body2"
          sx={{ p: 1, flexShrink: 0 }}
        >
          Contact
        </Link>
      </Toolbar>

      <Divider orientation="horizontal" />
    </React.Fragment>
  );
}

export default Header;
