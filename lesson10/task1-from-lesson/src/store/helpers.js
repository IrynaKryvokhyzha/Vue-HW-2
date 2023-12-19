export function moveElementsBetweenArrays(element, listToRemoveElement, listToAddElement){
	const newListToRemoveElement = listToRemoveElement.filter(item=>item!==element)
	const newListToAddElement=[...listToAddElement, element]
	return {
		newListToRemoveElement,
		newListToAddElement
	}
}