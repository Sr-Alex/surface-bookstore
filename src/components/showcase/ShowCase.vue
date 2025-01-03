<template>
	<section class="relative">
		<ul id="showcase">
			<ShowCasePreview
				v-for="book in mostPopularBooks"
				v-bind:key="book.id"
				:book="book" />
		</ul>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Book from "@/types/book";
import { getBooks } from "@/services/api";
import ShowCasePreview from "./ShowCasePreview.vue";

export default defineComponent({
	components: {
		ShowCasePreview,
	},
	data(): { mostPopularBooks: Book[] } {
		return {
			mostPopularBooks: [],
		};
	},
	methods: {
		getPopularBooks() {
			getBooks().then((data) => {
				this.mostPopularBooks = data.slice(0, 3);
			});
		},
	},
	mounted() {
		this.getPopularBooks();
	},
});
</script>

<style lang="scss">
#showcase {
	display: flex;

	width: 100%;
	height: 60dvh;

	overflow-x: auto;
	scroll-behavior: smooth;
	scroll-snap-type: x mandatory;

	&::-webkit-scrollbar {
		display: none;
	}
}
</style>
