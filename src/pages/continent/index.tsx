import {
	Box,
	Flex,
	Heading,
	HStack,
	Img,
	Text,
	useColorModeValue,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import { Header } from "../../components/Header";

const ContinentPage: NextPage = () => {
	return (
		<>
			<Header />

			<Flex
				bgImage="url('/images/europe.png')"
				bgPosition="center"
				bgRepeat="no-repeat"
				bgSize="cover"
				w="full"
				h="500px"
				px="32"
				py="16"
				align="flex-end"
			>
				<Heading color="white" fontSize="48px" fontWeight="semibold">
					Europa
				</Heading>
			</Flex>

			<Flex px="130px" w="full" direction="column">
				<HStack spacing="12" my="12">
					<Text maxW="lg" fontSize="24px" textAlign="justify">
						A Europa é, por convenção, um dos seis continentes do mundo.
						Compreendendo a península ocidental da Eurásia, a Europa geralmente
						divide-se da Ásia a leste pela divisória de águas dos montes Urais,
						o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
					</Text>

					<HStack justify="flex-end" align="flex-start" spacing="10" w="full">
						<Flex direction="column" align="center" textAlign="center">
							<Heading color="yellow.600" fontSize="48px">
								50
							</Heading>
							<Text fontWeight="semibold" fontSize="24px">
								países
							</Text>
						</Flex>

						<Flex direction="column" align="center" textAlign="center">
							<Heading color="yellow.600" fontSize="48px">
								60
							</Heading>
							<Text fontWeight="semibold" fontSize="24px">
								linguas
							</Text>
						</Flex>

						<Flex direction="column" align="center" textAlign="center">
							<Heading color="yellow.600" fontSize="48px">
								27
							</Heading>
							<Text
								fontWeight="semibold"
								fontSize="24px"
								display="flex"
								align="center"
							>
								cidades +100 <Img src="/assets/info.svg" ml="2" />
							</Text>
						</Flex>
					</HStack>
				</HStack>

				<Heading>Cidades 100+</Heading>
				<Wrap py="8">
					<WrapItem>
						<Box
							bg="white"
							maxW="sm"
							borderWidth="1px"
							borderColor="yellow.600"
							rounded="md"
							shadow="lg"
							position="relative"
						>
							<Img src="/images/londres.png" />

							<Box p="6">
								<Flex
									mt="1"
									justifyContent="space-between"
									alignContent="center"
								>
									<Box
										fontSize="2xl"
										fontWeight="semibold"
										as="h4"
										lineHeight="tight"
										isTruncated
									></Box>
								</Flex>

								<Flex justifyContent="space-between" alignContent="center">
									<Box
										fontSize="2xl"
										color={useColorModeValue("gray.800", "white")}
									>
										<Box as="span" color={"gray.600"} fontSize="lg">
											£
										</Box>
										R$100
									</Box>
								</Flex>
							</Box>
						</Box>
					</WrapItem>
				</Wrap>
			</Flex>
		</>
	);
};

export const getStaticProps: GetStaticProps = () => {
	return {
		props: {},
		revalidate: 60 * 60 * 24, // 1 day
	};
};

export default ContinentPage;
