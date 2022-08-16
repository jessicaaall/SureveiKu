import { extendTheme } from '@chakra-ui/react'
import "@fontsource/poppins";
import "@fontsource/raleway";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins'`,
    body: `'Raleway', sans-serif`,
  },
})

export default theme