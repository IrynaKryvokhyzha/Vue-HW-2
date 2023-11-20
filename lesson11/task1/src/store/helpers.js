export function isAppropriateToFilter(driver, filterObj){
	// for (const props in filterObj) {
	// 	if(props==='experienceFrom' && filterObj[props] &&  driver.experience<filterObj[props]){
	// 		return false
	// 	}else if(props==='experienceTo' && filterObj[props] &&  driver.experience>filterObj[props]){
	// 		return false
	// 	}else if(filterObj[props] && driver[props] && !driver[props].toLowerCase().includes(filterObj[props].toLowerCase()) ) {
	// 		return false
	// 	}
	// }
	// return true
	if(filterObj.name){
		if(!driver.name.toLowerCase().includes(filterObj.name.toLowerCase()))return false
	}
	if(filterObj.experienceFrom){
		if(filterObj.experienceFrom<driver.experience) return false
	}
	if(filterObj.experienceTo){
		if(filterObj.experienceTo>driver.experience) return false
	}
	return true
}
