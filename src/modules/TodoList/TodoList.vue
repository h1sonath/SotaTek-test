<template>
	<div class="pa-3">
		<div class="pb-9">
			<Header header="To do list" />
		</div>
		<div class="pb-3" v-for="(task, index) in taskList" :key="index">
			<Task :task="task" />
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
		updateTask() {
			console.log('123123')
		}
	},
  watch: {
    tasks: {
      handler(val){
        if(val){
          this.taskList = val
        }
      }, immediate: true
    }
  }
}
</script>
