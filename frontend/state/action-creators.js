// ❗ You don't need to add extra action creators to achieve MVP
import axios from "axios"
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, RESET_FORM, SET_SELECTED_ANSWER, SET_SELECTED_ANSWER2, RESET_ANSWERS, SET_INFO_MESSAGE, INPUT_CHANGE,DEFAULT} from "./action-types"

export function moveClockwise() { 
  return ({type: MOVE_CLOCKWISE })
}

export function moveCounterClockwise() { 
  return({type: MOVE_COUNTERCLOCKWISE})
}

export function selectAnswer() {
  return ({type: SET_SELECTED_ANSWER})
 }

 export function selectAnswer2() {
  return({type: SET_SELECTED_ANSWER2})
 }

export function setMessage() { 
  return({type: SET_INFO_MESSAGE, payload: data})
}

export function setQuiz() { }

export function inputChange(formData) {
  return({type:INPUT_CHANGE, payload: formData })
 }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  
  return function (dispatch) {

    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    dispatch({ type: DEFAULT})
    axios
      .get('http://localhost:9000/api/quiz/next')
      .then(res => {
        
          dispatch({type: SET_QUIZ_INTO_STATE, payload: res.data})
      })
      .catch(err => console.log(err.data))
  }
}
// Dispatching an action to reset answer state
export function postAnswer(postData) {
  return function (dispatch) {

 

    
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    axios
      .post('http://localhost:9000/api/quiz/answer',postData)
      .then(res => {
   dispatch({type: RESET_ANSWERS})
   dispatch({type:SET_INFO_MESSAGE, payload: res.data.message})
       
      })
      .catch(err => console.log(err))

  }
}
export function postQuiz(FormData) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    axios.post('http://localhost:9000/api/quiz/new', FormData)
    .then(res => {
      dispatch({type: SET_INFO_MESSAGE, payload: `Congrats: "${res.data.question}" is a great question!`})
      console.log(res)
      dispatch({type:RESET_FORM})
    })
   
    .catch(err => {
      console.log(err)
      
  
  })
}
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
