  const initState = {
    menu: [],
    orders:[]
    // orderStatus: []
}

export const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_MENU': {
            return {
                ...state,
                menu:action.payload
            
                }
            }
        case 'ADD_ORDER':{
            return {
                ...state,
                orders: [
                    ...state.orders, {
                        id: state.orders + 1,
                        task: action.payload,
                        done: false
                    }
                ]
            }
        }
        // case 'POST_ORDER':
        //     return {
        //         ...state,
        //         orders: 
        //         state.orders.map(order => {
        //             if (order.id !== action.payload) {
        //                 return order
        //             }

        //             return {
        //                 ...order,
        //                 done: !order.done
        //             }
        //         })
              
        //     }
             case 'POST_ORDER':
            return {
                ...state,
                orderStatus: action.payload
            }
// case 'FETCH_ORDER': {
//     return {
//         ...state,
//         orders: [
//             ...state.orders, {
//                 order: action.payload,
//             }
//         ]
//     }
// }

default:
return state
}
}

export default orderReducer