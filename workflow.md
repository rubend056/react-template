
# Logs


## 11/13 
- Further research for workflow development in React
- Now I'm thinking the workflow is:
  - Following [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) ![Design Template](https://bradfrost.com/wp-content/uploads/2013/06/atomic-design.png) Clearly sets a basis for modular components, npm packages are part of that. Just the `theme-ui` library has `@theme-ui/core`, `@theme-ui/css`, `@theme-ui/mdx`, `@theme-ui/preset-*`, etc.. separating the work like that, allows the components to do 1 job, and do it well.
  - <b>Atoms</b> Pretty useless by themselves -> Buttons, TextFields, Text, Heading
  - <b>Molecules</b> Atoms bonded together and are the smallest fundamental units of a compound -> Search Bar with button and Description
  - <b>Organisms</b> Molecules joined together to form a relatively complex, distinct section of an interface -> Toolbar, Sidebar, Heading, Section
  - <b>Templates</b> Design for a page with organisms -> Home, Profile, Order, Store
- I'm using Emotion package `@emotion/react` to get the `css` 'overload' in jsx, which allows me to include css <i>in code</i>.
- So I won't be using scss? I don't want to, because if all variables can be in typescript, it'll be a wonder to work with.
-----
- I'll work with React and emotion for now I want to allow the knowledge to settle and play around before adding more stuff to the mix.
- I'll be using `rebass` which is a small set of ui components based on Styled System, style props for rapid UI development

