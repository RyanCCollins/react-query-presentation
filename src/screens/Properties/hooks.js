import { useContext } from 'react';
import { ResponsiveContext } from 'grommet';

export const useColumnCount = () => {
  const size = useContext(ResponsiveContext);
  return (
    {
      small: 1,
      medium: 2,
      large: 3,
    }[size] || 3
  );
};
