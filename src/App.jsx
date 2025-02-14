import React from 'react'; 
import GoalList from './component/GoalList'; 
import './App.css';

function App() {
 

  return (
    <>
      <div className="app-container">
        <h2 className="heading">Course Goals 🚀</h2>
        <GoalList />
      </div>
    </>
  );
}

export default App;

