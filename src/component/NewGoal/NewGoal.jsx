import React, { useState } from "react";
import "./NewGoal.css";


const NewGoal = (props) => {

    const [enterText , settextChange]= useState("");

    const textChangeHandler = (event) => {
        settextChange(event.target.value);
    };

    const addGoalHandler = (event) => {
        event.preventDefault();
      
        const newGoal = {
            id:Math.random(),
            text: enterText,
        }
     
        props.addGoal(newGoal);
        settextChange("");
    }
    return (
        <form className="new-goal-form" onSubmit={addGoalHandler}>
            <input type="text" className="new-goal-input" value={enterText} onChange={textChangeHandler}/>
            <button type="submit" className="new-goal-button">Add Goal</button>
        </form>
    );

}

export default NewGoal;