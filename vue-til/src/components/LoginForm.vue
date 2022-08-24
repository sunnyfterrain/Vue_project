<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input type="text" id="username" v-model="username" />
		</div>
		<div>
			<label for="password">pw: </label>
			<input type="password" id="password" v-model="password" />
		</div>
		<button type="submit">로그인</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { loginUser } from '@/api/index';

export default {
	data() {
		return {
			username: '',
			password: '',
			logMessage: '',
		};
	},
	methods: {
		async submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
			};
			const { data } = await loginUser(userData);
			this.logMessage = data.user.username;
			this.initForm();
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style></style>
