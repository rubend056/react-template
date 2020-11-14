/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Color from "color";

import StyledComponent from '../styles/StyledComponent';

// interface ButtonProps{
// 	icon:string,
// 	icon_position:'left'|'right'
// }
const test = css`border-radius:5px;`

export default styled(
	class Button extends React.Component<StyledComponent>{
		render() {
			return <button className={this.props.className}> {this.props.children}</button>
		}
	}
)`

${test};
color: ${props => props.theme.colors.primary};
padding: 10px;
background: ${props => props.theme.colors.primary_dark};

cursor: pointer;
/* display: inline-block; */
&:hover{
	color : ${props => props.theme.colors.accent};
	background: ${props => Color(props.theme.colors.primary_dark).darken(.1).hex()};
}
&:active{
	background: ${props => Color(props.theme.colors.primary_dark).darken(.3).hex()};
}
`

// export default Button;