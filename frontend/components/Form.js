import React from 'react'
import { connect } from 'react-redux'
import { inputChange,postQuiz } from '../state/action-creators'

export function Form(props) {
const {formData, inputChange, postQuiz} = props
console.log(props)
  const onChange = evt => {
    const {name, value} = evt.target
    const trimmedValue = value.trim()
    inputChange({...formData, [name] : trimmedValue})
  }

  const onSubmit = evt => {
    const FormData = {
      question_text: formData.newQuestion,
      true_answer_text: formData.newTrueAnswer,
      false_answer_text: formData.newFalseAnswer
    }
  evt.preventDefault()
  postQuiz(FormData)
  }

  const isSubmitDisabled = !Object.values(formData).every((field) => field.length > 0);
  

 
  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} name= "newQuestion" value= {formData.newQuestion}onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} name = "newTrueAnswer"value= {formData.newTrueAnswer}onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} name="newFalseAnswer" value={formData.newFalseAnswer} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" type="submit"disabled={isSubmitDisabled} >Submit new quiz</button>
    </form>
  )
}

 const mapStateToProps = (state) => {
 
  return {
  formData: state.form.formData
  }
}

  const mapDispatchProps =  {
    inputChange,
    postQuiz
  }


export default connect(mapStateToProps, mapDispatchProps)(Form)
