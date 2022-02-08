import { extendTheme } from '@chakra-ui/react'
import { main } from './colors/main'
import '@fontsource/poppins/400.css' // Regular
import '@fontsource/poppins/500.css' // Medium
import '@fontsource/poppins/600.css' // Semibold
import '@fontsource/poppins/700.css' // Bold

export const ChakraTheme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  colors: {
    ...main,
  },
})
