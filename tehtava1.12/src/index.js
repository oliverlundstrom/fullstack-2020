import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = (props) => {
  return(
  <div>
    {props.anecdotes[0]}
  </div>)
}

const Button = ({onClick}) => {
  return(
    <button onClick={onClick}>
      next anecdote
    </button>
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
   
  const [selected, setSelected] = useState(0);

  const suffleArray = () => {
    for (let i = anecdotes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random()*(i+1));
      const temp = anecdotes[i];
      anecdotes[i] = anecdotes[j];
      anecdotes[j] = temp;
    }
  }

  return (
    <div>
      <Display anecdotes={anecdotes}/>
      <Button onClick={suffleArray}/>
    </div>
  )
};

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)