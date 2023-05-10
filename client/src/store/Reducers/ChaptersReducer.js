import {GET_ALL_CHAPTERS , ADD_NEW_CHAPTER, GET_CHAPTER_BY_ID, GET_CHAPTER_CONTENT_BY_ID  }  from '../Actions/ActionTypes';


const initState = {
    chapters: [],
    editingChapter:{
        
    },
    content:[]
    
};


export default function chaptersReducer(state = initState, action) {
    console.log(action,'action from reducer ')

    switch(action.type) {

        case GET_ALL_CHAPTERS:
           
            return {
                ...state,
                chapters: action.payload, 
            }

       case ADD_NEW_CHAPTER: 
       
       return {
           ...state, 
           chapters: [...state.chapters, action.payload],
       }

       case GET_CHAPTER_BY_ID:
           return {
               ...state, 
               editingChapter: action.payload
           }

        case GET_CHAPTER_CONTENT_BY_ID:
            return {
                ...state, 
                content: action.payload
            }   

        default: 
        return state;     
    }
}

