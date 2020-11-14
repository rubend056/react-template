import { Theme } from "@emotion/react";
import Color from "color";

const primary = Color('#3434eb')

const themes:Theme[] = [
  {
    colors: {
      primary: primary.hex(),
      primary_dark: primary.darken(.3).hex(),
      primary_light: primary.lighten(.3).hex(),
      accent: '#965',
      text: '#111',
      background: '#000',
    }
  }
]

export default themes;