const namespaced = true

const state = {
	count: 0,
	tasks: [],
	task: {}
}

const actions = {
	async createTask({commit}, data) {
    console.log('create', data)
		commit('addTask', data)
		return data
	},
	async updateTask({commit}, {...data}) {
		commit('setTask', data)
		return data
	},
	async removeTask({commit}, item) {
		commit('removeTask', item.id)
	}
}

const mutations = {
	addTask(state, task) {
		state.tasks.push(task)
    console.log(state.tasks)
	},
	setTask(state, task) {
		return (state.task = task)
	},
	setTasks(state, tasks) {
		return (state.tasks = tasks)
	},
	removeTask(state, id) {
		state.tasks = state.tasks.filter(task => task.id !== id)
		state.task = {}
	}
}

const getters = {
	getTasks: state => {
		return state.tasks
	},
	getCount: state => {
		return state.count
	},
	getTask: state => {
		return state.task
	}
}

export default {
	namespaced,
	state,
	actions,
	mutations,
	getters
}
