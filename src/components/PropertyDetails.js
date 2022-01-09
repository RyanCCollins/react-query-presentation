import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text } from 'grommet';
import { Map, StatusInfo } from 'grommet-icons';

function PropertyDetails({ property }) {
  return (
    <Box>
      <Heading level="2" size="small" margin="none">
        {property.price}
      </Heading>
      <Box direction="row" gap="small" align="center">
        <StatusInfo />
        <Text size="large" margin="none">
          {property.details.bedrooms}br - {property.details.baths}ba
          {' - '}
          {property.details.sqft}sqft
        </Text>
      </Box>
      <Box direction="row" gap="small" align="center">
        <Map />
        <Text size="large" margin="none">
          {property.name}
        </Text>
      </Box>
    </Box>
  );
}

PropertyDetails.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    details: PropTypes.shape({
      bedrooms: PropTypes.number.isRequired,
      baths: PropTypes.number.isRequired,
      sqft: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PropertyDetails;
