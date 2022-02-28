import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	colors: {
		gray: {
			600: "#47585B",
		},
	},
	fonts: {
		heading: "Poppins",
		body: "Poppins",
	},
	styles: {
		global: {
			body: {
				bg: "white",
				color: "gray.600",
			},
		},
	},
});
