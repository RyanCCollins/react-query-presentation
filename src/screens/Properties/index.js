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
import { Map, StatusInfo, Favorite, Link as LinkIcon } from 'grommet-icons';
import { Error } from '../../components';
import { useLoadPropertiesQuery } from './queries';
import { useColumnCount } from './hooks';

function Properties() {
  const columnCount = useColumnCount();
  const { data: properties, isLoading, error } = useLoadPropertiesQuery();

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
        <Text>{properties.length} total</Text>
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

export default Properties;
