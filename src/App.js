import React from "react";
import FlexRow from "./components/Layout/Row";
import FlexColumn from "./components/Layout/Column";
import { H1, H2, Text, Link } from "./components/Typography/Body";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faDev,
	faGithubSquare,
	faBehanceSquare
} from "@fortawesome/free-brands-svg-icons";
import OpenSource from "./OpenSource";

function App() {
	return (
		<FlexColumn justifyContent="center" gapLeft="2em">
			<FlexRow textAlign="center" justifyContent="center" gapTop="1em">
				<header>
					<H1>{`{Mx.} Oliver Leigh Coley`}</H1>
					<H2>
						Full Stack Developer | JavaScript + Ruby Enthusiast | They/Them
						Pronouns
					</H2>

					<FlexRow justifyContent="center" gapTop="1em">
						<FlexColumn gapRight="1em">
							<Link href="https://behance.net/oliverleighcoley">
								<FontAwesomeIcon size="2x" icon={faBehanceSquare} />
							</Link>
						</FlexColumn>
						<FlexColumn gapRight="1em">
							<Link href="https://linkedin.in/oliverleighcoley">
								<FontAwesomeIcon size="2x" icon={faLinkedin} />
							</Link>
						</FlexColumn>
						<FlexColumn gapRight="1em">
							<Link href="https://dev.to/mxoliver">
								<FontAwesomeIcon size="2x" icon={faDev} />
							</Link>
						</FlexColumn>
						<FlexColumn gapRight="1em">
							<Link href="https://github.com/mxoliver">
								<FontAwesomeIcon size="2x" icon={faGithubSquare} />
							</Link>
						</FlexColumn>
					</FlexRow>
				</header>
			</FlexRow>
			<FlexRow gapTop="2em" justifyContent="center">
				<OpenSource />
			</FlexRow>
		</FlexColumn>
	);
}

export default App;
