import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { Box, Heading, Text, Anchor, Spinner, DataTable } from 'grommet';
import { LinkPrevious } from 'grommet-icons';
import { navigate } from '@reach/router';
import { Error } from '../../components';
import {
  selectProperty,
  selectInquiries,
  selectInquiriesCount,
  selectInquiriesError,
  selectInquiriesLoading,
  selectInquiriesUpdating,
} from '../../selectors';
import {
  loadInquiries as loadInquiriesAction,
  clearInquiries as clearInquiriesAction,
} from '../../actions';
import { POLL, POLL_INTERVAL } from '../../constants';

function Property({
  property,
  inquiries,
  loadInquiries,
  clearInquiries,
  count,
  error,
  isLoading,
  isUpdating,
}) {
  useEffect(() => {
    loadInquiries();
    let interval;
    if (POLL) {
      interval = setInterval(() => {
        loadInquiries();
      }, POLL_INTERVAL);
    }
    return () => {
      clearInterval(interval);
      clearInquiries();
    };
  }, [loadInquiries, clearInquiries]);

  if (error) {
    return <Error message={error.message} />;
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
              {isUpdating && <Spinner />}
            </Box>
            {count > 0 && <Text>Total Inquiries: {count}</Text>}
          </Box>
          {isLoading ? (
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

const mapStateToProps = (state, ownProps) => ({
  property: selectProperty(state, ownProps.propertyId),
  inquiries: selectInquiries(state),
  count: selectInquiriesCount(state),
  error: selectInquiriesError(state),
  isLoading: selectInquiriesLoading(state),
  isUpdating: selectInquiriesUpdating(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadInquiries: () => dispatch(loadInquiriesAction(ownProps.propertyId)),
  clearInquiries: () => dispatch(clearInquiriesAction()),
});

Property.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['pending', 'fulfilled']).isRequired,
  }),
  inquiries: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadInquiries: PropTypes.func.isRequired,
  clearInquiries: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  error: PropTypes.shape({ message: PropTypes.string.isRequired }),
  count: PropTypes.number.isRequired,
};

Property.defaultProps = {
  property: undefined,
  error: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(Property);
