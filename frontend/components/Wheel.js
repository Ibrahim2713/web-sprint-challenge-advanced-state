import React from 'react'
import { connect } from 'react-redux'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'

// The max val is 5, The lowest val is 0

// The starting val is 0 when clockwise is clicked it goes up 1 and vice versa for the counter clockwise

// When the position is changed the class chnage from cog - cog active and the current position of the B is displayed on the new location


//POA
//Display portion
// Create a tenary operation insie the class name and if the state is equal to the style value number display that div

// Moving the numbers
// The clockwise action will add +1

//

export  function Wheel(props) {
  const {moveClockwise, wheel, moveCounterClockwise} = props
  console.log(props)
  
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={ wheel === 0 ? "cog active" : "cog" }style={{ "--i": 0 }}>{ wheel === 0 ? "B": null}</div>
        <div className={ wheel === 1 ? "cog active" : "cog" }style={{ "--i": 1 }}> {wheel == 1 ? "B" : null}</div>
        <div className={ wheel === 2 ? "cog active" : "cog" } style={{ "--i": 2 }}>{wheel === 2 ? "B" : null}</div>
        <div className={ wheel === 3 ? "cog active" : "cog" } style={{ "--i": 3 }}>{wheel === 3 ? "B" : null}</div>
        <div className={ wheel === 4 ? "cog active" : "cog" } style={{ "--i": 4 }}>{wheel === 4 ? "B" : null}</div>
        <div className={ wheel === 5 ? "cog active" : "cog" }style={{ "--i": 5 }}>{wheel === 5 ? "B" : null}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={()=> moveCounterClockwise()} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={() => moveClockwise()}>Clockwise </button>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  console.log(state)
  return state
 
}

  


const mapDispatchProps = {
  moveClockwise,
  moveCounterClockwise
}

export default connect(mapStateToProps, mapDispatchProps)(Wheel)