/** @jsxImportSource @emotion/react */
import React, { FunctionComponent } from 'react';
import { css, useTheme, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import {Button as RButton} from 'rebass'
import {Switch as RSwtich} from '@rebass/forms'
import { palette, useS } from '../themes'

export interface ButtonProps{
	
}

export const Button:FunctionComponent<ButtonProps> = (props) => {
	return <RButton p={2} m={1} {...props}>
		{props.children}
	</RButton>
}

export const ButtonToggle:FunctionComponent<ButtonProps> = (props) => {
	return <RSwtich p={2} m={1} {...props}>
		{props.children}
	</RSwtich>
}