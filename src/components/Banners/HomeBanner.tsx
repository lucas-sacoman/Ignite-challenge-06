import {
	Flex,
	Heading,
	Img,
	Stack,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";

const HomeBanner = () => {
	const isWideVersion = useBreakpointValue({ base: false, lg: true });

	return (
		<Flex
			bgImage="url('/images/background2.png')"
			bgPosition="center"
			bgRepeat="no-repeat"
			bgSize="cover"
		>
			<Flex
				direction="row"
				w="full"
				h="335px"
				mx="auto"
				justify={["center", "center", "space-between"]}
				align="center"
				maxW="8xl"
				px="10"
			>
				<Stack spacing="6">
					<Heading
						color="white"
						fontWeight="500"
						lineHeight={["40px", "52px"]}
						fontSize={["20px", "32px"]}
					>
						5 Continentes, <br />
						infinitas possibilidades
					</Heading>

					<Text color="white" fontWeight="400">
						Chegou a hora de tirar do papel a viagem que você{" "}
						{isWideVersion && <br />}
						sempre sonhou.
					</Text>
				</Stack>

				{isWideVersion && (
					<Img
						src="/assets/airplane.svg"
						w="417"
						h="270"
						float="right"
						mt="32"
					/>
				)}
			</Flex>
		</Flex>
	);
};

export { HomeBanner };
