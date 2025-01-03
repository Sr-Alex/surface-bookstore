<template>
	<li class="case-preview">
		<figure>
			<img class="img-full cover" :src="book.imgUrl" :alt="book.title" />
		</figure>
		<div class="absolute">
			<p>
				<u>{{ book.authors[0] || "" }}</u>
			</p>
			<h2 class="font-judson">
				<u>{{ book.title.substring(0, 50) + "..." }}</u>
			</h2>
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

<style lang="scss">
.case-preview {
	width: 100%;
	aspect-ratio: 1/2;
	flex-shrink: 0;

	position: relative;

	scroll-snap-align: center;

	figure {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	div {
		width: 100%;
		min-height: 8rem;

		padding: 2rem 1rem 1rem 1rem;

		position: absolute;
		bottom: 0;

		background: linear-gradient(0deg, var(--off-white) 64%, transparent);

		h2 {
			margin-top: 0.5rem;
		}
	}
}
</style>
