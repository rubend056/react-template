import * as presets from '@theme-ui/presets'
import { Theme } from 'theme-ui'

const main:Theme = {
  ...presets.base,
  colors: {
    ...presets.base.colors,
    text: '#111',
    background: '#fff',
  },
}

export default {
	...presets,
	main
}
