import React from 'react';
import styled from 'styled-components';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Home, LibraryMusic, Search } from '@mui/icons-material';

const SidebarContainer = styled.div`
  width: 240px;
  height: 100vh;
  background-color: #000000;
  color: #b3b3b3;
  padding: 24px 0;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 0.3s ease-in-out;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 100%;
    transform: translateX(-100%);
    &.open {
      transform: translateX(0);
    }
  }
`;

const Logo = styled(Typography)`
  color: #ffffff;
  padding: 0 24px;
  margin-bottom: 24px;
  font-weight: 700;
`;

const StyledListItem = styled(ListItem)`
  padding: 8px 24px;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #ffffff;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateX(4px);
  }
  .MuiListItemIcon-root {
    transition: color 0.2s ease-in-out;
  }
  &:hover .MuiListItemIcon-root {
    color: #ffffff !important;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo variant="h6">Music Player</Logo>
      <List>
        <StyledListItem>
          <ListItemIcon>
            <Home sx={{ color: '#b3b3b3' }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </StyledListItem>
        <StyledListItem>
          <ListItemIcon>
            <Search sx={{ color: '#b3b3b3' }} />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </StyledListItem>
        <StyledListItem>
          <ListItemIcon>
            <LibraryMusic sx={{ color: '#b3b3b3' }} />
          </ListItemIcon>
          <ListItemText primary="Your Library" />
        </StyledListItem>
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;