/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { method } = req;

		switch (method) {
			case "GET":
				res.status(200).json([
					{
						id: 1,
						city: "Londres",
						country: "Reino Unido",
						image: "/assets/europe/england.svg",
						background: "/images/londres.png",
					},
					{
						id: 2,
						city: "Paris",
						country: "França",
						image: "/assets/europe/france.svg",
						background: "/images/paris.png",
					},
					{
						id: 3,
						city: "Roma",
						country: "Itália",
						image: "/assets/europe/italy.svg",
						background: "/images/roma.png",
					},
					{
						id: 4,
						city: "Praga",
						country: "República Tcheca",
						image: "/assets/europe/tcheca.svg",
						background: "/images/praga.png",
					},
					{
						id: 5,
						city: "Amsterdã",
						country: "Holanda",
						image: "/assets/europe/netherland.svg",
						background: "/images/amsterdã.png",
					},
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
