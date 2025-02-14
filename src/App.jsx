import React,{useState} from 'react'; 
import GoalList from './component/GoalList/GoalList.jsx'; 
import NewGoal from './component/NewGoal/NewGoal.jsx';

import './App.css';

function App() {
  
  const [courseGoals , setCourseGoals] =useState([
    {id: 'cg1', text: 'Master the fundamentals and beyond!' },
    {id : 'cg2', text: 'Build projects that you’ll be proud of!'},
    {id : 'cg3', text: 'Debug like a pro—bugs fear you!'},
    {id : 'cg4', text: 'Think like a problem solver, not just a coder!'},
    {id : 'cg5', text: 'Stay consistent and keep leveling up!'}
  ]);

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals(courseGoals.concat(newGoal));
  }

  return (
    <>
      <div className="app-container">
        <h2 className="heading">Course Goals 🚀</h2>
        <NewGoal  addGoal={addNewGoalHandler} />
        <GoalList goals = {courseGoals} />

      </div>
    </>
  );
}

export default App;

