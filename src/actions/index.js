export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const updateTodo = (id, data) => {
    console.log(id, data)
    return {
        type: "UPDATE_TODO",
        id: id,
        data: data
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}

// export const removeTodo = () => {
//     return {
//         type: "REMOVE_TODO"
//     }
// }