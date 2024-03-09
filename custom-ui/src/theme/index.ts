import { extendTheme } from "@chakra-ui/react"
import { Button } from './button'
import { Card } from './card'
import { Radio } from './radio'
import { Select } from './select'
import { textStyles } from './textStyles'
import { colors } from './colors'
import { config } from './config'

export const theme = extendTheme({
  config,
  textStyles,
  colors,
  components: {
    Button,
    Card,
    Radio,
    Select,
  },
})