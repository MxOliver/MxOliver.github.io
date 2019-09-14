import React from "react";
import FlexRow from "./components/Layout/Row";
import FlexColumn from "./components/Layout/Column";
import { H2, Text, Link } from "./components/Typography/Body";

const OpenSource = () => {
	return (
		<>
			<FlexColumn>
				<FlexRow justifyContent="center">
					<H2 fontSize="1.5rem" fontWeight="bold">
						Open Source Contributions
					</H2>
				</FlexRow>
				<FlexColumn textAlign="center">
					<Text>
						Ruby For Good --{" "}
						<Link href="https://github.com/Terrastories/terrastories">
							Terrastories
						</Link>
						<br />
					</Text>

					<Text>
						Ruby For Good --{" "}
						<Link href="https://github.com/rubyforgood/voices-of-consent">
							Voices of Consent
						</Link>
					</Text>
				</FlexColumn>
			</FlexColumn>
		</>
	);
};

export default OpenSource;
