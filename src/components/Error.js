import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';

function Error({ message }) {
  return (
    <Box pad="medium" background="status-error">
      <Text>Error: {message}</Text>
    </Box>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
