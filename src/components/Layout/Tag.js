import React from "react";
import styled from "styled-components";
import { tags } from "../Theme/colors";

const Wrapper = styled.span`
	background-color: ${props => props.bgColor};
	box-sizing: border-box;
	color: ${props => props.color};
	display: inline-block;
	font-size: 11px;
	font-weight: 700;
	line-height: 1;
	max-width: 100%;
	text-transform: uppercase;
	vertical-align: baseline;
	border-radius: 3px;
	padding: 2px 0px 3px;
`;

Wrapper.defaultProps = {
	bgColor: tags.purpleLight,
	color: tags.purple
};

const Lozenge = styled.span`
	display: inline-block;
	vertical-align: top;
	text-overflow: ellipsis;
	white-space: nowrap;
	box-sizing: border-box;
	max-width: 200px;
	width: 100%;
	overflow: hidden;
	padding: 0px 4px;
`;

const Tag = ({ children }) => {
	return (
		<Wrapper>
			<Lozenge>{children}</Lozenge>
		</Wrapper>
	);
};

export default Tag;
