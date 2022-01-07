import React from 'react';
import { Provider } from 'react-redux';
import { Grommet, Box, grommet } from 'grommet';
import { Router } from '@reach/router';
import store from './store';
import { PropertiesScreen, PropertyScreen } from './screens';

function App() {
  return (
    <Provider store={store}>
      <Grommet full theme={grommet} pad="medium">
        <Box style={{ maxWidth: '1800px' }} pad="medium">
          <Router>
            <PropertiesScreen path="/" />
            <PropertyScreen path="/properties/:propertyId" />
          </Router>
        </Box>
      </Grommet>
    </Provider>
  );
}

export default App;
