<template>
	<div class="pa-3">
		<div class="pb-9">
			<Header header="New Task" />
		</div>
		<div>
			<Form btnText="Add" @add-or-update="data => addTask(data)" />
		</div>
	</div>
</template>
<script>
// import {mapActions} from 'vuex'
import Header from '@/modules/TheHeader'
import Form from '@/modules/Form'
export default {
	components: {
		Header,
		Form
	},
	props: {
		tasks: Array
	},
	methods: {
		// ...mapActions({
		// 	createTask: 'task/createTask'
		// }),
		addTask(data) {
			this.taskList.push(data)
			window.localStorage.setItem(
				'to-do-list-tasks',
				JSON.stringify(this.taskList)
			)
			this.$emit('task-added')
		}
	},
	watch: {
		tasks: {
			handler(val) {
				if (val) {
					this.taskList = val
				}
        else {
          this.taskList = []
        }
			},
			immediate: true
		}
	}
}
</script>
