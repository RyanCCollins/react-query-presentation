import React from 'react';
import { Grommet, Box, grommet } from 'grommet';
import { Router } from '@reach/router';
import { QueryClientProvider } from 'react-query';
import { PropertiesScreen, PropertyScreen } from './screens';
import queryClient from './client';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Grommet full theme={grommet} pad="medium">
        <Box style={{ maxWidth: '1800px' }} pad="medium">
          <Router>
            <PropertiesScreen path="/" />
            <PropertyScreen path="/properties/:propertyId" />
          </Router>
        </Box>
      </Grommet>
    </QueryClientProvider>
  );
}

export default App;
