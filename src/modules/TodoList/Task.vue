<template>
	<div>
		<div
			class="pa-3 has-border d-flex flex-row align-center justify-space-between"
		>
			<div class="d-flex flex-row align-center">
				<v-checkbox v-model="checked" @click="changeCheckBox"></v-checkbox>
				<div>{{ task.taskName }}</div>
			</div>
			<div class='d-flex justify-center'>
				<span class="pa-3"
					><v-btn
						width="100px"
						color="#64B5F6"
						dark
						@click="showDetail = !showDetail"
						>Detail</v-btn
					>
				</span>
				<span class="pa-3"
					><v-btn
						width="100px"
						dark
						color="#FF3D00"
						@click="removeCurrentTask(task)"
						>Remove</v-btn
					>
				</span>
			</div>
		</div>
		<div>
			<Form
				@update="data => updateTask(data)"
				class="has-border pa-6 task-form"
				v-if="showDetail"
				btnText="Update"
				:getDescription="task.description"
				:getTaskName="task.taskName"
				:getDueDate="task.dueDate"
				:getID="task.id"
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
	created() {
		window.localStorage.removeItem('checked-tasks')
	},
	data() {
		return {
			checked: false,
			showDetail: false,
			tasks: []
		}
	},
	methods: {
		changeCheckBox() {
			if (this.checked === true) {
				this.$emit('show-bulk-action', this.task)
			} else {
				this.$emit('remove-checked-box', this.task)
			}
		},
		removeCheckedTask() {
			if (this.checked === true) {
				this.tasks = JSON.parse(window.localStorage.getItem('to-do-list-tasks'))
				const filteredTasks = this.tasks.filter(v => {
					return v.id !== this.task.id
				})
				window.localStorage.setItem(
					'to-do-list-tasks',
					JSON.stringify(filteredTasks)
				)
				this.checked = false
				this.$emit('remove-task')
			}
		},
		removeCurrentTask(task) {
			this.tasks = JSON.parse(window.localStorage.getItem('to-do-list-tasks'))
			const filteredTasks = this.tasks.filter(v => {
				return v.id !== task.id
			})
			window.localStorage.setItem(
				'to-do-list-tasks',
				JSON.stringify(filteredTasks)
			)

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
