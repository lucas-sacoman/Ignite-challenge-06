import { Box, Wrap } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { HomeBanner } from "../components/Banners/HomeBanner";
import { CategoryWrap } from "../components/CategoryWrap";
import { Header } from "../components/Header";
import { CategoryWrapData } from "../types/interfaces";

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
