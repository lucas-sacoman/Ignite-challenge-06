import {
	Flex,
	Heading,
	HStack,
	Img,
	Stack,
	Text,
	Tooltip,
	Wrap,
} from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { Params } from "next/dist/server/router";
import { useEffect, useState } from "react";
import { CityCard } from "../../components/CityCard";
import { Header } from "../../components/Header";
import { CityData } from "../../types";

const ContinentPage = (params: Params) => {
	const [cities, setCities] = useState<CityData[]>([]);

	useEffect(() => {
		const getCities = async () => {
			await fetch("/api/cities")
				.then((response) => response.json())
				.then((data) => setCities(data));
		};

		getCities();
	}, []);

	return (
		<>
			<Header />

			<Flex
				bgImage="url('/images/europe.png')"
				bgPosition="center"
				bgRepeat="no-repeat"
				bgSize="cover"
				w="full"
				h={["200px", "500px"]}
				px={["50px", "100px"]}
				py="16"
				align={["center", "flex-end"]}
			>
				<Heading
					textAlign="center"
					color="white"
					fontSize={["40px", "48px"]}
					fontWeight="semibold"
					textTransform={"capitalize"}
				>
					{params.params.name}
				</Heading>
			</Flex>

			<Flex px={["50px", "100px"]} w="full" direction="column">
				<Stack
					direction={["column", "column", "column", "row"]}
					spacing="12"
					my="12"
					align="center"
				>
					<Text
						maxW="lg"
						fontSize="24px"
						textAlign={["left", "left", "left", "justify"]}
					>
						A Europa é, por convenção, um dos seis continentes do mundo.
						Compreendendo a península ocidental da Eurásia, a Europa geralmente
						divide-se da Ásia a leste pela divisória de águas dos montes Urais,
						o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
					</Text>

					<HStack
						justify={["center", "center", "center", "flex-end"]}
						align="flex-start"
						spacing="10"
						w="full"
					>
						<Flex direction="column" align="center" textAlign="center">
							<Heading color="yellow.600" fontSize={["40px", "48px"]}>
								50
							</Heading>
							<Text fontWeight="semibold" fontSize={["18px", "24px"]}>
								países
							</Text>
						</Flex>

						<Flex direction="column" align="center" textAlign="center">
							<Heading color="yellow.600" fontSize={["40px", "48px"]}>
								60
							</Heading>
							<Text fontWeight="semibold" fontSize={["18px", "24px"]}>
								linguas
							</Text>
						</Flex>

						<Flex direction="column" align="center" textAlign="center">
							<Heading color="yellow.600" fontSize={["40px", "48px"]}>
								27
							</Heading>
							<Text
								fontWeight="semibold"
								fontSize={["18px", "24px"]}
								display="flex"
								align="center"
							>
								cidades +100{" "}
								<Tooltip
									hasArrow
									label="Variadas cidades"
									bg="gray.300"
									color="black"
								>
									<Img src="/assets/info.svg" ml="2" />
								</Tooltip>
							</Text>
						</Flex>
					</HStack>
				</Stack>

				<Heading>Cidades 100+</Heading>
				<Wrap py="8">
					{cities.map((city) => (
						<CityCard
							key={city.id}
							city={city.city}
							country={city.country}
							image={city.image}
							background={city.background}
						/>
					))}
				</Wrap>
			</Flex>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: [],
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = (ctx) => {
	const { params } = ctx;

	return {
		props: { params },
		revalidate: 60 * 60 * 24, // 1 day
	};
};

export default ContinentPage;
