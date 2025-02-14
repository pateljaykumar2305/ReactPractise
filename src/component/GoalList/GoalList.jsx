import React from 'react';
import './GoalList.css';

const GoalList = props => {
    console.log('GoalList component rendered');
    console.log(props.goals);
    return (
        <div className="goals-container">
          <ul>
    {props.goals?.length > 0 
        ? props.goals.map((goal) => (
            <li key={goal.id} className="goal-item">✅ {goal.text}</li>
        ))
        : <li className="goal-item">No goals available</li>
    }
     </ul>

        </div>
    );
};

export default GoalList;
