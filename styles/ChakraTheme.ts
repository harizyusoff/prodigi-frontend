import { extendTheme } from '@chakra-ui/react';
import { main } from './colors/main';

export const ChakraTheme = extendTheme({
  colors: {
    ...main,
  },
});
