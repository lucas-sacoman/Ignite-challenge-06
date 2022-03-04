import {
	Box,
	Flex,
	Heading,
	Img,
	Stack,
	Text,
	WrapItem,
} from "@chakra-ui/react";
import { CityData } from "../../types";

const CityCard = ({ city, country, image, background }: CityData) => {
	return (
		<WrapItem>
			<Box
				bg="white"
				borderWidth="1px"
				borderColor="yellow.600"
				rounded="md"
				shadow="lg"
				position="relative"
				m="2"
			>
				<Img src={background} />

				<Box p="6">
					<Flex justifyContent="space-between" align="center">
						<Stack spacing="3">
							<Heading fontSize="20px" fontWeight="semibold">
								{city}
							</Heading>

							<Text color="gray.400" fontSize="16px" fontWeight="medium">
								{country}
							</Text>
						</Stack>

						<Img src={image} w="30px" h="30px" />
					</Flex>
				</Box>
			</Box>
		</WrapItem>
	);
};

export { CityCard };
