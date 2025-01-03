<template>
	<div class="bookListContainer">
		<h3>
			<u>{{ category }}</u>
		</h3>
		<ul class="bookList">
			<BookPreview
				v-for="book in books"
				v-bind:key="book.id"
				:book="book" />
		</ul>
	</div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from "vue";
import Book from "@/types/book";

import BookPreview from "./BookPreview.vue";

defineProps({
	category: String,
	books: {
		type: Object as PropType<Book[]>,
		default: () => [] as Book[],
	},
});
</script>

<style lang="scss" scoped>
.bookListContainer {
	padding: 1rem 0.5rem;

	&:nth-child(even) {
		background-color: var(--off-white);
	}

	.bookList {
		display: flex;
		gap: 1rem;

		width: 100%;
		height: auto;
		margin: 1rem 0;

		list-style: none;

		overflow: auto hidden;
		scroll-behavior: smooth;
		scroll-snap-type: x mandatory;

		&::-webkit-scrollbar {
			display: none;
		}
	}
}
</style>
