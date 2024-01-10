import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';

function Header() {

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <NavLink to={"/SignIn"}>
        <Button variant="outlined" size="small">
          Sign in
        </Button>
        </NavLink>
        

        <Button variant="outlined" size="small" style={{marginLeft:"5px"}}>
          Sign up
        </Button>
        
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        
        <Link
            color="inherit"
            noWrap
            variant="body2"
            href={"#"}
            sx={{ p: 1, flexShrink: 0 }}
          >Deneme 1
          </Link>

          <Link
            color="inherit"
            noWrap
            variant="body2"
            href={"#"}
            sx={{ p: 1, flexShrink: 0 }}
          >Deneme 1
          </Link>

          <Link
            color="inherit"
            noWrap
            variant="body2"
            href={"#"}
            sx={{ p: 1, flexShrink: 0 }}
          >Deneme 1
          </Link>

          <Link
            color="inherit"
            noWrap
            variant="body2"
            href={"#"}
            sx={{ p: 1, flexShrink: 0 }}
          >Deneme 1
          </Link>

          <Link
            color="inherit"
            noWrap
            variant="body2"
            href={"#"}
            sx={{ p: 1, flexShrink: 0 }}
          >Deneme 1
          </Link>

          
    
      </Toolbar>
    </React.Fragment>
  );
}


export default Header;