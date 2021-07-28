import React from 'react';
import { createContext } from 'react';
import useReducerWithThunk from 'use-reducer-thunk';
import { ADD_USER,
         ADD_ITEM,
         SET_NAV,
         CHANGE_COMPLETED,
         REMOVE_ITEM,
         SET_FLAG,
         CHECK_PASSWORD,
         CHECK_USERNAME, 
         LOAD_LISTITEMS} from '../utils/constants';

export const StoreContext = createContext();
let listItems = [];
// let listItems = [
//     {name: "讀書", completed: false, id: "i1"},
//     {name: "寫作業", completed: false, id: "i2"},
//     {name: "畫畫", completed: false, id: "i3"},
// ]
let usersDetail = [
    {name:"YT", password:"123", id:"u1"},
]
const initialState = {
    users:{
        usersDetail
    },
    list:{
        listItems
    },
    clicked: 0,
    flag: 0,
    userName: '',
    password: ''
}
function reducer(state, action) {
    switch (action.type) {
        case ADD_USER:
            const newUser = action.payload
            usersDetail = [...state.users.usersDetail, newUser];
            return{
                ...state,
                users: {...state.users, usersDetail}
            };
        case ADD_ITEM:
            const newItem = action.payload;
            const num = listItems.findIndex(lists => lists.name === newItem.name);
            if(num === -1) {
                listItems = [...state.list.listItems, newItem]  
            }else {
                alert('已經加入過此項目囉！')
            }
            return{
                ...state,
                list: {...state.list, listItems}
            }
        case SET_NAV:
            return{
                ...state,
                clicked: action.payload
            }
        case CHANGE_COMPLETED:
            listItems = action.payload;
            return{
                ...state,
                list: {...state.list, listItems}
            }
        case REMOVE_ITEM:
            listItems = state.list.listItems.filter((x) => x.id !== action.payload);
            return{
                ...state,
                list: {...state.list, listItems}
            }
        case SET_FLAG:
            return{
                ...state,
                flag: action.payload
            }
        case CHECK_PASSWORD:
            return{
                ...state,
                password: action.payload
            }
        case CHECK_USERNAME:
            return{
                ...state,
                userName: action.payload
            }
        case LOAD_LISTITEMS:
            listItems = action.payload;
            return{
                ...state,
                list: {...state.list, listItems}
            }
        default: 
            return state;
    }
}
export function StoreProvider(props) {
    const [state, dispatch] = useReducerWithThunk(
        reducer,
        initialState,
        "example"
    )
    const value = { state, dispatch };
    return(
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    );
}