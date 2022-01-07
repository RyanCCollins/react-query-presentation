import React, { useEffect, useContext } from 'react';
import { PropTypes } from 'prop-types';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import {
  Box,
  Spinner,
  Heading,
  Text,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Grid,
  ResponsiveContext,
} from 'grommet';
import { Map, StatusInfo, Favorite, Link as LinkIcon } from 'grommet-icons';
import { loadProperties } from '../../actions';
import { Error } from '../../components';
import {
  selectProperties,
  selectPropertiesCount,
  selectPropertiesError,
  selectPropertiesLoading,
} from '../../selectors';

function Properties({ properties, count, error, isLoading, fetchProperties }) {
  const size = useContext(ResponsiveContext);
  const columnCount =
    {
      small: 1,
      medium: 2,
      large: 3,
    }[size] || 3;

  useEffect(() => {
    if (!properties.length) {
      fetchProperties();
    }
  }, [properties, fetchProperties]);

  if (error) {
    return <Error message={error.message} />;
  }

  if (isLoading) {
    return (
      <Box pad="large" fill align="center" justify="center">
        <Spinner size="large" />
        <Text>Loading...</Text>
      </Box>
    );
  }

  return (
    <Box>
      <Box direction="row" justify="between" align="center">
        <Heading>Properties for Sale</Heading>
        <Text>{count} total</Text>
      </Box>
      <Grid
        pad="small"
        columns={{
          count: columnCount,
          size: 'auto',
        }}
        gap="medium"
      >
        {properties.map((item) => (
          <Card
            key={item.id}
            elevation="medium"
            style={{ maxWidth: '550px' }}
            onClick={() => navigate(`/properties/${item.id}`)}
          >
            <CardHeader height="290px">
              <Box
                fit="cover"
                height="290px"
                width="100%"
                background={`url(${item.coverImage})`}
                a11yTitle={`${item.name} cover image`}
              />
            </CardHeader>
            <CardBody pad="medium" height="medium">
              <Heading level="2" size="small" margin="none">
                {item.price}
              </Heading>
              <Box direction="row" gap="small" align="center">
                <StatusInfo />
                <Text size="large" margin="none">
                  {item.details.bedrooms}br - {item.details.baths}ba
                  {' - '}
                  {item.details.sqft}sqft
                </Text>
              </Box>
              <Box direction="row" gap="small" align="center">
                <Map />
                <Text size="large" margin="none">
                  {item.name}
                </Text>
              </Box>
            </CardBody>
            <CardFooter background="light-1" pad="medium" justify="end">
              <LinkIcon />
              <Favorite color="status-error" />
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  properties: selectProperties(state),
  count: selectPropertiesCount(state),
  error: selectPropertiesError(state),
  isLoading: selectPropertiesLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProperties: () => dispatch(loadProperties()),
});

Properties.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchProperties: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.shape({ message: PropTypes.string.isRequired }),
  count: PropTypes.number.isRequired,
};

Properties.defaultProps = {
  error: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(Properties);
