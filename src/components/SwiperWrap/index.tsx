import {
	Flex,
	Heading,
	Stack,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ContinentData } from "../../types";

const SwiperWrap = () => {
	const [continents, setContinents] = useState<ContinentData[]>([]);
	const isWideVersion = useBreakpointValue({ base: false, lg: true });

	useEffect(() => {
		fetch("/api/continents")
			.then((res) => res.json())
			.then((data) => setContinents(data))
			.catch((err) => alert(err));
	}, []);

	return (
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
							boxShadow: "inset 0 0 5000px 70px rgba(0, 0, 0, 1)",
						}}
					>
						<Stack spacing="4">
							<Heading
								fontWeight="700"
								fontSize="48px"
								color={["white", "gray.900"]}
							>
								{continent.title}
							</Heading>
							<Text
								fontWeight="600"
								fontSize="24px"
								color={["white", "gray.900"]}
							>
								{continent.description}
							</Text>
						</Stack>
					</SwiperSlide>
				))}
			</Swiper>
		</Flex>
	);
};

export { SwiperWrap };