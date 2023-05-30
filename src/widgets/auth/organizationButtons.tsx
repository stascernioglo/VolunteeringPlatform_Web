import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const OrganizationButtons = () => {
    return (
        <>
          <Divider />
          <Link to="myprojects">
            <ListItem key="My Projects" disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                     <ArtTrackIcon />
                  </ListItemIcon>
                <ListItemText primary="My Projects" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider />
          <Link to="addproject">
            <ListItem key="Add New Project" disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                     <AddCircleIcon />
                  </ListItemIcon>
                <ListItemText sx={{ color: 'red', fontWeight: 'bold' }} primary="NEW PROJECT" />
              </ListItemButton>
            </ListItem>
          </Link>
        </>
    )
};

export {OrganizationButtons}