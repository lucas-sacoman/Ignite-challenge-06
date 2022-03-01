import { Box, Flex, Heading, Stack, Text, Wrap } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomeBanner } from "../components/Banners/HomeBanner";
import { CategoryWrap } from "../components/CategoryWrap";
import { Header } from "../components/Header";
import { CategoryWrapData, ContinentData } from "../types/interfaces";

const Home: NextPage = () => {
	const [categories, setCategories] = useState<CategoryWrapData[]>([]);
	const [continents, setContinents] = useState<ContinentData[]>([]);

	useEffect(() => {
		fetch("/api/categories")
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((err) => alert(err));

		fetch("/api/continents")
			.then((res) => res.json())
			.then((data) => setContinents(data))
			.catch((err) => alert(err));
	}, []);

	return (
		<>
			<Header />

			<HomeBanner />

			<Box py="24" px="10">
				<Wrap spacing="8" justify="center">
					{categories.map((category) => (
						<CategoryWrap
							key={category.id}
							title={category.title}
							image={category.image}
						/>
					))}
				</Wrap>
			</Box>

			<Flex justify="center">
				<hr
					style={{
						width: "90px",
						height: "2px",
						backgroundColor: "#47585B",
					}}
				/>
			</Flex>

			<Flex direction="column" justify="center" textAlign="center" mt="20">
				<Stack>
					<Heading fontWeight="medium" lineHeight="52px">
						Vamos nessa? <br />
						Então escolha seu continente
					</Heading>
				</Stack>
			</Flex>

			<Flex h="450px" maxW="7xl" mx="auto" my="14">
				<Swiper
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					modules={[Autoplay, Pagination]}
					className="mySwiper"
				>
					{continents.map((continent) => (
						<SwiperSlide
							key={continent.id}
							style={{
								backgroundImage: `url('${continent.image}')`,
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								color: "white",
								display: "flex",
								backdropFilter: "blur(2px)",
								WebkitBackdropFilter: "blur(2px)",
								flexDirection: "column",
								textAlign: "center",
								justifyContent: "center",
								boxShadow: "inset 0 0 5000px 20px rgba(0, 0, 0, 1)",
							}}
						>
							<Stack spacing="4">
								<Heading fontWeight="700" fontSize="48px" color="gray.900">
									{continent.title}
								</Heading>
								<Text fontWeight="600" fontSize="24px" color="gray.900">
									{continent.description}
								</Text>
							</Stack>
						</SwiperSlide>
					))}
				</Swiper>
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

export default Home;
