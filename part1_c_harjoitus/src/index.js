import React, { useState } from "react"
import ReactDOM from "react-dom"

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )
  }

  const Display = ({counter}) => {
    return (
      <div>{counter}</div>
    )
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button 
        handleClick={increaseByOne}
        text="plus"
        />
      <Button 
        handleClick={decreaseByOne}
        text="minus"
      />
      <Button 
        handleClick={setToZero}
        text="zero"
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))