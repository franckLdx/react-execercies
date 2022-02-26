import { extendTheme } from "@chakra-ui/react"
import { colors } from './colors'
import { Button } from './button'
import { Radio } from './radio'
import { textStyles } from './textStyles'
import { config } from './config'

export const theme = extendTheme({
  config,
  textStyles,
  colors,
  components: {
    Button,
    Radio,
  },
})