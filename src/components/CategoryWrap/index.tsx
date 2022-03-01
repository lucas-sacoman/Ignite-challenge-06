import { Heading, Img, Stack, WrapItem } from "@chakra-ui/react";
import { CategoryWrapData } from "../../types/interfaces";

const CategoryWrap = ({ title, image }: CategoryWrapData) => {
	return (
		<WrapItem
			cursor="pointer"
			rounded="md"
			_hover={{ transition: ".3s", boxShadow: "xl" }}
		>
			<Stack
				w="200px"
				h="200px"
				direction="column"
				align="center"
				justify="center"
				spacing="8"
			>
				<Img src={image} w="80px" h="85px" />
				<Heading fontSize="24px">{title}</Heading>
			</Stack>
		</WrapItem>
	);
};

export { CategoryWrap };
