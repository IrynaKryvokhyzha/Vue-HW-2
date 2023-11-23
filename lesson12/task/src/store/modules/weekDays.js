import {weekDaysList} from '@/data/weekDaysData';
export default ({
   namespaced:true,
   state: {
		weekDays:[]
	},
   getters: {
		getWeekDays:({weekDays})=>weekDays,
		getWeekDayById:(state)=>(weekDayId)=>state.weekDays.find(day=>day.id==weekDayId)
	},
   mutations: {
		setWeekDaysData(state, list){
			state.weekDays=list
		}
	},
   actions: {
		loadWeekDaysData({commit}){
			commit('setWeekDaysData',weekDaysList)
		}
	},
   modules: {},
 });
