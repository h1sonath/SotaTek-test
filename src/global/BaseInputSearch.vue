<template>
	<div class="d-inline-flex">
		<BaseInput
			style="width: 360px"
			prepend-inner-icon="mdi-magnify"
			v-model="textSearch"
			:label="label"
			:placeholder="placeholder"
			@keyup.native.enter="$emit('onSearch', textSearch)"
		></BaseInput>
	</div>
</template>
<script>
export default {
	props: {
		value: String,
		label: String,
		placeholder: String,
	},
	data() {
		return {
			textSearch: ''
		}
	}
}
</script>
