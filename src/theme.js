import { extendTheme } from '@chakra-ui/react'
import "@fontsource/poppins";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins'`,
    body: `'Raleway', sans-serif`,
  },
})

export default theme