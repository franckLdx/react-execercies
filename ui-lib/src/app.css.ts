import { style } from '@vanilla-extract/css';
import { colors } from './style/color.css'

export const appStyle = style({
  backgroundColor: colors.square.color.brand
});