import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';

const VolunteerButtons = () => {
    return (
        <>
          <Divider />
          <Link to="myparticipations">
            <ListItem key="My Participations" disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                     <PlaylistAddCheckCircleIcon />
                  </ListItemIcon>
                <ListItemText primary="My Participations" />
              </ListItemButton>
            </ListItem>
          </Link>
        </>
    )
};

export {VolunteerButtons}