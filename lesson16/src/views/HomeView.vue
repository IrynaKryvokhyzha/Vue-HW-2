<template>
  <div class="home">
	<h1>My To Do List:</h1>
	<main-masterpage>
		<div v-for="todoItem in getItemsList" :key="todoItem.id">
			{{ todoItem.title }} - {{ todoItem.price }} $
			<v-btn @click="deleteItem(todoItem.id)" density="compact" >Delete</v-btn>
			<!-- todoItem.id тут вказуєм бо тут іде ітерування і його в даті немає.її більше нема звідки взяти-->
			<v-btn @click="onEdit(todoItem)" density="compact" >Edit</v-btn>
			
		</div>
		<hr>
		<div>
			<h3>Add a new task:</h3>
			<div>
				<label>
					Title
					<input v-model="task.title" type="text">
				</label>
			</div>
			<div>
				<label>
					Price
					<input v-model="task.price" type="number">
				</label>
			</div>
			
		</div>
		<v-btn @click="onAction" density="compact" >{{actionButtonTitle}}</v-btn>
		<!-- тут не вказуєм id таски бо тут нема ітерування і вона в даті є, звідти і підтянемо її-->
		<hr>
		<h3>Filters</h3>
		<div>
			<label>
				Price
				<input v-model="searchPrice" type="number">
			</label>
			<v-btn @click="onFilterSearch" density="compact" >Search</v-btn>
		<v-btn @click="onFilterClear" density="compact" >Clear filter</v-btn>
		</div>
	</main-masterpage>
	
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MainMasterpage from '@/masterpages/MainMasterpage.vue';

export default {
  name: "HomeView",
  components: { MainMasterpage },
  data() {
	return {
		task: {},
		copyTask: {},
		searchPrice: null
	}
  },

	computed: {
		...mapGetters('toDoItems',['getItemsList', 'isLoading', 'hasError']),
		isEditing(){
			return this.task.id
		},
		actionButtonTitle(){
			return this.isEditing ? 'Save' : 'Add task'
		}
	},
	created () {
		this.loadList()
	},
	methods: {
		...mapActions('toDoItems', ['loadList', 'addItem', 'deleteItem', 'updateItem', 'loadFilteredData']),
		onAction(){
			if(this.isEditing){
				// const obj={}
				// if(this.task.title!==this.copyTask.title)
				// obj.title=this.task.title
				// if(this.task.price!==this.copyTask.price)
				// obj.price=this.task.price
				// this.updateItem({
				// itemId: this.task.id,
				// data: {
				// 	title: this.task.title,
				// 	price: this.task.price
				// }

				// або так, це те саме:

				const data={}
				if(this.task.title!==this.copyTask.title)
				data.title=this.task.title
				if(this.task.price!==this.copyTask.price)
				data.price=this.task.price

				this.updateItem({
				itemId: this.task.id,
				data
				})
			}
			
			else
			this.addItem(this.task)
			this.task= {}
		},
		onEdit(todoItem){
			this.task={...todoItem}
			this.copyTask=todoItem
		},
		onFilterSearch(){
			this.loadFilteredData({
				fieldTitle: 'price',
				compareOperator: '==', 
				valueToCompare: this.searchPrice,
			})
		},
		onFilterClear(){
			this.loadList()
			this.searchPrice=null
		}
	},
};
</script>
<style lang="scss" scoped>
input{
	border: 2px solid #aaadb0;
	border-radius: 4px;
}
</style>