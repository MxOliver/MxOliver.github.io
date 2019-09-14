import styled from "styled-components";
import { almond, lychee } from "../Theme/colors";

export const H1 = styled.h1`
	font-size: ${props => props.fontSize};
	line-height: 1.5;
	margin: ${props => props.margin};
`;

H1.defaultProps = {
	margin: 0,
	fontSize: "3em"
};

export const H2 = styled.h2`
	font-size: ${props => props.fontSize};
	line-height: 1.15;
	margin: ${props => props.margin};
	font-weight: ${props => props.fontWeight};
`;

H2.defaultProps = {
	fontWeight: "100",
	fontSize: "1em"
};

export const Text = styled.p`
	font-size: ${props => props.fontSize};
	line-height: 2;
	margin: ${props => props.margin};
	text-indent: ${props => props.indent};
`;

Text.defaultProps = {
	fontSize: "13pt",
	margin: 0
};

export const Link = styled.a`
	text-decoration: ${props => props.textDecoration};
	font-size: ${props => props.fontSize};
	color: ${props => props.color};
	:hover {
		color: ${props => props.hoverColor};
	}
	:visited {
		color: ${props => props.visitedColor};
	}
	:active {
		color: ${props => props.activeColor};
	}
`;

Link.defaultProps = {
	textDecoration: "none",
	color: lychee.primary,
	hoverColor: lychee.secondary
};
