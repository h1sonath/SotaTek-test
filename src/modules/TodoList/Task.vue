<template>
	<div>
		<div
			class="pa-3 has-border d-flex flex-row align-center justify-space-between"
		>
			<div class="d-flex flex-row align-center">
				<v-checkbox v-model="checkedTasks" :value="task"></v-checkbox>
				<div>{{ task.taskName }}</div>
			</div>
			<div>
				<span class="pa-3"
					><v-btn color="#64B5F6" dark @click="showDetail = !showDetail"
						>Detail</v-btn
					>
				</span>
				<span class="pa-3"
					><v-btn dark color="#FF3D00" @click="removeCurrentTask(task)"
						>Remove</v-btn
					>
				</span>
			</div>
		</div>
		<div>
			<Form
				@add-or-update="data => updateTask(data)"
				class="has-border pa-6 task-form"
				v-if="showDetail"
				btnText="Update"
				:getDescription="task.description"
				:getTaskName="task.taskName"
				:getDueDate="task.dueDate"
				:getPriority="task.priority"
			/>
		</div>
	</div>
</template>
<script>
import Form from '@/modules/Form'
export default {
	components: {
		Form
	},
	props: {
		task: Object
	},
	data() {
		return {
			checkedTasks: [],
			showDetail: false,
			tasks: []
		}
	},
	methods: {
		removeCurrentTask(task) {
			this.tasks = JSON.parse(window.localStorage.getItem('to-do-list-tasks'))
      const filteredTasks = this.tasks.filter(v => {
        return v.id !== task.id
      })
			window.localStorage.setItem('to-do-list-tasks', JSON.stringify(filteredTasks))
      this.$emit('remove-task')
		},
		updateTask(task) {
			this.$emit('update-task', task)
		}
	}
}
</script>
<style scoped>
.task-form {
	border-top: 0px;
}
</style>
