import { Box, Flex, Heading, Stack, Wrap } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HomeBanner } from "../components/Banners/HomeBanner";
import { CategoryWrap } from "../components/CategoryWrap";
import { Header } from "../components/Header";
import { SwiperWrap } from "../components/SwiperWrap";
import { CategoryWrapData } from "../types";

const Home: NextPage = () => {
	const [categories, setCategories] = useState<CategoryWrapData[]>([]);

	useEffect(() => {
		fetch("/api/categories")
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((err) => alert(err));
	}, []);

	return (
		<>
			<Header />

			<HomeBanner />

			<Box py="24" px={["0", "12"]}>
				<Wrap spacing={["0", "12"]} justify="center">
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
					<Heading fontWeight="medium" lineHeight="52px" px="4">
						Vamos nessa? <br />
						Então escolha seu continente
					</Heading>
				</Stack>
			</Flex>

			<SwiperWrap />
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
