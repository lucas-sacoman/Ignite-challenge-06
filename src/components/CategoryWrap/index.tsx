import { Heading, Img, Stack, WrapItem } from "@chakra-ui/react";
import { CategoryWrapData } from "../../types/interfaces";

const CategoryWrap = ({ title, image }: CategoryWrapData) => {
	return (
		<WrapItem>
			<Stack direction="column" align="center" spacing="8">
				<Img src={image} w="80px" h="80px" />
				<Heading fontSize="24px">{title}</Heading>
			</Stack>
		</WrapItem>
	);
};

export { CategoryWrap };
