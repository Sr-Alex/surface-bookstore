import Book from "@/types/book";
import axios from "axios";

const apiUrl: string = process.env.VUE_APP_APIURL || "";

const api = axios.create({
	baseURL: apiUrl,
});

export async function getBooks(query = ""): Promise<Book[]> {
	try {
		const response = await api.get(`?languages=pt&${query}`);

		const data = await response.data;

		const books: Book[] = data.results.map((book: any) => {
			return {
				id: book.id,
				title: book.title,
				authors: book.authors?.map((a: any) => a.name),
				languages: book.languages,
				imgUrl: book.formats?.["image/jpeg"],
			};
		});

		return books;
	} catch (error) {
		console.error("Error fetching books:", error);

		return [];
	}
}

export function getNewestBooks(): Promise<Book[]> {
	return getBooks("sort=descending");
}
