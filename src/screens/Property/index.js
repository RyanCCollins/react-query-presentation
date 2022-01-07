import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text, Anchor, Spinner, DataTable } from 'grommet';
import { LinkPrevious } from 'grommet-icons';
import { navigate } from '@reach/router';
import { Error } from '../../components';
import { useLoadInquiriesQuery, useLoadPropertyQuery } from './queries';

function Property({ propertyId }) {
  const {
    data: inquiries,
    isLoading: isLoadingInquiries,
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
      <Heading>Property</Heading>
      {!property ? (
        <Text size="large">Property not found</Text>
      ) : (
        <>
          <Box gap="medium" pad="medium" direction="row">
            <Text>{property.id}</Text>
            <Text>{property.name}</Text>
            <Text>{property.status}</Text>
          </Box>
          <Box direction="row" gap="small" align="center" justify="between">
            <Box direction="row" gap="small" align="center">
              <Heading>Inquiries</Heading>
              {isLoadingInquiries && <Spinner />}
            </Box>
            {/* {count > 0 && <Text>Total Inquiries: {count}</Text>} */}
          </Box>
          {isLoadingInquiries ? (
            <Box pad="medium" fill align="center" justify="center">
              <Spinner size="medium" />
              <Text>Loading...</Text>
            </Box>
          ) : (
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
          )}
        </>
      )}
    </Box>
  );
}

Property.propTypes = {
  propertyId: PropTypes.string.isRequired,
};

export default Property;
