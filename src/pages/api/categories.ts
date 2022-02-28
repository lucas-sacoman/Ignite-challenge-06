/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { method } = req;

		switch (method) {
			case "GET":
				res.status(200).json([
					{ id: 1, title: "vida noturna", image: "/assets/cocktail.svg" },
					{ id: 2, title: "praia", image: "/assets/beach.svg" },
					{ id: 3, title: "moderno", image: "/assets/building.svg" },
					{ id: 4, title: "clássico", image: "/assets/museum.svg" },
					{ id: 5, title: "e mais...", image: "/assets/earth.svg" },
				]);
				break;
			default:
				res.setHeader("Allow", ["GET", "PUT"]);
				res.status(405).end(`Method ${method} is not allowed`);
		}
	} catch (err) {
		res
			.status(500)
			.json({ statusCode: 500, message: "Erro ao buscar categorias" });
	}
};
