<template>
	<div class="container">
		<v-row>
			<v-col class="has-border" cols="12" sm="4">
				<CreateTask @task-added="getTask" :tasks="tasks" />
			</v-col>
			<v-col class="has-border create-task" cols="12" sm="8">
				<TodoList :tasks="tasks" />
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
  created(){
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
		}
	}
}
</script>
<style scoped>
.create-task {
	border-left: 0px;
}
</style>
