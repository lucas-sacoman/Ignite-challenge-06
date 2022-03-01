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
						title: "Europa",
						description: "O continente mais antigo",
						image:
							"https://images.unsplash.com/photo-1542379950-b3fc716c16f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
					},
					{
						id: 2,
						title: "América do Norte",
						description: "O continente mais famoso do mundo",
						image:
							"https://images.unsplash.com/photo-1565259071176-54ba78e40f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
					},
					{
						id: 3,
						title: "América do Sul",
						description: "O continente com mais variedade climática",
						image:
							"https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
					},
					{
						id: 4,
						title: "Ásia",
						description: "O maior continente da Terra",
						image:
							"https://images.unsplash.com/photo-1522547902298-51566e4fb383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
					},
					{
						id: 5,
						title: "África",
						description: "O continente com mais variedade étnica e cultural",
						image:
							"https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80",
					},
					{
						id: 6,
						title: "Oceania",
						description: "O continente das ilhas",
						image:
							"https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80",
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
