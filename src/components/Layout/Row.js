import styled from "styled-components";

const Row = styled.div`
	display: flex;
	flex-direction: row;
	text-align: ${props => props.textAlign};
	justify-content: ${props => props.justifyContent};
	align-content: ${props => props.alignContent};
	align-items: ${props => props.alignItems};
	width: ${props => props.width};
	margin-top: ${props => props.gapTop};
	margin-bottom: ${props => props.gapBottom};
	backgroundcolor: ${props => props.backgroundColor};
`;

export default Row;
