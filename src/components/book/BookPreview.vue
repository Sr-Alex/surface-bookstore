<template>
	<li class="bookPreview relative">
		<figure>
			<img :src="book.imgUrl" />
		</figure>
		<div class="absolute">
			<h3>
				{{ book.title.substring(0, 30) + "..." }}
			</h3>
			<h4>
				{{
					book.authors[0]
						? book.authors[0].substring(0, 15) + "..."
						: ""
				}}
			</h4>
		</div>
	</li>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import Book from "@/types/book";

interface props {
	book: Book;
}

defineProps<props>();
</script>

<style lang="scss" scoped>
.bookPreview {
	width: 12rem;
	aspect-ratio: 2/1;
	flex-shrink: 0;

	scroll-snap-align: center;

	box-shadow: 0.25rem 0.25rem 0.75rem #00000073;

	figure {
		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		width: 100%;
		min-height: 6rem;
		padding: 0.5rem;

		bottom: 0;

		background-color: var(--beige);
		color: var(--white);

		h3 {
			font-family: "Judson", serif;
			font-style: italic;
			font-weight: 400;

			color: var(--brown);
		}

		h4 {
			text-align: end;
		}
	}
}
</style>
