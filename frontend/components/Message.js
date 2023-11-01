import React from 'react'
import { connect } from 'react-redux'
export  function Message(props) {
  const {message} = props
  console.log(message)
  return <div id="message">{message.state}</div>
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    message: state.infoMessage
  }
}
export default connect(mapStateToProps)(Message)