<template>
	<div>
		<v-text-field
			v-if="btnText === `Add`"
			outlined
			v-model="taskName"
			placeholder="Add new task ..."
		></v-text-field>
		<v-text-field
			v-if="btnText === `Update`"
			outlined
			v-model="taskName"
		></v-text-field>
		<div>
			<div class="font-weight-bold ">
				Description
			</div>
			<v-textarea v-model="description" outlined></v-textarea>
		</div>
		<v-row>
			<v-col cols="12" sm="6">
				<div class="font-weight-bold">
					Due date
				</div>
				<v-menu
					ref="menu"
					v-model="menu"
					:close-on-content-click="false"
					:return-value.sync="dueDate"
					transition="scale-transition"
					offset-y
					min-width="auto"
				>
					<template v-slot:activator="{on, attrs}">
						<v-text-field
							outlined
							v-model="dueDate"
							append-icon="mdi-calendar"
							v-bind="attrs"
							v-on="on"
						></v-text-field>
					</template>
					<v-date-picker
						v-model="dueDate"
						no-title
						scrollable
						:allowed-dates="getAllowedDates"
					>
						<v-spacer></v-spacer>
						<v-btn text color="primary" @click="menu = false">
							Cancel
						</v-btn>
						<v-btn text color="primary" @click="$refs.menu.save(dueDate)">
							OK
						</v-btn>
					</v-date-picker>
				</v-menu>
			</v-col>
			<v-col cols="12" sm="6">
				<div class="font-weight-bold">
					Priority
				</div>
				<v-autocomplete
					no-data-text="No options available"
					v-model="priority"
					:items="priorityItems"
					dense
					outlined
					height="56px"
				></v-autocomplete>
			</v-col>
		</v-row>
		<div>
			<v-btn @click="addOrUpdate()" dark color="green" width="100%">
				{{ btnText }}
			</v-btn>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		btnText: String,
		getID: String,
		getDescription: String,
		getTaskName: String,
		getDueDate: String,
		getPriority: String
	},
	data: () => ({
		taskName: '',
		date: new Date().toISOString().substr(0, 10),
		dueDate: new Date().toISOString().substr(0, 10),
		menu: false,
		priorityItems: ['Low', 'Normal', 'High'],
		priority: 'Normal',
		description: '',
		taskID: ''
		// search: '',
	}),
	computed: {
		taskData() {
			return {
				id: this.taskID,
				taskName: this.taskName,
				description: this.description,
				dueDate: this.dueDate,
				priority: this.priority
			}
		}
	},
	methods: {
		genID() {
			this.taskID = Math.random()
				.toString(36)
				.substr(2, 9)
		},
		getAllowedDates(date) {
			if (date >= this.date) return true
		},
		addOrUpdate() {
			if (this.btnText === 'Add') {
				this.genID()
				this.$emit('add', this.taskData)
			} else {
				this.$emit('update', this.taskData)
			}
		}
	},
	watch: {
		getDescription: {
			handler(val) {
				if (val) {
					this.description = val
				}
			},
			immediate: true
		},
		getDueDate: {
			handler(val) {
				if (val) {
					this.dueDate = val
				}
			},
			immediate: true
		},
		getTaskName: {
			handler(val) {
				if (val) {
					this.taskName = val
				}
			},
			immediate: true
		},
		getPriority: {
			handler(val) {
				if (val) {
					this.priority = val
				}
			},
			immediate: true
		},
		getID: {
			handler(val) {
				if (val) {
					this.taskID = val
				}
			},
			immediate: true
		}
	}
	// onSearch(searchString) {
	// 	this.search = searchString
	// }
}
</script>
