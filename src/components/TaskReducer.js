import { v4 as uuidv4 } from 'uuid'

const initState = {
    tasks: []
}

const cartReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_TASK':
            let newTasks = [...state.tasks, {id: uuidv4(), title: action.title, description: action.description, done: false}]
            return{
                ...state,
                tasks: newTasks
            }
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(elem=>elem.id!==action.id)
            }
        case 'UPDATE_TASK':
            let index; 
            let done;
            state.tasks.filter((elem, i)=>{if(elem.id===action.id){index=i; done=elem.done}; return 0})
            return {
                ...state,
                tasks: state.tasks.map((elem, i)=>{
                    if(index!==i)
                    return elem
                    return {id: action.id, title: action.title, description: action.description, done: done}
                }
                )
            }
        default: return{
            ...state
        }
    }
}

export default cartReducer