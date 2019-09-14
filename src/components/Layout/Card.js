import styled from "styled-components";

const Card = styled.div`
	width: ${props => props.width};
	height: ${props => props.height};
	background-color: ${props => props.backgroundColor};
	color: ${props => props.color};
	box-shadow: ${props => props.shadow};
	transition: ${props => props.transition};
	:hover {
		box-shadow: ${props => props.hover};
	}
	padding: ${props => props.p};
`;

Card.defaultProps = {
	backgroundColor: "white",
	color: "black",
	transition: "0.3s",
	shadow: "1px 0px 4px",
	hover: "1px 1px 6px",
	p: "2em"
};

export default Card;
