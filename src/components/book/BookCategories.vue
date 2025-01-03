<template>
	<section id="categories">
		<div id="categoriesText">
			<h3>Separamos livros especiais para você!</h3>
		</div>
		<BookList :books="newestBooks" category="Mais recentes" />
		<BookList :books="data" category="Mais antigos" />
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { getBooks, getNewestBooks } from "@/services/api";
import Book from "@/types/book";

import BookList from "./BookList.vue";

export default defineComponent({
	components: { BookList },
	data(): { newestBooks: Book[]; data: Book[] } {
		return {
			newestBooks: [],
			data: [],
		};
	},
	methods: {
		getBooksFromApi() {
			Promise.all([getBooks(), getNewestBooks(), getBooks()]).then(
				(val) => {
					this.newestBooks = val[1];
					this.data = val[2];
				}
			);
		},
	},
	mounted() {
		this.getBooksFromApi();
	},
});
</script>

<style lang="scss">
#categories {
	width: 100%;
	height: auto;

	#categoriesText {
		width: 100%;
		height: 4rem;

		padding: 1rem 0.5rem;
	}
}
</style>
