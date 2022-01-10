import { grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: {
        main: '#10069f',
        light: '#10069f',
        dark: '#2a7de1',
      },
    },
    breakpoints: {
      xsmall: {
        value: 481,
      },
      small: {
        value: 768,
      },
      medium: {
        value: 1231,
      },
      large: {
        value: 1678,
      },
      xlarge: {
        value: 2069,
      },
      xxlarge: {},
    },
  },
});

export default theme;
