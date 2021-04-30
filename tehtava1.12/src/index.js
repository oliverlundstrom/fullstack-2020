import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = (props) => {
  return(
  <div>
    {props.selected}
  </div>)
}

const VoteDisplay = ({number}) => {
  return(
    <div>
      has {number} votes
    </div>
  )
}

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const BestAnecdote = ({points, anecdotes}) => {
  const max_of_array = points.indexOf(Math.max(...points))
  console.log(max_of_array)
  return(
    <div>
      {anecdotes[max_of_array]}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];
    const [points, setPoints] = useState([0,0,0,0,0,0])
    const copy = [...points]
    const [selected, setSelected] = useState(0);

  const randomize = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addPoints = () => {
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display selected={anecdotes[selected]}/>
      <VoteDisplay number={points[selected]}/>
      <Button onClick={addPoints} text="vote"/>
      <Button onClick={randomize} text="next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <BestAnecdote anecdotes={anecdotes} points={points}/>
    </div>
  )
};

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)