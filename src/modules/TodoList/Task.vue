<template>
	<div>
		<div
			class="pa-3 has-border d-flex flex-row align-center justify-space-between"
		>
			<div class="d-flex flex-row align-center">
				<v-checkbox v-model="checkbox"></v-checkbox>
				<div>{{ task.taskName }}</div>
			</div>
			<div>
				<span class="pa-3"
					><v-btn color="#64B5F6" dark @click="showDetail = !showDetail"
						>Detail</v-btn
					>
				</span>
				<span class="pa-3"
					><v-btn dark color="#FF3D00" @click="showDetail = !showDetail"
						>Remove</v-btn
					>
				</span>
			</div>
		</div>
		<div>
			<Form
        @add-or-update="data => updateTask(data)"
				class="has-border pa-6"
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
			checkbox: true,
			showDetail: false
		}
	},
  methods: {
    updateTask(task){
      this.$emit('update-task', task)
    }
  }
}
</script>
