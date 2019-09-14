import styled from "styled-components";
import { device } from "../lib/device";

export const Column = styled.div`
	display: flex;
	text-align: ${props => props.textAlign};
	flex-direction: column;
	margin: ${props => props.margin};
	margin-right: ${props => props.gapRight};
	margin-left: ${props => props.gapLeft};
	justify-content: ${props => props.justifyContent};
	align-content: ${props => props.alignContent};
	align-items: ${props => props.alignItems};
	flex-grow: ${props => props.flexGrow};
	flex-basis: ${props => props.flexBasis};
	flex-shrink: ${props => props.flexShrink};
	width: ${props => (props.width / 12) * 100}%;
	backgroundcolor: ${props => props.backgroundColor};
`;

Column.defaultProps = {
	sm: 2,
	md: 1,
	lg: 0.5,
	alignSm: "center",
	flexShrink: 0
};

export default Column;
