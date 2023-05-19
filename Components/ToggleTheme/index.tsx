import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { useEffect } from 'react';
import { IconButton } from '@mui/material';
import * as Icons from 'react-icons/md';
const ToggleTheme = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div></div>;
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
      >
        {resolvedTheme === 'dark' ? (
          <Icons.MdDarkMode />
        ) : (
          <Icons.MdLightMode />
        )}
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => {
            setTheme('light');
            handleClose();
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              flexGrow: 1,
              textTransform: 'capitalize',
            }}
          >
            <Typography>light</Typography>
            <Icons.MdLightMode />
          </Box>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setTheme('dark');
            handleClose();
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              flexGrow: 1,
              textTransform: 'capitalize',
            }}
          >
            <Typography>dark</Typography>
            <Icons.MdDarkMode />
          </Box>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ToggleTheme;
