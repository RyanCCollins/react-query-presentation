import React from 'react';
import { Grommet } from 'grommet';
import { Router } from '@reach/router';
import { PropertiesScreen, PropertyScreen } from './screens';
import AppLayout from './AppLayout';
import theme from './theme';
import { PropertiesProvider } from './contexts';

function App() {
  return (
    <Grommet full theme={theme} pad="medium">
      <AppLayout>
        <PropertiesProvider>
          <Router>
            <PropertiesScreen exact path="/" />
            <PropertyScreen path="/properties/:propertyId" />
          </Router>
        </PropertiesProvider>
      </AppLayout>
    </Grommet>
  );
}

export default App;
