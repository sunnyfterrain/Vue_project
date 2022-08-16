<template>
	<form @submit="submitForm">
		<div>
			<label for="username">id: </label>
			<input type="text" id="username" v-model="username" />
		</div>
		<div>
			<label for="password">pw: </label>
			<input type="password" id="password" v-model="password" />
		</div>
		<button type="submit">로그인</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			username: '',
			password: '',
		};
	},
	methods: {
		submitForm() {},
	},
};
</script>

<style></style>
