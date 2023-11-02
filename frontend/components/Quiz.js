import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { fetchQuiz } from '../state/action-creators'
import { selectAnswer,selectAnswer2,postAnswer } from '../state/action-creators'



  export function Quiz(props) {
  const {initialQuizState, fetchQuiz, selectedAnswers, selectAnswer, selectAnswer2, postAnswer } = props

  const handleSubmit = () => {
    let answerId = null
if(selectedAnswers.Button1 === true){
  answerId = initialQuizState.state.answers[0].answer_id
} else if(selectedAnswers.Button2 === true){
  answerId = initialQuizState.state.answers[1].answer_id
}
    const postData = {
      quiz_id: initialQuizState.state.quiz_id,
      answer_id: answerId
     }

 console.log('here')
  postAnswer(postData)
  fetchQuiz()
  }



 




 

  useEffect(() => {
    fetchQuiz()
    
  },[])
console.log(props)
// WHen the submit buttonn is clicked the a new quiz is fetched
// The submitt button must remain diabled unless an answer is selected

  return (
    <div id="wrapper" >
      {
     
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."

        
        initialQuizState != null ? (
          <>
            <h2>{initialQuizState.state.question}</h2>

            <div id="quizAnswers">
              <div className= {selectedAnswers.Button1 ? 'answer selected' : 'answer' }>
                {initialQuizState.state.answers[0].text} 
                <button onClick={() => selectAnswer()}>
                    {selectedAnswers.Button1 ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={selectedAnswers.Button2  ? 'answer selected' : `answer`}>
              {initialQuizState.state.answers[1].text}
               
                <button onClick={() => selectAnswer2()}>
                  {selectedAnswers.Button2 ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button onClick ={() => handleSubmit()}id="submitAnswerBtn" type='submit' disabled={selectedAnswers.Button1 === false && selectedAnswers.Button2 === false ? true : false} >Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div> 
  )
}
const mapStateToProps = state  => {

return {
initialQuizState: state.quiz,
selectedAnswers: state.selectedAnswer,
quizMessages: state.infoMessage
}
}

const mapDispatchProps = {
    selectAnswer,
    fetchQuiz,
    selectAnswer2,
    postAnswer
}
export default connect(mapStateToProps, mapDispatchProps)(Quiz)
