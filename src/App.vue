<template>
	<HeaderContainer />
	<ShowCase />
	<BookCategories />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import HeaderContainer from "./components/HeaderContainer.vue";
import ShowCase from "./components/showcase/ShowCase.vue";
import BookCategories from "./components/book/BookCategories.vue";

@Options({
	components: {
		HeaderContainer,
		ShowCase,
		BookCategories,
	},
	
})

export default class App extends Vue {}
</script>

<style lang="scss">
#app {
	font-family: sans-serif;
}
</style>
