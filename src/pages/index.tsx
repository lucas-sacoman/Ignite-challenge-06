import type { GetStaticProps, NextPage } from "next";
import { Header } from "../components/Header";

const Home: NextPage = () => {
	return <Header />;
};

export const getStaticProps: GetStaticProps = () => {
	return {
		props: {},
		revalidate: 60 * 60 * 24, // 1 day
	};
};

export default Home;