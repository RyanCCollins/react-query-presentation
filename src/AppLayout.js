import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text, Anchor } from 'grommet';
import { Home } from 'grommet-icons';
import { navigate } from '@reach/router';

function Logo() {
  return (
    <Anchor onClick={() => navigate('/')}>
      <Box direction="row" align="center" gap="small">
        <Home color="#2a7de1" />
        <Box>
          <Heading
            level="3"
            margin="none"
            color="#10069f"
            size="small"
            style={{ fontFamily: "'Italiana', sans-serif" }}
          >
            COMPANY NAME
          </Heading>
          <Text size="small" color="#10069f">
            REAL ESTATE
          </Text>
        </Box>
      </Box>
    </Anchor>
  );
}

function AppLayout({ children }) {
  return (
    <Box>
      <Box
        justify="between"
        direction="row"
        align="center"
        pad="medium"
        style={{ boxShadow: '0 2px 20px 0 rgba(0, 0, 0, .1)' }}
        as="header"
      >
        <Logo />
        <Box>
          <Anchor label="My Properties" onClick={() => navigate('/')} />
        </Box>
      </Box>
      <Box pad="medium">{children}</Box>
    </Box>
  );
}

AppLayout.propTypes = { children: PropTypes.node.isRequired };

export default AppLayout;
