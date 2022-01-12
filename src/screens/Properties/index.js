import React from 'react';
import { navigate } from '@reach/router';
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
} from 'grommet';
import { Favorite, Link as LinkIcon } from 'grommet-icons';
import { Error, PropertyDetails } from '../../components';
import { usePropertiesContext } from '../../contexts';
import { useColumnCount } from './hooks';

function Properties() {
  const columnCount = useColumnCount();
  const { data: properties, loading, error } = usePropertiesContext();

  if (error) {
    return <Error message={error.message} />;
  }

  if (loading) {
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
        <Heading>My Properties</Heading>
        <Text>{properties.length} total</Text>
      </Box>
      <Grid
        columns={{
          count: columnCount,
          size: 'auto',
        }}
        gap="medium"
      >
        {properties.map((property) => (
          <Card
            key={property.id}
            elevation="medium"
            style={{ maxWidth: '550px' }}
            onClick={() => navigate(`/properties/${property.id}`)}
          >
            <CardHeader height="290px">
              <Box
                fit="cover"
                height="290px"
                width="100%"
                background={`url(${property.coverImage})`}
                a11yTitle={`${property.name} cover image`}
              />
            </CardHeader>
            <CardBody pad="medium" height="medium">
              <PropertyDetails property={property} />
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

export default Properties;
