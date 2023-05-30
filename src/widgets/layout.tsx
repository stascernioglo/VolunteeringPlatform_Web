import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { Link, Outlet } from 'react-router-dom';
import { LoginButton } from './auth/loginButton';
import { useContext } from 'react';
import { LogoutButton } from './auth/logoutButton';
import { AuthContext } from "app/App";
import { OrganizationButtons } from './auth/organizationButtons';
import { UserButtons } from './auth/simpleUserButtons';
import { VolunteerButtons } from './auth/volunteerButtons';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Layout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const { isLoggedIn, role } = useContext(AuthContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
          <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, ml: 5 }} >
            <Link style={{ color: 'white' }} to = "/">
            <Typography variant="h6" noWrap component="div">
                Volunteering Platform
            </Typography>
          </Link>
          </Box>
          <Box sx={{ mr: 3 }} >
            {(isLoggedIn) ? <LogoutButton /> : <LoginButton /> }
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to="projects">
            <ListItem key="Projects" disablePadding>
              <ListItemButton>
                  <ListItemIcon>
                    <AccessibilityNewIcon />
                  </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </ListItem>
          </Link>
          
          <Link to="gooddeeds">
            <ListItem key="Good Deeds" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <VolunteerActivismIcon />
                </ListItemIcon>
                <ListItemText primary="Good Deeds" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="organizations">
            <ListItem key="Organizations" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HandshakeIcon />
                </ListItemIcon>
                <ListItemText primary="Organizations" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="volunteers">
          <ListItem key="Volunteers" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FamilyRestroomIcon /> 
              </ListItemIcon>
              <ListItemText primary="Volunteers" />
            </ListItemButton>
          </ListItem>
          </Link>
        </List>
        { (role === "organization") ? <OrganizationButtons /> : <></>}
        { (role === "volunteer") ? <VolunteerButtons /> : <></>}
        { (role === "user") ? <UserButtons /> : <></>}
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}

export {Layout}

