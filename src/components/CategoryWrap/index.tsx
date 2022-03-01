import { Heading, Img, Stack, WrapItem } from "@chakra-ui/react";
import { CategoryWrapData } from "../../types";

const CategoryWrap = ({ title, image }: CategoryWrapData) => {
	return (
		<WrapItem
			cursor="pointer"
			rounded="md"
			_hover={{ transition: ".3s", boxShadow: "xl" }}
		>
			<Stack
				w={["160px", "200px"]}
				h={["160px", "200px"]}
				direction="column"
				align="center"
				justify="center"
				spacing="8"
			>
				<Img src={image} w={["60px", "80px"]} h={["65px", "85px"]} />
				<Heading fontSize={["20px", "24px"]}>{title}</Heading>
			</Stack>
		</WrapItem>
	);
};

export { CategoryWrap };
