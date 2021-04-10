<template>
	<div class="pa-3 ">
		<div>
			<div class="pb-9">
				<Header header="To do list" />
			</div>
			<v-text-field
				outlined
				v-model="taskName"
				placeholder="Search ..."
				@keyup.native="searchName"
			></v-text-field>
			<div class="pb-3" v-for="(task, index) in taskList" :key="index">
				<Task
					v-show="task.taskName.includes(taskName) || taskName === ''"
					ref="checkedtasks"
					@show-bulk-action="data => addCheckedBox(data)"
					@remove-checked-box="data => removeCheckedbox(data)"
					@update-task="data => updateTask(data)"
					:task="task"
					@remove-task="removeTask"
				/>
			</div>
		</div>
		<div
			v-if="checkedBoxes && checkedBoxes.length"
			class="pa-3 has-border d-flex flex-row align-center justify-space-between grey"
		>
			<div>
				Bulk Actions:
			</div>
			<div>
				<span class="pa-3"
					><v-btn width="100px" color="#64B5F6" dark>Done</v-btn>
				</span>
				<span class="pa-3"
					><v-btn
						width="100px"
						dark
						color="#FF3D00"
						@click="removeAllCheckedTask"
						>Remove</v-btn
					>
				</span>
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
			taskList: [],
			updatingTasks: {},
			taskName: '',
			checkedBoxes: []
		}
	},
	methods: {
		addCheckedBox(data) {
			this.checkedBoxes.push(data)
		},
		removeCheckedbox(data) {
			this.checkedBoxes = this.checkedBoxes.filter(v => {
				return v.id !== data.id
			})
		},
		removeAllCheckedTask() {
			for (let i = 0; i < this.taskList.length; i++) {
				this.$refs.checkedtasks[i].removeCheckedTask()
			}
			this.checkedBoxes = []
		},
		searchName() {
			this.taskList.find(task => {
				return task.taskName.includes(this.taskName)
			})
		},
		removeTask() {
			this.$emit('remove-task')
		},
		updateTask(data) {
			try {
				this.updatingTasks = this.taskList.filter(v => {
					return v.id !== data.id
				})
				this.updatingTasks.push(data)
				window.localStorage.setItem(
					'to-do-list-tasks',
					JSON.stringify(this.updatingTasks)
				)
        alert('Updated')
			} catch (error) {
        alert(error)
      }
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
