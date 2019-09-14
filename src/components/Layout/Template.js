import styled from "styled-components";

const TemplateGrid = styled.div`
	display: grid;
	grid-template-columns: ${props => props.columns};
	grid-template-rows: ${props => props.rows};
	grid-gap: ${props => props.gridGap};
`;

TemplateGrid.defaultProps = {
	columns: "1fr 5fr",
	rows: "1fr 10fr",
	gridGap: 0
};

export default TemplateGrid;
