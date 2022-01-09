import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text, Anchor, Spinner, DataTable } from 'grommet';
import { LinkPrevious } from 'grommet-icons';
import { navigate } from '@reach/router';
import { Error, PropertyDetails } from '../../components';
import { useLoadInquiriesQuery, useLoadPropertyQuery } from './queries';

function Property({ propertyId }) {
  const {
    data: inquiries,
    isFetching,
    error: errorInquiry,
  } = useLoadInquiriesQuery(propertyId);
  const {
    data: property,
    isLoading: isLoadingProperty,
    error: errorProperty,
  } = useLoadPropertyQuery(propertyId);

  if (errorInquiry || errorProperty) {
    return <Error message={errorInquiry || errorProperty} />;
  }

  if (isLoadingProperty) {
    return (
      <Box pad="large" fill align="center" justify="center">
        <Spinner size="large" />
        <Text>Loading...</Text>
      </Box>
    );
  }

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
        <>
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
          <Box direction="row" gap="small" align="center" justify="between">
            <Box direction="row" gap="small" align="center">
              <Heading level="2">Inquiries</Heading>
              {isFetching && <Spinner />}
            </Box>
            {/* {count > 0 && <Text>Total Inquiries: {count}</Text>} */}
          </Box>
          <DataTable
            columns={[
              {
                property: 'name',
                header: <Text>Name</Text>,
                primary: true,
              },
              {
                property: 'email',
                header: <Text>Email</Text>,
              },
              {
                property: 'phone',
                header: <Text>Phone</Text>,
              },
              {
                property: 'notes',
                header: <Text>Notes</Text>,
              },
            ]}
            data={inquiries}
          />
        </>
      )}
    </Box>
  );
}

Property.propTypes = {
  propertyId: PropTypes.string.isRequired,
};

export default Property;
