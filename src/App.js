import React from 'react';
import { Grommet } from 'grommet';
import { Router } from '@reach/router';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { PropertiesScreen, PropertyScreen } from './screens';
import queryClient from './client';
import AppLayout from './AppLayout';
import theme from './theme';

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
