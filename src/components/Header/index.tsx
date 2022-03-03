import { Button, Flex, Img } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Header = () => {
	const { asPath, push } = useRouter();

	return (
		<Flex w="max-content" mx="auto" h="100px" align="center" justify="center">
			{asPath.startsWith("/continent") && (
				<Button
					bg="transparent"
					position="absolute"
					left="0"
					ml="32"
					onClick={() => push("/")}
				>
					<Img src="assets/back-arrow.svg" w="8px" h="16px" />
				</Button>
			)}

			<Img
				src="assets/logo.svg"
				w="184px"
				h="46px"
				cursor="pointer"
				onClick={() => push("/")}
			/>
		</Flex>
	);
};

export { Header };
