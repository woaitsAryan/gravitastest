'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useSpring, animated } from 'react-spring';

export default function SwipeableTemporaryDrawer() {
  const [isOpen, setisOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setisOpen(open);
  };

  const navbarAnimation = useSpring({
    borderRadius: isOpen ? '0px' : '50%',
    width: isOpen ? '200px' : '50px',
    // Additional styles...
  });

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuIcon></MenuIcon></Button>
      <animated.div className="navbar" style={navbarAnimation}>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
      <Box
      sx={{ width: "500px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      >
        <Link href="/inbox">
          <Button variant="text" fullWidth>
            Inbox
          </Button>
        </Link>
        <Link href="/starred">
          <Button variant="text" fullWidth>
            Starred
          </Button>
        </Link>
        <Link href="/send-email">
          <Button variant="text" fullWidth>
            Send email
          </Button>
        </Link>
        <Link href="/drafts">
          <Button variant="text" fullWidth>
            Drafts
          </Button>
        </Link>
        <Divider variant="middle">Socials</Divider>
        <Link href="https://www.instagram.com">
          <Button variant="text" fullWidth>
            Instagram
          </Button>
        </Link>
        <Link href="https://www.linkedin.com">
          <Button variant="text" fullWidth>
            Linkedin
          </Button>
        </Link>
        <Link href="https://www.github.com">
          <Button variant="text" fullWidth>
            Github
          </Button>
        </Link>
        
      </Box>
      </SwipeableDrawer>
      </animated.div>
    </div>
  );
}
