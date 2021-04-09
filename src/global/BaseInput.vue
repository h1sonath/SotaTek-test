<template>
	<v-text-field
		v-bind="$attrs"
		class="body-2"
		outlined
		dense
		:prepend-icon="preventIcon"
		:prepend-inner-icon="prependInnerIcon"
		:label="label"
		:rules="rules"
		:type="type"
		v-model="data"
		:placeholder="placeholder"
		:disabled="disabled"
		:hint="hint"
		:background-color="background"
	></v-text-field>
</template>
<script>
export default {
	props: {
		disabled: {
			type: Boolean,
			default: false,
		},
		background: {
			type: String,
			default: '',
		},
		rules: {
			type: Array,
			default: () => [],
		},
		label: {
			type: String,
			default: '',
		},
		type: {
			type: String,
			default: 'text',
		},
		placeholder: {
			type: String,
			default: '',
		},
		value: {
			type: [String, Number],
			default: '',
		},
		hint: {
			type: String,
			default: '',
		},
		preventIcon: {
			type: String,
			default: undefined,
		},
		prependInnerIcon: {
			type: String,
			default: undefined,
		},
	},
	data() {
		return {
			data: '',
		}
	},
	mounted() {
		this.data = this.value
	},
	watch: {
		data() {
			this.$emit('input', this.data)
		},
		value() {
			this.data = this.value
		},
	},
}
</script>
<style lang="scss" scoped>
::v-deep .v-text-field__slot {
	max-width: 100%;
}
</style>
