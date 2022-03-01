import { Flex, Heading, Img, Stack, Text } from "@chakra-ui/react";

const HomeBanner = () => {
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
				justify="space-between"
				align="center"
				maxW="7xl"
			>
				<Stack spacing="6">
					<Heading color="white" fontWeight="500" lineHeight="52px">
						5 Continentes, <br />
						infinitas possibilidades
					</Heading>

					<Text color="white" fontWeight="400">
						Chegou a hora de tirar do papel a viagem que você <br />
						sempre sonhou.
					</Text>
				</Stack>

				<Img src="/assets/airplane.svg" w="417" h="270" float="right" mt="32" />
			</Flex>
		</Flex>
	);
};

export { HomeBanner };
