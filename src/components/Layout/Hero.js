import styled from "styled-components";

const Hero = styled.div`
	display: flex;
	flex-direction: row;
	width: ${props => props.width};
	height: ${props => props.height};
	margin: ${props => props.margin};
	justify-content: ${props => props.justifyContent};
	align-content: ${props => props.alignContent};
	align-items: ${props => props.alignItems};
	text-align: ${props => props.textAlign};
`;

Hero.defaultProps = {
	width: "100%",
	height: "45vh",
	margin: 0,
	textAlign: "center"
};

export default Hero;
