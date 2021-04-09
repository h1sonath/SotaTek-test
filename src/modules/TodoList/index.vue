<template>
	<div class="container">
		<v-row>
			<v-col class="has-border" cols="12" sm="4">
				<CreateTask @task-added="getTask" :tasks="tasks" />
			</v-col>
			<v-col
				class="has-border list-task d-flex flex-column justify-space-between"
				cols="12"
				sm="8"
			>
				<TodoList :tasks="tasks" @remove-task="getTask"/>
			</v-col>
		</v-row>
	</div>
</template>
<script>
import TodoList from '@/modules/TodoList/TodoList'
import CreateTask from '@/modules/TodoList/CreateTask'
export default {
	components: {
		TodoList,
		CreateTask
	},
	created() {
		this.getTask()
	},
	data() {
		return {
			tasks: []
		}
	},
	methods: {
		getTask() {
			this.tasks = JSON.parse(window.localStorage.getItem('to-do-list-tasks'))
			if (this.tasks && this.tasks.length > 0) {
				this.tasks.sort(function(a, b) {
					return Date.parse(b.dueDate) - Date.parse(a.dueDate)
				})
			}
		}
	}
}
</script>
<style scoped>
@media screen and (max-width: 599px) {
	.list-task {
		border-top: 0px;
	}
}
.list-task {
	border-left: 0px;
}
.container {
	max-width: 1140px;
}
</style>
