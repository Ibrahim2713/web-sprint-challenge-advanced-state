// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE,SET_QUIZ_INTO_STATE, RESET_FORM, SET_SELECTED_ANSWER, SET_SELECTED_ANSWER2, RESET_ANSWERS, SET_INFO_MESSAGE,INPUT_CHANGE, DEFAULT} from './action-types'
const initialWheelState = 0


function wheel(state = initialWheelState, action) {
    switch(action.type) {
      case MOVE_CLOCKWISE: 
      
      return (state + 1) % 6
 
      case MOVE_COUNTERCLOCKWISE:
        return (state - 1 + 6)  % 6
        
        default:
          return state
    }

}

  const initialQuizState = null

function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case SET_QUIZ_INTO_STATE:
      return {
        ...state,
          state: action.payload
      }
      case DEFAULT:
        return state
      default:
        return state
  }
  
 
}

const initialSelectedAnswerState = {
  Button1: false,
  Button2: false
}


function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case SET_SELECTED_ANSWER:
      return{
          ...state,
          Button1: true,
          Button2: false
      }
      case SET_SELECTED_ANSWER2:
        return{
          ...state,
          Button2: true,
          Button1: false
     
        }
        case RESET_ANSWERS: 
        return {  
          ...state,
          Button1: false,
          Button2: false
        }
      default:
        return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
  case SET_INFO_MESSAGE:
    return {
      ...state,
        state: action.payload
    }
    default:
  return state

  }
}

const initialFormState = {
  formData : {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
  }
}
function form(state = initialFormState, action) {
  switch(action.type){
    case INPUT_CHANGE: 
    return{
      ...state, 
        formData: {
          ...state.formData,
          ...action.payload
        }
    }
    case RESET_FORM:
      return {
        ...state,
        formData: {
          newQuestion: '',
          newTrueAnswer: '',
          newFalseAnswer: ''
        }
      }
    default:
  return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
