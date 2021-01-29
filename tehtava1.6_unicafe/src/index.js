import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const DisplayRatings = (props) => (
  <div>{props.name} {props.value}</div>
)

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const Statistics = (props) =>{
  <div>

  </div>
}


const App = () => {

  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [good, setGood] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);

  const handleBadrating = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(average - 1)
  };
  const handleNormalrating = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage(average + 0)
  };
  const handleGoodrating = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(average + 1)
  };
  
  return (
    <div>
      <h1>Give feedback!</h1>

      <Button onClick={handleGoodrating} text="good"/>
      <Button onClick={handleNormalrating} text="neutral"/>
      <Button onClick={handleBadrating} text="bad"/>

      <h1>Statistics</h1>
     
      <DisplayRatings value={good} name="good: "/>
      <DisplayRatings value={neutral} name="neutral: "/>
      <DisplayRatings value={bad} name="bad: "/>
      <DisplayRatings value={all} name="all: " />
      <DisplayRatings value={average/all} name="average"/>
      <DisplayRatings value={parseFloat((good/all) * 100)+"%"} name="positive"/>
    </div>
  )
};

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

/*<Button onClick={handleGoodrating} text="good"/>
<Button onCLick={handleNormalrating} text="neutral"/>
<Button onClick={handleBadrating} text="bad"/>


const handleBadrating = () => {
  setBad(bad + 1)
};
const handleNormalrating = () => {
  setNeutral(neutral + 1)
};
const handleGoodrating = () => {
  setGood(good + 1)
};

*/

/*
const BadButton = (props) => (
  <button onClick={props.setBad(props.bad + 1)}>
    bad
  </button>
)
const NeutralButton = (props) => (
  <button onClick={props.setNeutral(props.neutral + 1)}>
    neutral
  </button>
)
const GoodButton = (props) => (
  <button onClick={props.setGood(props.good + 1)}>
    good
  </button>
)
      <GoodButton setGood={setGood} good={good}/>
      <NeutralButton setNeutral={setNeutral} neutral={neutral} />
      <BadButton setBad={setBad} bad={bad} />

*/