import styled from "styled-components";

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(
		${props => props.numColumns},
		${props => props.colFlex}
	);
	grid-template-rows: repeat(
		${props => props.numRows},
		${props => props.rowFlex}
	);
	grid-gap: ${props => props.gap};
`;

export default Grid;
