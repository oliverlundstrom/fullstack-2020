import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const DisplayRatings = (props) => (
  <table>
    <tbody>
    <tr>
      <td>{props.name}</td><td>{props.value}</td>
    </tr>
    </tbody>
  </table>
)
const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = (props) =>{
  return(
    <div>
      <DisplayRatings name={props.name} value={props.value}/>
    </div>
  )
}

const Statistics = ({good, bad, neutral, average, all}) =>{
 if (all > 0) {
 return(
  <div>
      <Statistic value={good} name="good: "/>
      <Statistic value={neutral} name="neutral: "/>
      <Statistic value={bad} name="bad: "/>
      <Statistic value={good + neutral + bad} name="all: " />
      <Statistic value={average/all} name="average"/>
      <Statistic value={parseFloat((good/all) * 100)+"%"} name="positive"/>
  </div>
  )
  } else {
    return (
      <div>No feedback given</div>
    )
  }
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
     
     <Statistics good={good} bad={bad} neutral={neutral} average={average} all={all}/>
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