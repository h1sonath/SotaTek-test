<template>
	<div class="pa-3 ">
		<div>
			<div class="pb-9">
				<Header header="To do list" />
			</div>
			<div class="pb-3" v-for="(task, index) in taskList" :key="index">
				<Task
					@update-task="data => updateTask(data)"
					:task="task"
					@remove-task="removeTask"
				/>
			</div>
		</div>
	</div>
</template>
<script>
import Task from '@/modules/TodoList/Task'
import Header from '@/modules/TheHeader'
// import { mapGetters } from 'vuex'
export default {
	components: {
		Header,
		Task
	},
	props: {
		tasks: Array
	},
	data() {
		return {
			taskList: []
		}
	},
	methods: {
		removeTask() {
			this.$emit('remove-task')
		},
		updateTask(data) {
			console.log(data)
			console.log(
				this.taskList.find(v => {
					return v.id === data.id
				})
			)
		}
	},
	watch: {
		tasks: {
			handler(val) {
				if (val) {
					this.taskList = val
				}
			},
			immediate: true
		}
	}
}
</script>
<style scoped>
/* .to-do-list {
	min-height: calc(100vh - 80px);
}
.footer {
	height: 50px;
} */
</style>
