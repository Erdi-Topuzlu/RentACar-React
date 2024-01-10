import { Typography } from '@mui/material';
import Link from '@mui/material/Link';


export function Copyright() {
    return (
      <div align="center" style={{marginTop:"40px"}}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.github.com/">
          Tobeto @Pair-1
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        
      </Typography>
      
      <img style={{marginTop:"10px"}} width={100} src='../../../public/assets/logo/tobeto.png' />
      </div>
    );
  }