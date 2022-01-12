import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text, Anchor, Spinner } from 'grommet';
import { LinkPrevious } from 'grommet-icons';
import { navigate } from '@reach/router';
import { Error, PropertyDetails } from '../../components';
import { InquiriesProvider, usePropertiesContext } from '../../contexts';
import Inquiries from './Inquiries';

function Property({ propertyId }) {
  const { data: properties, loading, error } = usePropertiesContext(propertyId);

  if (error) {
    return <Error message={error} />;
  }

  if (loading) {
    return (
      <Box pad="large" fill align="center" justify="center">
        <Spinner size="large" />
        <Text>Loading...</Text>
      </Box>
    );
  }

  const property = properties.find((p) => p.id === propertyId);

  return (
    <Box>
      <Anchor
        onClick={() => navigate('/')}
        icon={<LinkPrevious />}
        label="Back to Properties"
      />
      {!property ? (
        <Text size="large">Property not found</Text>
      ) : (
        <Box>
          <Heading>{property.name}</Heading>
          <Box gap="medium" pad="medium" direction="row">
            <Box
              background={`url(${property.coverImage})`}
              fit="cover"
              height="125px"
              width="100%"
              basis="250px"
            />
            <PropertyDetails property={property} />
          </Box>
          <InquiriesProvider propertyId={propertyId}>
            <Inquiries />
          </InquiriesProvider>
        </Box>
      )}
    </Box>
  );
}

Property.propTypes = {
  propertyId: PropTypes.string.isRequired,
};

export default Property;
