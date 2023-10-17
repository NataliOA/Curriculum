
import { green, pink } from '@mui/material/colors';
import Head from './head.js';
import Body from './body.js';
import Foot from './foot.js';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Grid, Typography} from '@mui/material';
  
  export default function curriculum() {
    return (
      <div sx={{ flexGrow: 1 }}>
        <Head />
        <Body />
        <Foot />
      </div>
    )
  }
  