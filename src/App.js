import React from 'react';
import { Grommet, grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { Router } from '@reach/router';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { PropertiesScreen, PropertyScreen } from './screens';
import queryClient from './client';
import AppLayout from './AppLayout';

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: {
        main: '#10069f',
        light: '#10069f',
        dark: '#2a7de1',
      },
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Grommet full theme={theme} pad="medium">
        <AppLayout>
          <Router>
            <PropertiesScreen exact path="/" />
            <PropertyScreen path="/properties/:propertyId" />
          </Router>
        </AppLayout>
      </Grommet>
    </QueryClientProvider>
  );
}

export default App;
