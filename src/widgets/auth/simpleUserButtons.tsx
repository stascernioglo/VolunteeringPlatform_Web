import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import BallotIcon from '@mui/icons-material/Ballot';
import AddchartIcon from '@mui/icons-material/Addchart';

const UserButtons = () => {
    return (
        <>
          <Divider />
          <Link to="projects">
            <ListItem key="My Needs" disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                     <BallotIcon />
                  </ListItemIcon>
                <ListItemText primary="My Needs" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider />
          <Link to="askforhelp">
            <ListItem key="Ask for help" disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                     <AddchartIcon />
                  </ListItemIcon>
                <ListItemText sx={{ color: 'green', fontWeight: 'bold' }} primary="ASK FOR HELP" />
              </ListItemButton>
            </ListItem>
          </Link>
        </>
    )
};

export {UserButtons}