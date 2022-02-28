import { Box, Wrap } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import { HomeBanner } from "../components/Banners/HomeBanner";
import { CategoryWrap } from "../components/CategoryWrap";
import { Header } from "../components/Header";
import { CategoryWrapData } from "../types/interfaces";

const categories: CategoryWrapData[] = [
	{ id: 1, title: "vida noturna", image: "/assets/cocktail.svg" },
	{ id: 2, title: "praia", image: "/assets/beach.svg" },
	{ id: 3, title: "moderno", image: "/assets/building.svg" },
	{ id: 4, title: "clássico", image: "/assets/museum.svg" },
	{ id: 5, title: "e mais...", image: "/assets/earth.svg" },
];

const Home: NextPage = () => {
	return (
		<>
			<Header />

			<HomeBanner />

			<Box py="32" px="20">
				<Wrap spacing="32" justify="center">
					{categories.map((category) => (
						<CategoryWrap
							key={category.id}
							title={category.title}
							image={category.image}
						/>
					))}
				</Wrap>
			</Box>
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
