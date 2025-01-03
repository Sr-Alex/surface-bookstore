<template>
	<header id="headerContainer">
		<img src="@/assets/icons/book.svg" alt="Biblioteca Digital" />
		<h3>Biblioteca Digital</h3>
	</header>
</template>

<script></script>

<style lang="scss">
#headerContainer {
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 100%;
	margin: 1rem 0 0.5rem 0;
	gap: 0.5rem;

	font-family: "Judson";
	font-weight: 400;

	background-color: var(--white);

	img {
		width: 3rem;
		aspect-ratio: 1/1;
	}
}
</style>
