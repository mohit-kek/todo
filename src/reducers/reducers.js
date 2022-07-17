const initialData = {
    todoList: []
}

const allReducers = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { data, id } = action.payload;

            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: id,
                        data: data
                    }]
            }

        case "UPDATE_TODO":
            // return state.list.map((elem) => {
            //     if (elem.id === action.id) {
            //         return { ...elem, data: action.data }
            //     }
            //     return elem;
            // });
            state.todoList.map((elem) => {
                return (elem.id === action.id ? (elem.data = action.data) : ((elem = elem)))
            })
            console.log("updates", state.todoList)
            return {
                ...state,
                todoList: [...state.todoList]
            }



        case "DELETE_TODO":
            const newTodoList = state.todoList.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                todoList: newTodoList
            }

        // case "REMOVE_TODO": return {
        //     ...state,
        //     list: []
        // }


        default:
            return state;
    }
}

export default allReducers;