import { useContext } from 'react';
import { ResponsiveContext } from 'grommet';

export const useColumnCount = () => {
  const size = useContext(ResponsiveContext);
  return (
    {
      xsmall: 1,
      small: 1,
      medium: 2,
      large: 3,
      xlarge: 4,
      xxlarge: 5,
    }[size] || 3
  );
};
